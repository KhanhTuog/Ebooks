import React from 'react';
import { ListGroupItem, ListGroup } from 'reactstrap';
import { Input } from 'antd';
import Notifications from '../Notification';
import Listen from '../../components/Listening';
const { Search } = Input;
const DictionaryText = () => {
  const [state, setState] = React.useState({
    wordDictionary: null,
    loading: false,
  })


  const getVocabulary = React.useCallback(async (vocabulary) => {
    setState((prevState) => ({ ...prevState, loading: true }))
    try {
      const res = await fetch(`https://cloud.softech.cloud/mobile/ames/api/dictionary/${vocabulary}`).then((e) => e.json())
      if (res.error) {
        setState((prevState) => ({ ...prevState, loading: false }));
        Notifications('danger', 'Thông báo', 'Không tìm thấy kết quả');
        return;
      }

      setState((prevState) => ({ ...prevState, wordDictionary: res.result, loading: false }))
    } catch (error) {
      Notifications('danger', 'Thông báo', 'Có lỗi xảy ra vui lòng thử lại sau')
    }

  }, [])

  return (
    <div style={{ padding: 18 }}>
      <Search placeholder="Enter the search word" onSearch={getVocabulary} enterButton loading={state.loading} />
      {state.wordDictionary && (
        <div style={{ maxHeight: '30vh', overflowY: 'scroll' }}>
          <ListGroup style={{ flexWrap: 'wrap', maxWidth: 250 }} className='mt-3'>
            <ListGroupItem className="bg-info text-white" style={{ fontSize: 18, fontWeight: '600' }}>
              Vocabulary: {state.wordDictionary.text}
              <Listen
                custom
                audioURL={state.wordDictionary.audio}
                className={'question-type__audioExampleType02 ml-2'}
              >
                <i style={{color:'#12C6ED'}} className="fas fa-volume-up"></i>
              </Listen>
            </ListGroupItem>
            <ListGroupItem style={{ fontSize: 15, fontWeight: '600' }}>
              Phonetic: {state.wordDictionary.phonetic}
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ fontSize: 15, fontWeight: '600' }}>Means:{' '}</span>
              {state.wordDictionary?.types.map(({ wordType, means }, index) => (
                <div key={index}>
                  <span>{wordType}</span>
                  {means.map((mean) => (
                    <div key={mean} >
                      <i className="fas fa-hand-point-right"></i>
                      <span> {mean}</span>
                    </div>
                  ))}
                </div>
              ))}{' '}
            </ListGroupItem>
          </ListGroup>
        </div>
      )}
    </div>
  )
}

export default DictionaryText;
