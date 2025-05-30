import { all,fork } from 'redux-saga/effects';
import loginSaga from './Redux/sagas'
// import questionsSaga from './pages/sagas';
export default function* rootSaga() {
  yield all([
    fork(loginSaga),
  ]);
}
