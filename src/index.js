import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Provider } from 'react-redux';
import { persistor, store } from './rootStore';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  // <React.StrictMode>
  <React.Fragment>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </DndProvider>
  </React.Fragment>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
