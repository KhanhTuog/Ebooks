import React from 'react';
import { useDrop } from 'react-dnd';
import { dragItemTypes } from '../../../../constants';

const DropZone = (props) => {
  const [, drop] = useDrop({
    accept: [props.type],
    drop(item, monitor) {
      props.onZoneDrop?.(item);
    },
  });

  return <div {...props} ref={drop} />;
};

DropZone.defaultProps = {
  type: dragItemTypes.DRAG,
};

export default DropZone;
