import React from 'react';
import { Menu } from 'antd';
import { CirclePicker } from 'react-color';
import { UncontrolledPopover, PopoverBody, UncontrolledTooltip, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import DictionaryText from '../Dictionary';
import { pageView } from '../../constants';

const ToolBar = ({ items, onClickItem, toolBarPosition, tileView, isZoomIn, view }) => {

  const history = useHistory()

  const renderListPage = React.useCallback((subMenu) => {
    return (
      < ListGroup
        className="list my--3"
        flush
        style={{ padding: 20, height: '100vh', overflowY: 'scroll', backgroundColor: '#34495e', cursor: 'pointer' }}
      >
        {subMenu.map((item, index) => {
          return (
            <ListGroupItem
              key={index}
              className="px-0 text-white"
              style={{ backgroundColor: '#34495e' }}
              onClick={() => history.push(`/${item.pageNum}`)}
            >
              <Row className="align-items-center">
                <Col className="col-auto">
                  <img
                    alt="..."
                    src={item.imgUrl}
                    style={{ width: 140 }}
                  />
                </Col>
                <div className="col ml--2">
                  <h4 className="mb-0">
                    <a className='text-white' href="#pablo" onClick={e => e.preventDefault()}>
                      Page {item.pageNum}
                    </a>
                  </h4>
                  {/* <span className="text-success">●</span> */}
                  {/* <small>Online</small> */}
                </div>
              </Row>
            </ListGroupItem>
          )
        })}
      </ ListGroup >
    )
  }, [history]);


  const renderItem = React.useCallback((item, index) => {
    if (item.hidden) return null;
    const target = `tooltip${index}`;

    const isSubMenu = item.subMenu instanceof Array;

    const isDisibled = (
      (tileView && item.type !== 'tileView' && item.type !== 'moveTool-Bar') ||
      ((isZoomIn > 1 || view === pageView.SCROLL_PAGE) && ['pen', 'highlighter', 'erase', 'shape'].includes(item.type))
    );

    const isStringIcon = typeof item.icon === 'string';

    return (
      <React.Fragment key={index}>
        <Menu.Item
          disabled={isDisibled}
          id={target} key={index}
          onClick={() => onClickItem?.(item)}
          style={{
            width: 60,
            paddingLeft: !isStringIcon ? 0 : undefined,
            display: !isStringIcon ? 'flex' : undefined,
            justifyContent: !isStringIcon ? 'center' : undefined,
          }}
        >
          {isStringIcon && <i className={item.icon} style={{ pointerEvents: 'none' }} />}
          {!isStringIcon && item.icon}
        </Menu.Item>
        <UncontrolledTooltip delay={0} placement="bottom" target={target}>
          {item.tooltip}
        </UncontrolledTooltip>
        {isSubMenu && (
          <UncontrolledPopover
            disabled={isDisibled}
            ref={item.ref}
            placement="auto"
            target={target}
            style={{
              padding: (item.type === 'pen' || item.type === 'highlighter')
                ? 14
                : 0,
            }} className="popover-primary">
            {item.type === 'listPage' && renderListPage(item.subMenu)}
            {item.type === 'dictionary' && (<DictionaryText />)}
            {(item.type === 'pen' || item.type === 'highlighter') && (
              <CirclePicker
                triangle="hide"
                colors={CirclePicker.defaultProps.colors.slice(2).concat(['red', '#000'])}
                onChangeComplete={(e) => onClickItem({ type: 'pen-color', data: e })}
              />
            )}
            {item.type !== 'pen' && item.type !== 'highlighter' && item.type !== 'listPage' && item.type !== 'dictionary' && (
              <PopoverBody style={{ opacity: 0.8, backgroundColor: '#001529', cursor: 'pointer' }} className='text-white'>
                {item.subMenu.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    className={(subIndex < item.subMenu.length - 1) ? 'mb-4' : ''}
                    onClick={() => onClickItem?.({ type: subItem.type, icon: subItem.icon })}
                  >
                    <i style={{ fontSize: 18 }} className={`${subItem.icon} ml-1`}></i>
                    {typeof subItem.name === 'string' && <p className={styles.subItem}>{subItem.name}</p>}
                  </div>
                ))}
              </PopoverBody>
            )}
          </UncontrolledPopover>
        )}
      </React.Fragment>
    )
  }, [isZoomIn, onClickItem, renderListPage, tileView, view]);

  const selectedKeys = items.reduce((keys, item, index) => {
    if (item.selected) return keys.concat(`${index}`);
    return keys;
  }, []);

  const isBottomOrTopToolBar = toolBarPosition.includes('ToolBarTop') || toolBarPosition.includes('ToolBarBottom')

  return (
    <Menu
      theme='dark' mode="inline"
      selectedKeys={selectedKeys}
      subMenuOpenDelay={0}
      className={isBottomOrTopToolBar ? `${styles.toolBarTop} text-primary` : `${styles.toolBar} text-primary`}
    // className={`${styles.toolBarTop} text-primary`}
    >
      {items.map(renderItem)}
    </Menu>
  );
}
ToolBar.defaultProps = {
  tileView: false,
  toolBarPosition: 'ToolBartop'
}

export default ToolBar;
