import React from 'react';
import Atrament from 'atrament';
import { Modal as AModal, Spin } from 'antd';
import { Modal } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { books, Colors, localStorageKey } from '../../constants';
import { eventHelper, hexToRgbA, setRgbaColorAlpha } from '../../constants/functions';
import ToolBar from '../ToolBar';
import styles from './styles.module.css'
import { ModalContainer } from '../DndBox/ModalContainer';

const listPage = () => {
  let listPageArray = []
  for (let i = 1; i <= 18; i++) {
    const imgUrl = `img/EnglishPlus1/${i}.jpg`;
    listPageArray.push({ imgUrl, pageNum: i })
  }
  return listPageArray
}

const ExcerciseModal = ({ isVisibled, toggleModal, contentModal, excerciseNum }) => {
  const atrament = React.useRef();

  const params = useParams();

  const currentPage = parseInt(params.currentPage);

  const [state, setState] = React.useState({
    isZoomIn: false,
    loading: true,
    drop: null,
    forceAddText: false,
    // currentPage: 4,
    toolBarPosition: 'ToolBarRight',
    tileView: false,
    noteText: false,
    isOpened: false,
    menuItems: [
      {
        icon: 'fas fa-search-plus',
        type: 'zoomIn',
        tooltip: 'Zoom in',
        hidden: true
      },
      {
        icon: 'fas fa-search-minus',
        type: 'zoomOut',
        tooltip: 'Zoom out',
        hidden: true
      },
      {
        ref: React.createRef(),
        icon: 'fas fa-file', type: 'page', tooltip: 'Page view',
        subMenu: [
          { type: 'page', icon: 'fas fa-file' },
          { type: 'page', icon: 'fas fa-columns' },
        ],
        hidden: true
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
        subMenu: listPage(),
        hidden: true
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
        hidden: true
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
        ],
        hidden: true
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
      // }
    ],
  });

  const loadStrokes = React.useCallback(() => {
    let storedStrokes = localStorage.getItem(localStorageKey.MODAL_STROKES);

    if (!storedStrokes) {
      setState((prevState) => ({ ...prevState, loading: false }));
      return;
    }

    storedStrokes = JSON.parse(storedStrokes);

    const exeriseStrokes = storedStrokes[`P${currentPage}E${excerciseNum}`];

    if (!exeriseStrokes) {
      setState((prevState) => ({ ...prevState, loading: false }));
      return;
    }

    for (const item of exeriseStrokes) {
      const { points, weight, color, mode } = item;

      atrament.current.mode = mode;
      atrament.current.color = color;
      atrament.current.weight = weight;

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

    atrament.current.mode = 'disabled';
    setState((prevState) => ({ ...prevState, loading: false }));
  }, [currentPage, excerciseNum])

  // Initialize drawing tool
  React.useEffect(() => {
    if (!state.isOpened || !isVisibled) return;

    const onStrokeRecorded = ({ stroke }) => {
      let storedStrokes = localStorage.getItem(localStorageKey.MODAL_STROKES);
      const currentExercise = `P${currentPage}E${excerciseNum}`;
      if (!storedStrokes) {
        storedStrokes = { [currentExercise]: [stroke] };
      } else {
        storedStrokes = JSON.parse(storedStrokes);
        if (!storedStrokes[currentExercise]) {
          storedStrokes[currentExercise] = [stroke];
        } else {
          storedStrokes[currentExercise].push(stroke);
        }
      }

      localStorage.setItem(localStorageKey.MODAL_STROKES, JSON.stringify(storedStrokes));
    }

    const initialize = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!isVisibled || !state.isOpened) return;

      const canvas = document.getElementById('sketchpadModal');
      if (!canvas) return null
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      atrament.current = new Atrament(canvas, {
        weight: 5,
        smoothing: 0.7,
        mode: 'disabled',
        adaptiveStroke: false,
      });

      atrament.current.recordStrokes = true;

      loadStrokes();

      // atrament.current.context.fillText('CanvasText', 100, 100);

      atrament.current.addEventListener('strokerecorded', onStrokeRecorded);
    }

    initialize();

    return () => {
      atrament.current?.destroy();
      atrament.current?.removeEventListener('strokerecorded', onStrokeRecorded);
    }
  }, [state.isOpened, loadStrokes, currentPage, excerciseNum, isVisibled]);

  const onClickItem = React.useCallback((item) => {

    // Page view
    if (item.type === state.menuItems[2].type) {
      const stateModel = { menuItems: state.menuItems };

      if (stateModel.menuItems[2].icon !== item.icon) {
        stateModel.menuItems[2].icon = item.icon;
      }

      if (stateModel.menuItems[3].ref.current.state.isOpen) {
        stateModel.menuItems[3].ref.current.toggle();
      }

      if (stateModel.menuItems[4].ref.current.state.isOpen) {
        stateModel.menuItems[4].ref.current.toggle();
      }

      stateModel.singlePage = item.icon === 'fas fa-file';
      stateModel.menuItems[2].ref.current.toggle();

      setState((prevState) => ({ ...prevState, ...stateModel }))
      return;
    }

    const stateModel = { menuItems: state.menuItems, tileView: state.tileView };

    // Pen color picker
    if (item.type === 'pen-color') {
      let color = item.data.hex;

      if (stateModel.menuItems[4].selected) {
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
    for (let i = 3; i < state.menuItems.length; i++) {
      if (stateModel.menuItems[i].type === item.type) continue;
      stateModel.menuItems[i].selected = false;
    }

    // Zoom in/zoom out
    if (item.type === 'zoomIn' || item.type === 'zoomOut') {
      stateModel.isZoomIn = item.type === 'zoomIn';
      stateModel.menuItems[0].selected = false;
      stateModel.menuItems[1].selected = false;
      stateModel.menuItems[stateModel.isZoomIn ? 0 : 1].selected = true;
    }

    // Pen (enable to draw)
    if (item.type === 'pen') {
      const mode = (stateModel.menuItems[3].selected && atrament.current.mode === 'draw') ? 'disabled' : 'draw';
      const weight = mode === 'draw' ? 5 : 20;
      atrament.current.globalAlpha = 1;
      atrament.current.mode = mode;
      atrament.current.weight = weight;
      stateModel.menuItems[3].selected = !stateModel.menuItems[3].selected;
    }

    // Highlighter (enable to draw)
    if (item.type === 'highlighter') {
      const mode = (stateModel.menuItems[4].selected && atrament.current.mode === 'draw') ? 'disabled' : 'draw';
      const weight = 20;
      atrament.current.mode = mode;
      atrament.current.weight = weight;

      const isRgbaColor = atrament.current.color.startsWith('rgba');

      const rgbaColor = isRgbaColor ? atrament.current.color : hexToRgbA(atrament.current.color);
      const newColor = setRgbaColorAlpha(rgbaColor, 0.2);

      atrament.current.color = newColor;
      atrament.current.globalAlpha = 0.2;
      stateModel.menuItems[4].selected = !stateModel.menuItems[4].selected;
    }

    // Erase
    if (item.type === 'erase') {
      // stateModel.menuItems[5].selected = !stateModel.menuItems[5].ref.current.isOpen;
      stateModel.menuItems[5].selected = true;
    }

    if (item.type === 'erase-pen') {
      atrament.current.weight = 20;
      atrament.current.mode = 'erase';
      atrament.current.globalAlpha = 1;
      stateModel.menuItems[5].selected = true;
    }

    let storedStrokes = localStorage.getItem(localStorageKey.MODAL_STROKES);
    if (item.type === 'erase-all') {
      if (storedStrokes) {
        storedStrokes = JSON.parse(storedStrokes);

        if (storedStrokes[currentPage]) {
          storedStrokes[currentPage] = [];
          localStorage.setItem(localStorageKey.MODAL_STROKES, JSON.stringify(storedStrokes));
          loadStrokes();
        }
      }
      stateModel.menuItems[5].selected = false;
    }

    //ListPage
    if (item.type === 'listPage') {
      stateModel.menuItems[8].selected = !stateModel.menuItems[8].selected;

    }
    //dictionary
    if (item.type === 'dictionary') {
      stateModel.menuItems[9].selected = !stateModel.menuItems[9].selected;

    }

    //Tile View
    if (item.type === 'tileView') {
      stateModel.menuItems[10].selected = !stateModel.menuItems[10].selected;
      stateModel.tileView = !stateModel.tileView
    }

    // Move tool bar
    if (item.type.includes('ToolBar')) {
      stateModel.toolBarPosition = item.type;
    }

    if (item.type === 'moveTool-Bar') {
      stateModel.menuItems[11].selected = !stateModel.menuItems[11].selected;
    }

    //noteText
    if (item.type === 'note') {
      atrament.current.mode = 'disabled';
      stateModel.menuItems[12].selected = true;
      const stringNote = localStorage.getItem(localStorageKey.MODAL_NOTE_BOX);
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
      localStorage.setItem(localStorageKey.MODAL_NOTE_BOX, JSON.stringify(arrayNote));
      setState((prevState) => ({ ...prevState, noteText: !prevState.noteText }))
      // stateModel.noteText = !stateModel.noteText
    }

    // Text
    if (item.type === 'text') {
      atrament.current.mode = 'disabled';
      stateModel.menuItems[6].selected = true;
      stateModel.forceAddText = !state.forceAddText;

      const box = {
        top: 80,
        left: 80,
        content: 'Write the content here.',
      };

      let stringNote = localStorage.getItem(localStorageKey.MODAL_TEXT_TOOL);

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
      localStorage.setItem(localStorageKey.MODAL_TEXT_TOOL, JSON.stringify(stringNote));
    }

    if (item.type === 'shape') {
      atrament.current.mode = 'disabled';
      stateModel.menuItems[6].selected = !stateModel.menuItems[6].selected;
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

      localStorage.setItem(localStorageKey.MODAL_STROKES, JSON.stringify(storedStrokes));
      loadStrokes();
    }

    if (item.type === 'switch-book') {
      AModal.info({
        width: '100%',
        zIndex: 1051,
        title: 'Select the book:',
        content: (
          <div className={styles.modalContent}>
            {books.map((item, index) => (
              <a key={index} href={item.href} className={styles.bookItem}>
                <img src={item.image} alt="" className={styles.bookImage} />
              </a>
            ))}
          </div>
        )
      });
      return;
    }

    setState((prevState) => ({ ...prevState, ...stateModel }))
  }, [state.menuItems, state.tileView, currentPage, loadStrokes, state.forceAddText]);

  const onOpened = React.useCallback(() => {
    eventHelper.triggerEvent('onModalOpen');
    setState((prevState) => ({ ...prevState, isOpened: true }));
  }, [])

  const onClosed = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isOpened: false }));
  }, []);

  const setDrop = React.useCallback((drop) => {
    setState((prevState) => ({ ...prevState, drop }))
  }, []);

  let drawingCursor = undefined;

  let canvasTextEnable = false;

  const toolIndex = state.menuItems.findIndex((x) => x.selected && ['pen', 'erase', 'highlighter'].includes(x.type));

  const isDrawing = toolIndex > -1;

  if (isDrawing) {
    drawingCursor = `url(img/${state.menuItems[toolIndex].type}.png) 12 12, auto`;
    canvasTextEnable = state.menuItems[toolIndex].type === 'text';
    if (canvasTextEnable) {
      drawingCursor = 'text';
    }
  }

  return (
    <>
      <Modal
        // className='modal-fluid'
        isOpen={isVisibled}
        toggle={toggleModal}
        className={`modal-fullscreen-xs-down ${styles.modalDialog}`}
        contentClassName={styles.modalContent}
        onOpened={onOpened}
        onClosed={onClosed}
      >
        <div className={styles.container}>
          <div ref={state.drop} className={styles.contentContainer}>
            <ModalContainer setDrop={setDrop} noteText={state.noteText} forceAddText={state.forceAddText} />
            {/* Canvas area */}
            <canvas
              id="sketchpadModal"
              style={{
                zIndex: 1100,
                width: '100%',
                height: '100%',
                position: 'absolute',
                // backgroundColor: 'lightblue'
                cursor: drawingCursor,
                visibility: isDrawing ? 'visible' : 'hidden',
              }}
            />

            <div className="modal-header" style={{ paddingBottom: 0 }}>
              <h5 className="modal-title" id="exampleModalLabel">
                {/* Chọn phần học bài Listen and Reading */}
              </h5>
              <button
                aria-label="Close"
                className={styles.closeButton}
                data-dismiss="modal"
                type="button"
                onClick={toggleModal}
              >
                <span className={styles.spanButton} aria-hidden={true}>×</span>
              </button>
            </div>
            {state.loading && (
              <div className={styles.loadingContainer}>
                <Spin />
              </div>
            )}
            <div
              className={`${styles.modalBody} modal-body`}
              style={{
                display: state.loading ? 'none' : undefined,
              }}
            >
              {isVisibled && contentModal}
            </div>
          </div>
          <div className={styles.toolbar}>
            <ToolBar items={state.menuItems} onClickItem={onClickItem} toolBarPosition='ToolBarLeft' tileView={false} />
          </div>
        </div>
      </Modal>
    </>
  );
};

ExcerciseModal.defaulProps = {
  isVisibled: true
}

export default ExcerciseModal;
