import React from 'react'
import { Modal } from 'antd';
import Atrament from 'atrament';
import { Button } from 'reactstrap'
import classNames from 'classnames';
import { ResizeSensor } from 'css-element-queries';
import queryString from 'query-string'
// import { FlipPage, article } from 'react-flip-page'
import NotificationAlert from 'react-notification-alert';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import ToolBar from '../../components/ToolBar';
import CanvasShape from '../../components/CanvasShape';
import FriendsPlus from '../../components/FriendsPlus';
import { Container } from '../../components/DndBox/Container';

import styles from './styles.module.css';
import { dataBook } from '../../constants/dataBook';
import { eventHelper, hexToRgbA, setRgbaColorAlpha } from '../../constants/functions';
import { pageView, localStorageKey, notificationAlert, atrament, Colors, books } from '../../constants';
import FormModal from '../../components/FormModal';
import FormLogin from '../../components/FormLoginDesign';
import closeImage from '../../assets/icon/close.svg'
import { useDispatch, useSelector } from 'react-redux';
import { POST_CODE_LOGIN_REQUEST, POST_LOGOUT } from '../../Redux/actions'
import Notifications from '../../components/Notification';
import Offline from '../../Offline';

const maxPage = Object.keys(dataBook).length;

const listPage = () => {
  let listPageArray = []
  for (let i = 1; i <= maxPage; i++) {
    const imgUrl = `img/FriendsPlus/ListPage/${i}.jpg`;
    listPageArray.push({ imgUrl, pageNum: i })
  }
  return listPageArray
}

