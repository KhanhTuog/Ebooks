import React from 'react';
// react plugin for creating notifications over the dashboard
import { notificationAlert } from '../../constants';
// reactstrap components

const Notifications = (type, title, message, place) => {
  let options = {
    place: place ? place : 'tc',
    message: (
      <div className="alert-text">
        <span className="alert-title" data-notify="title">
          {title}
        </span>
        <span data-notify="message">{message}</span>
      </div>
    ),
    type: type,
    icon: 'ni ni-bell-55',
    autoDismiss: 2,
  };
  // eslint-disable-next-line no-unused-expressions
  notificationAlert.current?.notificationAlert(options);
  // type:default,info,success,warning,danger
};

export default Notifications;
