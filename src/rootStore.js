import { createStore, applyMiddleware } from 'redux';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { rootMiddleware, sagaMiddleware } from './rootMiddleware';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(...rootMiddleware));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