const Homepage = () => {
  const params = useParams();

  const history = useHistory();

  const location = useLocation();

  const dispatch = useDispatch()


  const { code } = React.useRef(queryString.parse(location.search)).current

  const loggedInUserSGK = useSelector((rootState) => rootState.loginReducer?.loggedInUserSGK)

  const currentPage = parseInt(params.currentPage);

  const [state, setState] = React.useState({
    isZoomIn: 1,
    isVisibleModalLogin: false,
    drop: null,
    tileView: false,
    noteText: false,
    forceAddText: false,
    pageView: pageView.ONE_PAGE,
    toolBarPosition: 'ToolBarRight',
    matches: window.matchMedia("(min-width: 993px)").matches,
    menuItems: [
      {
        icon: 'fas fa-home',
        type: 'SaveAndClose',
        tooltip: 'Save & Close'
      },
      {
        icon: 'fas fa-search-plus',
        type: 'zoomIn',
        tooltip: 'Zoom in'
      },
      {
        icon: 'fas fa-search-minus',
        type: 'zoomOut',
        tooltip: 'Zoom out'
      },
      {
        ref: React.createRef(),
        icon: 'fas fa-file', type: 'page', tooltip: 'Page view',
        subMenu: [
          { type: pageView.ONE_PAGE, icon: 'fas fa-file' },
          { type: pageView.TWO_PAGE, icon: 'fas fa-columns' },
          { type: pageView.SCROLL_PAGE, icon: 'fas fa-scroll' },
        ]
      },
      {
        ref: React.createRef(),
        icon: 'fas fa-pen', type: 'pen', tooltip: 'Pen',
        subMenu: [
          { type: 'pen', icon: 'fas fa-paint-brush' },
        ]
      },
      {
        ref: React.createRef(),
        icon: 'fas fa-highlighter', type: 'highlighter', tooltip: 'Highlighter',
        subMenu: [
          { type: 'highlighter', icon: 'fas fa-paint-brush' },
        ]
      },
      {
        ref: React.createRef(),
        type: 'erase',
        tooltip: 'Erase',
        icon: 'fas fa-eraser',
        subMenu: [
          { type: 'erase-all', icon: 'fas fa-eraser', name: 'Remove all' },
          { type: 'erase-pen', icon: 'fas fa-eraser', name: 'Eraser' },
        ]
      },
      // hidden
      {
        icon: 'fas fa-font',
        type: 'text',
        tooltip: 'Text',
      },
      // hidden
      {
        type: 'shape',
        tooltip: 'Shapes',
        hidden: true,
        icon: 'far fa-square',
        subMenu: [
          { type: 'shape-square', icon: 'far fa-square', name: 'Square' },
          { type: 'shape-circle', icon: 'far fa-circle', name: 'Circle' },
        ]
      },
      {
        ref: React.createRef(),
        icon: 'fas fa-list', type: 'listPage', tooltip: 'List Page',
        subMenu: listPage()
      },
      {
        ref: React.createRef(),
        icon: 'fas fa-book',
        type: 'dictionary',
        tooltip: 'Dictionary',
        subMenu: [
          { type: 'dictionary-sub' },
        ]
      },
      {
        icon: 'fas fa-th',
        type: 'tileView',
        tooltip: 'Tile View',
      },
      {
        ref: React.createRef(),
        type: 'moveTool-Bar',
        tooltip: 'Move Tool Bar',
        icon: 'far fa-window-restore',
        selected: false,
        subMenu: [
          { type: 'ToolBarLeft', icon: 'fas fa-arrow-circle-left', name: 'Move to left' },
          { type: 'ToolBarRight', icon: 'fas fa-arrow-circle-right', name: 'Move to right' },
          { type: 'ToolBarTop', icon: 'fas fa-arrow-circle-up', name: 'Move to top' },
          { type: 'ToolBarBottom', icon: 'fas fa-arrow-circle-down', name: 'Move to bottom' },
        ]
      },
      {
        icon: 'fas fa-sticky-note',
        type: 'note',
        tooltip: 'Note',
      },
      // {
      //   icon: <img src="/img/switch-book.png" alt="" style={{ width: 48 }} />,
      //   type: 'switch-book',
      //   tooltip: 'Switch book',
      // },
      {
        icon: "fas fa-sign-out-alt",
        type: 'logOut',
        tooltip: 'Logout',
      },
    ]
  });

  React.useEffect(() => {
    if (code && !loggedInUserSGK) {
      dispatch({ type: POST_CODE_LOGIN_REQUEST, code })
    }
    if (!loggedInUserSGK) {
      setState((prevState) => ({ ...prevState, isVisibleModalLogin: true }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, dispatch])
  React.useEffect(() => {
    if (loggedInUserSGK) {
      setState((prevState) => ({ ...prevState, isVisibleModalLogin: false }))
    }
  }, [loggedInUserSGK])

  const onStrokeRecorded = React.useCallback(({ stroke }) => {
    let storedStrokes = localStorage.getItem(localStorageKey.STROKES);
    const { globalAlpha } = atrament.current;

    const strokeObj = { ...stroke, globalAlpha };

    if (!storedStrokes) {
      storedStrokes = { [currentPage]: [strokeObj] };
    } else {
      storedStrokes = JSON.parse(storedStrokes);
      if (!storedStrokes[currentPage]) {
        storedStrokes[currentPage] = [strokeObj];
      } else {
        storedStrokes[currentPage].push(strokeObj);
      }
    }

    localStorage.setItem(localStorageKey.STROKES, JSON.stringify(storedStrokes));
  }, [currentPage]);

  // Initialize drawing tool
  React.useEffect(() => {
    const canvas = document.getElementById('sketchpad');
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    atrament.current = new Atrament(canvas, {
      weight: 5,
      smoothing: 0.7,
      mode: 'disabled',
      adaptiveStroke: false,
    });

    atrament.current.recordStrokes = true;
    atrament.current.addEventListener('strokerecorded', onStrokeRecorded);


    return () => {
      atrament.current?.destroy();
      atrament.current?.removeEventListener('strokerecorded', onStrokeRecorded);
    }
  }, [onStrokeRecorded]);

  // Disable image drag
  React.useEffect(() => {
    document.querySelectorAll('img').forEach((item) => {
      item.setAttribute('draggable', 'false');
    });
  }, [currentPage, state.isZoomIn]);

  const loadStrokes = React.useCallback(() => {
    atrament.current.clear();

    let storedStrokes = localStorage.getItem(localStorageKey.STROKES);

    if (!storedStrokes) return;

    storedStrokes = JSON.parse(storedStrokes);

    const pageStrokes = storedStrokes[currentPage];

    if (!pageStrokes) return;
    const prevConfigs = {
      mode: atrament.current.mode,
      color: atrament.current.color,
      weight: atrament.current.weight,
      globalAlpha: atrament.current.globalAlpha,
    }

    for (const item of pageStrokes) {
      if (item.type === 'text') continue;

      if (item.type === 'shape') {
        atrament.current.context.beginPath();

        let params = {
          x: item.x,
          y: item.y,
          width: item.width,
          height: item.height,
        }

        if (item.shape === 'arc') {
          delete params.width;
          delete params.height;
          params.radius = item.radius;
          params.sAngle = 0;
          params.eAngle = 2 * Math.PI;
        }

        const paramList = [];

        for (const key in params) {
          paramList.push(params[key]);
        }

        atrament.current.context[item.shape](...paramList);
        atrament.current.context.stroke();
        continue;
      }

      const { points, weight, color, mode, globalAlpha } = item;

      atrament.current.mode = mode;
      atrament.current.color = color;
      atrament.current.weight = weight;
      atrament.current.globalAlpha = globalAlpha || 1;

      const firstPoint = points.shift();

      atrament.current.beginStroke(firstPoint.x, firstPoint.y);

      let prevPoint = firstPoint;
      for (const p of points) {
        const { x, y } = atrament.current.draw(p.x, p.y, prevPoint.x, prevPoint.y);
        prevPoint = { x, y };
      }

      // endStroke closes the path
      atrament.current.endStroke(prevPoint.x, prevPoint.y);
    }

    atrament.current.mode = prevConfigs.mode;
    atrament.current.color = prevConfigs.color;
    atrament.current.weight = prevConfigs.weight;
  }, [currentPage]);

  const drawShape = React.useCallback((id, x, y) => {
    // atrament.current.context.fillText(text, x, y);
    let storedStrokes = localStorage.getItem(localStorageKey.STROKES);

    storedStrokes = JSON.parse(storedStrokes);

    const index = storedStrokes[currentPage].findIndex((x) => x.id === id);

    storedStrokes[currentPage][index].x = x;
    storedStrokes[currentPage][index].y = y;

    localStorage.setItem(localStorageKey.STROKES, JSON.stringify(storedStrokes));

    loadStrokes();
  }, [currentPage, loadStrokes]);

  React.useEffect(() => {
    const listenerId = Date.now();

    eventHelper.addEventListener('onModalOpen', listenerId, () => {
      for (const item of state.menuItems) {
        // item.selected = false
        if (item.ref?.current.state.isOpen) {
          item.ref.current.toggle();
        }
      }
    });

    return () => {
      eventHelper.removeEventListener('onModalOpen', listenerId);
    }
  }, [state.menuItems]);

  const toolIndex = state.menuItems.findIndex((x) => x.selected && ['pen', 'highlighter', 'erase', 'shape'].includes(x.type));

  const isDrawing = toolIndex > -1;

  // Initialize drag to scroll (for zoom-in)
  React.useEffect(() => {
    const pageContainer = document.documentElement;
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const onMouseMove = (e) => {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      pageContainer.scrollTop = pos.top - dy;
      pageContainer.scrollLeft = pos.left - dx;
    }

    const onMouseUp = () => {
      pageContainer.style.cursor = '';
      pageContainer.classList.remove('selectDisable');

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    const onMouseDown = (e) => {
      if (isDrawing) return;
      pageContainer.style.cursor = 'grabbing';
      pageContainer.classList.add('selectDisable');
      // pageContainer.style.userSelect = 'none';
      pos = {
        left: pageContainer.scrollLeft,
        top: pageContainer.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    }
  }, [isDrawing]);

  React.useLayoutEffect(() => {
    const canvasContainer = document.getElementById('canvasContainer');
    const listener = ({ width, height }) => {
      atrament.current?.destroy();
      const canvas = document.getElementById('sketchpad');
      atrament.current = new Atrament(canvas, {
        width,
        height,
        weight: 5,
        smoothing: 0.7,
        mode: 'disabled',
        adaptiveStroke: false,
      });

      atrament.current.recordStrokes = true;

      loadStrokes();

      atrament.current.addEventListener('strokerecorded', onStrokeRecorded);
    };
    const sensor = new ResizeSensor(canvasContainer, listener);

    return () => {
      sensor.detach(listener);
      atrament.current?.destroy();
      atrament.current?.removeEventListener('strokerecorded', onStrokeRecorded);

    }
  }, [loadStrokes, onStrokeRecorded]);

  const moveToPage = React.useCallback((direction) => {
    let pageNum = currentPage;
    const isNext = direction === 'next'
    const operateNumber = state.pageView === pageView.ONE_PAGE ? 1 : 2;

    if (isNext) {
      if (pageNum + operateNumber > maxPage) return;

      pageNum = pageNum + operateNumber;
    } else {
      if (pageNum - operateNumber < 1) return;

      pageNum = pageNum - operateNumber;
    }

    history.push(`/${pageNum}`);
  }, [currentPage, history, state.pageView]);

  const renderContentSinglePage = React.useMemo(() => {
    return <FriendsPlus currentPage={currentPage} isZoomIn={state.isZoomIn} />
  }, [currentPage, state.isZoomIn]);

  const renderContentDoublePage = React.useMemo(() => {
    const pages = [
      <FriendsPlus currentPage={currentPage} isZoomIn={state.isZoomIn} />,
      <FriendsPlus currentPage={currentPage + 1} isZoomIn={state.isZoomIn} />
    ];

    return pages;
  }, [currentPage, state.isZoomIn]);

  const renderScrollPageItem = React.useCallback((key, index) => {
    return (
      <React.Fragment key={index}>
        <FriendsPlus currentPage={key} isZoomIn={state.isZoomIn} view={state.pageView} />
        <div className={styles.separator} />
      </React.Fragment>
    );
  }, [state.isZoomIn, state.pageView]);

  const scrollPageView = React.useMemo(() => {
    return (
      <div className={`${styles.containerNoBackground} ${styles.flexColumn}`}>
        {Object.keys(dataBook).map(renderScrollPageItem)}
      </div>
    );
  }, [renderScrollPageItem]);

  const renderTileView = React.useMemo(() => {
    const listPageArray = listPage();
    return (
      <div className={styles.tileViewContainer}>
        {
          listPageArray.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  history.push(`/${item.pageNum}`);
                  // state.menuItems[9].ref.current.toggle();
                  setState((prevState) => ({ ...prevState, tileView: !prevState.tileView }))
                }}
                className={styles.imageTileViewContainer}
              >
                <img className={styles.imageTileView} src={item.imgUrl} alt={item.pageNum} />
              </div>
            )
          })
        }
      </div>
    )
  }, [history]);

  const onClickItem = React.useCallback((item) => {
    if (item.type === 'SaveAndClose') {
      window.location.replace('https://hanhtrangso.nxbgd.vn/');
      return;
    }

    const stateModel = { menuItems: state.menuItems, tileView: state.tileView };

    // Page view
    if (item.type.includes('page')) {
      if (item.type !== 'page') {
        stateModel.pageView = item.type;
      }
      // if (stateModel.menuItems[2].icon !== item.icon) {
      //   stateModel.menuItems[2].icon = item.icon;
      // }

      // stateModel.singlePage = item.icon === 'fas fa-file';
      // stateModel.menuItems[2].ref.current.toggle();
    }


    // Pen color picker
    if (item.type === 'pen-color') {
      let color = item.data.hex;

      if (stateModel.menuItems[5].selected) {
        const { rgb } = item.data;
        const { globalAlpha } = atrament.current.context;
        color = `rgba(${rgb.r},${rgb.g},${rgb.b},${globalAlpha})`;
      }

      atrament.current.color = color;
      // state.menuItems[3].ref.current.toggle();
      return;
    }

    // Hide all opening UncontrollerPopover
    for (const item of state.menuItems) {
      if (item.ref?.current?.state.isOpen) {
        item.ref.current.toggle();
      }
    }

    // Un select item from index 3 to end of menu list
    for (let i = 4; i < state.menuItems.length; i++) {
      if (stateModel.menuItems[i].type === item.type) continue;
      stateModel.menuItems[i].selected = false;
    }

    // Zoom in/zoom out
    if (item.type === 'zoomIn' || item.type === 'zoomOut') {
      stateModel.isZoomIn = state.isZoomIn;

      if (item.type === 'zoomIn') {
        if (stateModel.isZoomIn < 4) {
          stateModel.isZoomIn++;
        }
      } else {
        if (stateModel.isZoomIn > 1) {
          stateModel.isZoomIn--;
        }
      }

      stateModel.menuItems[1].selected = false;
      stateModel.menuItems[2].selected = false;
      stateModel.menuItems[stateModel.isZoomIn > state.isZoomIn ? 1 : 2].selected = true;
    }

    // Pen (enable to draw)
    if (item.type === 'pen') {
      const mode = (stateModel.menuItems[4].selected && atrament.current.mode === 'draw') ? 'disabled' : 'draw';
      const weight = mode === 'draw' ? 5 : 20;
      atrament.current.globalAlpha = 1;
      atrament.current.mode = mode;
      atrament.current.weight = weight;
      stateModel.menuItems[4].selected = !stateModel.menuItems[4].selected;
    }

    // Highlighter (enable to draw)
    if (item.type === 'highlighter') {
      const mode = (stateModel.menuItems[5].selected && atrament.current.mode === 'draw') ? 'disabled' : 'draw';
      const weight = 20;
      atrament.current.mode = mode;
      atrament.current.weight = weight;

      const isRgbaColor = atrament.current.color.startsWith('rgba');

      const rgbaColor = isRgbaColor ? atrament.current.color : hexToRgbA(atrament.current.color);
      const newColor = setRgbaColorAlpha(rgbaColor, 0.2);

      atrament.current.color = newColor;
      atrament.current.globalAlpha = 0.2;
      stateModel.menuItems[5].selected = !stateModel.menuItems[5].selected;
    }

    // Erase
    if (item.type === 'erase') {
      stateModel.menuItems[6].selected = !stateModel.menuItems[6].ref.current.state.isOpen;
      // stateModel.menuItems[5].selected = true;
    }

    if (item.type === 'erase-pen') {
      atrament.current.weight = 20;
      atrament.current.mode = 'erase';
      atrament.current.globalAlpha = 1;
      stateModel.menuItems[6].selected = true;
    }

    let storedStrokes = localStorage.getItem(localStorageKey.STROKES);
    if (item.type === 'erase-all') {
      if (storedStrokes) {
        storedStrokes = JSON.parse(storedStrokes);

        if (storedStrokes[currentPage]) {
          storedStrokes[currentPage] = [];
          localStorage.setItem(localStorageKey.STROKES, JSON.stringify(storedStrokes));
          loadStrokes();
        }
      }
      stateModel.menuItems[6].selected = false;
    }

    //ListPage
    if (item.type === 'listPage') {
      stateModel.menuItems[9].selected = !stateModel.menuItems[9].selected;

    }
    //dictionary
    if (item.type === 'dictionary') {
      stateModel.menuItems[10].selected = !stateModel.menuItems[10].selected;

    }

    //Tile View
    if (item.type === 'tileView') {
      stateModel.menuItems[11].selected = !stateModel.menuItems[11].selected;
      stateModel.tileView = !stateModel.tileView
    }

    // Move tool bar
    if (item.type.includes('ToolBar')) {
      stateModel.toolBarPosition = item.type;
    }

    if (item.type === 'moveTool-Bar') {
      stateModel.menuItems[12].selected = !stateModel.menuItems[12].selected;
    }

    //noteText
    if (item.type === 'note') {
      atrament.current.mode = 'disabled';
      stateModel.menuItems[13].selected = true;
      const stringNote = localStorage.getItem(localStorageKey.NOTE_BOX);
      let box = { top: 60, left: 80, title: 'far fa-clipboard', color: Colors.green, text: '', audioData: '' };
      let arrayNote = {};
      if (!stringNote) {
        arrayNote = { [currentPage]: [box] };
      } else {
        arrayNote = JSON.parse(stringNote);
        if (!arrayNote[currentPage]) {
          arrayNote[currentPage] = [box]
        } else {
          arrayNote[currentPage].push(box);
        }
      }
      localStorage.setItem(localStorageKey.NOTE_BOX, JSON.stringify(arrayNote));
      setState((prevState) => ({ ...prevState, noteText: !prevState.noteText }))
      // stateModel.noteText = !stateModel.noteText
    }

    // Text
    if (item.type === 'text') {
      atrament.current.mode = 'disabled';
      stateModel.menuItems[7].selected = true;
      stateModel.forceAddText = !state.forceAddText;

      const box = {
        top: 80,
        left: 80,
        content: 'Write the content here.',
      };

      let stringNote = localStorage.getItem(localStorageKey.TEXT_TOOL);

      if (!stringNote) {
        stringNote = { [currentPage]: [box] };
      } else {
        stringNote = JSON.parse(stringNote);
        if (!stringNote[currentPage]) {
          stringNote[currentPage] = [box]
        } else {
          stringNote[currentPage].push(box);
        }
      }
      localStorage.setItem(localStorageKey.TEXT_TOOL, JSON.stringify(stringNote));
    }

    if (item.type === 'shape') {
      atrament.current.mode = 'disabled';
      stateModel.menuItems[7].selected = !stateModel.menuItems[7].selected;
    }

    if (item.type === 'shape-square' || item.type === 'shape-circle') {
      if (!storedStrokes) {
        storedStrokes = '{}';
      }

      storedStrokes = JSON.parse(storedStrokes);

      if (!storedStrokes[currentPage]) {
        storedStrokes[currentPage] = [];
      }

      if (item.type === 'shape-circle') {
        storedStrokes[currentPage].push({ type: 'shape', shape: 'arc', x: 100, y: 100, radius: 50 });
      } else {
        storedStrokes[currentPage].push({ type: 'shape', shape: 'rect', x: 100, y: 100, width: 100, height: 100 });
      }

      localStorage.setItem(localStorageKey.STROKES, JSON.stringify(storedStrokes));
      loadStrokes();
    }

    if (item.type === 'switch-book') {
      Modal.info({
        width: '100%',
        zIndex: 1002,
        title: 'Select the book:',
        content: (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {books.map((item, index) => (
              <a key={index} href={item.href} className={styles.bookItem} >
                <img src={item.image} alt="" className={styles.bookImage} />
              </a>
            ))}
          </div>
        )
      });
      return;
    }

    if (item.type === 'logOut') {
      dispatch({ type: POST_LOGOUT })
      // Notifications('success', 'Thông báo', 'Đăng xuất thành công')
      setState((prevState) => ({ ...prevState, isVisibleModalLogin: true }))
      window.location.replace('https://sachso.edu.vn/sgk/trang-chu');
      return;
    }

    setState((prevState) => ({ ...prevState, ...stateModel }))
  }, [state.menuItems, state.tileView, state.isZoomIn, state.forceAddText, currentPage, loadStrokes, dispatch]);

  const setDrop = React.useCallback((drop) => {
    setState((prevState) => ({ ...prevState, drop }))
  }, []);

  let drawingCursor = undefined;

  let canvasTextEnable = false;

  const selectedItem = state.menuItems[toolIndex];

  let strokes = localStorage.getItem(localStorageKey.STROKES);

  if (!strokes) {
    strokes = '{}';
  }

  strokes = JSON.parse(strokes);

  if (!strokes[currentPage]) {
    strokes[currentPage] = [];
  }

  if (isDrawing) {
    drawingCursor = `url(img/${state.menuItems[toolIndex].type}.png) 12 12, auto`;
    // canvasTextEnable = state.menuItems[toolIndex].type === 'text';
    // if (canvasTextEnable) {
    //   drawingCursor = 'text';
    // }
  }

  const isScrollView = state.pageView === pageView.SCROLL_PAGE;

  const disableBackgroundImage = isScrollView || state.isZoomIn > 1 || state.tileView;

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: disableBackgroundImage ? 'none' : undefined,
        backgroundSize: state.isZoomIn > 1 ? 'auto' : undefined,
      }}
    >
      <div className="rna-wrapper">
        <NotificationAlert ref={notificationAlert} />
      </div>
      {/* <FlipPage>
        <article> */}

      <div
        className={styles.containerNoBackground}
        style={{
          display: state.tileView ? 'none' : 'flex',
        }}
      >
        {!isScrollView && (
          <div className={styles.buttonWrapperBack}>
            <Button onClick={() => moveToPage('back')} color='success' className={styles.button} >
              <i style={{ fontSize: 20 }} className="fas fa-chevron-left"></i>
            </Button>
          </div>
        )}


        <div
          id='canvasContainer'
          ref={state.drop}
          className={classNames({
            [styles.imgWrapper]: !isScrollView && state.isZoomIn === 1,
            [styles.imgZoomInWrapper]: !isScrollView && state.isZoomIn > 1,
            [styles.containerNoBackground]: isScrollView,
          })}
          style={{
            position: 'relative',
            zoom: state.isZoomIn,
            flexDirection: [pageView.ONE_PAGE, pageView.SCROLL_PAGE].includes(state.pageView) ? 'column' : 'row',
          }}
        >
          <Container setDrop={setDrop} noteText={state.noteText} forceAddText={state.forceAddText} />
          <canvas
            id="sketchpad"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              cursor: drawingCursor,
              visibility: isDrawing ? 'visible' : 'hidden',
              zIndex: selectedItem?.type === 'shape' ? 1000 : 1001,
            }}
          />

          <canvas
            id="sketchpad-shape"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              cursor: drawingCursor,
              visibility: isDrawing ? 'visible' : 'hidden',
              zIndex: selectedItem?.type === 'shape' ? 1001 : 1000,
            }}
          />

          <CanvasShape
            items={strokes[currentPage]}
            enable={canvasTextEnable}
            selector="sketchpad-shape"
            draw={drawShape}
          />

          {state.pageView === pageView.ONE_PAGE && renderContentSinglePage}
          {state.pageView === pageView.TWO_PAGE && renderContentDoublePage}
          {isScrollView && scrollPageView}
        </div>

        {!isScrollView && (
          <div color='success' className={styles.buttonWrapperNext}>
            <Button onClick={() => moveToPage('next')} className={styles.button} color='success' >
              <i style={{ fontSize: 20 }} className="fas fa-chevron-right"></i>
            </Button>
          </div>
        )}
      </div>

      {state.tileView && renderTileView}

      <div className={styles[state.toolBarPosition]}>
        <ToolBar
          view={state.pageView}
          items={window.location.hostname === 'localhost' ? state.menuItems.filter(x => x.type !== 'logOut') : state.menuItems} // hide logout with localhost
          isZoomIn={state.isZoomIn}
          tileView={state.tileView}
          toolBarPosition={state.toolBarPosition}
          onClickItem={onClickItem}
        />
      </div>

      {/* ---------login modal-------- */}
      <FormModal
        visible={window.location.hostname === 'localhost' ? false : state.isVisibleModalLogin} //turn on/off modal // hide login with localhost
        // toggle={function()} //handle when click out of form
        imgUrl={closeImage}
        // imgOnClick={function()} //handle when click close icon
        imgStyle={{
          position: 'absolute',
          right: state.matches ? 10 : 15,
          top: 15,
          width: 20,
          cursor: 'pointer'
        }}
        content={<FormLogin />}
      />
      <FormModal visible={location.pathname === '/index.html'} content={<Offline />} />

      {/* </FlipPage> */}
      {/* Homepage */}
    </div>
  )
}
export default Homepage