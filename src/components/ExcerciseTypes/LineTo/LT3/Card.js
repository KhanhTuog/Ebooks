import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
const style = {
  // border: '1px dashed gray',
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "pointer",
  width: "fit-content",
  flexDirection: "row",
  height: "100%",
};
export const Card = ({ id, text, moveCard, findCard, imgUrl }) => {
  const originalIndex = findCard(id).index;
  const [{ isDragging }] = useDrag({
    item: { type: ItemTypes.CARD, id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedId, originalIndex);
      }
    },
  });
  const [,] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    },
  });
  const opacity = isDragging ? 0 : 1;
  return (
    <img
      // ref={(node) => drag(drop(node))}
      src={imgUrl}
      alt=""
      style={{ ...style, opacity }}
    />
  );
};
