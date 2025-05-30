import React from 'react';
import { Spin } from 'antd';
import classNames from 'classnames';

import ExcerciseModal from '../ExcerciseModal';

import styles from './styles.module.css'
import { pageView } from '../../constants';
import { dataBook } from '../../constants/dataBook'
import { clickHelper } from '../../constants/functions';
import pageQuestions from '../../constants/pageQuestions';
import { useSelector } from 'react-redux';

const FriendsPlus = ({ currentPage, isZoomIn, view }) => {
  const isScrollView = view === pageView.SCROLL_PAGE;

  const loggedInUserSGK = useSelector((rootState) => rootState.loginReducer.loggedInUserSGK)

  const [state, setState] = React.useState({
    loading: true,
    isVisibled: false,
    currentExcercise: 0,
    data: []
  });

  const countImgLoaded = React.useRef(0)

  React.useEffect(() => {
    countImgLoaded.current = 0;

    const data = dataBook[currentPage];

    if (!data) return;

    let length = 0;
    data.forEach((item, index) => {
      length += item.length
    })
    data.lengthAllArray = length
    setState((prevState) => ({ ...prevState, data, loading: false }))
  }, [currentPage])

  const onFinishLoadImage = React.useCallback(() => {
    countImgLoaded.current++;

    if (countImgLoaded.current >= state.data.lengthAllArray) {
      setState((prevState) => ({ ...prevState, loading: false }));
      countImgLoaded.current = 0;
    }
  }, [state.data])

  const toggleModal = React.useCallback(() => {
    setState((preState) => ({
      ...preState,
      isVisibled: !state.isVisibled
    }))
  }, [state.isVisibled])

  const openExcercise = React.useCallback((excerciseNum, linkTo) => {
    if (linkTo) {
      const win = window.open(linkTo, "_blank");
      return win.focus();
    }
    if (excerciseNum === 0) return null;
    // if()

    setState((preState) => ({
      ...preState,
      currentExcercise: excerciseNum
    }));

    toggleModal();
  }, [toggleModal]);

  const onMouseDown = React.useCallback((e) => {
    clickHelper.setClickTime(Date.now());
  }, [])

  const onMouseUp = React.useCallback((excerciseNum, linkTo) => (e) => {
    const clickTime = clickHelper.getClickTime();

    const duration = Date.now() - clickTime;

    if (duration > 300) return;

    openExcercise(excerciseNum, linkTo)
  }, [openExcercise]);

  const renderContent = React.useMemo(() => {
    return state.data.map((row, index) => {
      return (
        <span key={index} className={!isZoomIn ? styles.imgWrapper : styles.imgWrapperZoomIn}>
          {row.map((rowItem, rowIndex) => {
            return (
              <span
                key={rowIndex}
                style={{
                  width: isScrollView ? '100%' : undefined,
                }}
              >
                <img
                  alt='...'
                  src={rowItem.imgUrl}
                  className={classNames({
                    [styles.img]: !isScrollView,
                    [styles.imgScrollView]: isScrollView,
                  })}
                  style={{ cursor: rowItem.excerciseNum ? 'pointer' : 'auto' }}
                  onMouseDown={onMouseDown}
                  onLoad={onFinishLoadImage}
                  onMouseUp={onMouseUp(rowItem.excerciseNum, rowItem.linkTo)}
                // onDoubleClick={() => openExcercise(item.excerciseNum)}
                />
              </span>
            )
          })}
        </span>
      )
    })
  }, [state.data, isZoomIn, isScrollView, onMouseDown, onFinishLoadImage, onMouseUp])

  const postAnswerToApi = React.useCallback(async (data) => {

    const values = {
      ...data,
      studentId: `${loggedInUserSGK.id}`,
      CourseId: 'D28DA15E-6455-4A9D-886C-858CC5B782F1',
    }
    const configs = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(values)
    }
    const res = await fetch('https://cloud.softech.cloud/mobile/api/SgkEbookAnswer/SaveAnswer', configs).then((res) => res.json())
    // console.log(res)
  }, [loggedInUserSGK])

  const contentModal = React.useMemo(() => {
    const currentPageQuestion = pageQuestions[currentPage]?.[state.currentExcercise];

    const Component = currentPageQuestion?.component;

    if (!Component || !state.isVisibled) return null;

    return <Component {...currentPageQuestion} postAnswerToApi={postAnswerToApi} />;
  }, [currentPage, postAnswerToApi, state.currentExcercise, state.isVisibled])

  if (!state.data) return null;

  return (
    <div className={classNames({
      [styles.container]: !isScrollView,
      [styles.scrollView]: isScrollView,
    })}>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {state.loading && <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spin size='large' /></div>}
        <div style={!state.loading ? {} : { display: 'none' }}>
          {renderContent}
        </div>
      </div>

      <ExcerciseModal
        isVisibled={state.isVisibled}
        contentModal={contentModal}
        excerciseNum={state.currentExcercise}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default FriendsPlus;
