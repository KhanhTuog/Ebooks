import React from 'react';

const CanvasShape = ({ items, enable, selector, draw }) => {
  const selectedText = React.useRef(-1);

  const startX = React.useRef(0);
  const startY = React.useRef(0);

  const textHittest = React.useCallback((x, y, textIndex) => {
    const item = items[textIndex];
    return (x >= item.x && x <= item.x + item.width && y >= item.y - item.height && y <= item.y);
  }, [items]);

  React.useLayoutEffect(() => {
    const canvas = document.getElementById(selector)

    const {
      offsetLeft: offsetX,
      offsetTop: offsetY,
    } = canvas;

    function handleMouseDown(e) {
      if (!enable) return;

      e.preventDefault();
      startX.current = parseInt(e.clientX - offsetX);
      startY.current = parseInt(e.clientY - offsetY);
      // Put your mousedown stuff here
      for (var i = 0; i < items.length; i++) {
        if (textHittest(startX.current, startY.current, i)) {
          selectedText.current = i;
          break;
        }
      }
    }

    function handleMouseUp(e) {
      if (!enable) return;

      e.preventDefault();
      selectedText.current = -1;
    }

    function handleMouseOut(e) {
      if (!enable) return;

      e.preventDefault();
      selectedText.current = -1;
    }

    function handleMouseMove(e) {
      if (!enable) return;

      if (selectedText.current < 0) return;

      e.preventDefault();
      const mouseX = parseInt(e.clientX - offsetX);
      const mouseY = parseInt(e.clientY - offsetY);

      // Put your mousemove stuff here
      const dx = mouseX - startX.current;
      const dy = mouseY - startY.current;
      startX.current = mouseX;
      startY.current = mouseY;

      const item = items[selectedText.current];
      item.x += dx;
      item.y += dy;
      draw(selectedText.current, item.x, item.y);
    }

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
    }
  }, [enable, draw, items, textHittest, selector])

  return null;
}

export default CanvasShape;
