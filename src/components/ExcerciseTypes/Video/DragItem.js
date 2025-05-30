import React from 'react';
import { useDrag } from 'react-dnd';
import { dragItemTypes } from '../../../constants';

const DragItem = (props) => {
  const [, drag] = useDrag({
    item: { ...props.item, type: props.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => !props.disable,
  });

  return <div {...props} ref={drag} />;
};

DragItem.defaultProps = {
  type: dragItemTypes.DRAG,
  disable: false,
};

export default DragItem;
