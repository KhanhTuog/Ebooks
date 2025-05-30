export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const eventHelper = {
  events: {},
  addEventListener: (eventName, id, func) => {
    if (eventHelper.events[eventName]) {
      eventHelper.events[eventName].push({ id, func });
    } else {
      eventHelper.events[eventName] = [{ id, func }];
    }
  },
  removeEventListener: (eventName, id) => {
    if (!eventHelper.events[eventName]) return;

    const index = eventHelper.events[eventName].findIndex((x) => x.id === id);

    if (index === -1) return;

    eventHelper.events[eventName].splice(index, 1);
  },
  triggerEvent: (eventName, data) => {
    if (!eventHelper.events[eventName]) return;
    for (const item of eventHelper.events[eventName]) {
      item.func(data);
    }
  }
}

export const clickHelper = {
  timestamp: 0,
  getClickTime: () => {
    return clickHelper.timestamp;
  },
  setClickTime: (time) => {
    clickHelper.timestamp = time;
  },
}

export const hexToRgbA = (hex) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
  }
  throw new Error('Bad Hex');
}

export const setRgbaColorAlpha = (rgbaColor, alpha) => {
  const alphaIndex = rgbaColor.lastIndexOf(',') + 1;
  const newColor = rgbaColor.slice(0, alphaIndex) + alpha + rgbaColor.slice(alphaIndex + 1);
  return newColor;
}