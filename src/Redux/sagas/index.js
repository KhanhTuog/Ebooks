/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import { put, takeLatest } from "redux-saga/effects";
// import { openNotificationWithIcon } from 'src/components/Notifications';
import { postLoginToApi, queryFirst } from "./api";
import * as actionTypes from "../actions";
import Notifications from "../../components/Notification";
// import { ames247Axios } from '../../configs/api';

const crypto = require('crypto');

function generateSHA1(text) {
  const shasum = crypto.createHash('sha1');
  shasum.update(text);
  return shasum.digest('hex'); // => "0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"
}

function* postLoginBySachSo(action) {
  const { username, password } = action.values;
  try {
    if (username !== 'testitdn@gmail.com') return
    const response = yield queryFirst('p_SACHSO_Users_Login', { email: username, password: generateSHA1(password) });
    let user = response.data.result;
    // console.log(user);
    if (user) {
      yield put({ type: actionTypes.POST_CODE_LOGIN_SUCCESS, payload: user });
      window.location = '/1';
    }
  } catch (error) {
    throw new Error(error);
  }

  return;
}

function* postlogin(action) {

  const { username, password } = action.values;

  try {
    const { data } = yield postLoginToApi({ username, password });

    const code = 'BFF8B94B-00A3-4C7B-8F46-C72C9D09E7BC';

    const courseId = JSON.parse(data?.result.courseId);

    let isActive = false;
    
    if (courseId !== null) {
      for (let index = 0; index < courseId?.length; index++) {
        if (code === courseId[index].CourseId) {
          isActive = true;
          // return;
        }
      }
    }

    if (data.status === "ERROR") {
      Notifications("danger", "Thông báo", data.message);
      return;
    }

    if (isActive === false) {
      Notifications("danger", "Thông báo", "Bạn chưa kích hoạt khoá học");
      return;
    }

    if (data.status === "OK") {
      const { result } = data;

      yield put({
        type: actionTypes.POST_LOGIN_SUCCESS,
        payload: result,
      });
      Notifications("success", "Thông báo", 'Đăng nhập thành công');
    }
  } catch (error) {
    yield put({
      type: actionTypes.POST_LOGIN_FAILURE,
      payload: {
        code: 200,
        message: "Đăng nhập không thành công.\nVui lòng thử lại!",
      },
    });
  }
}

function* postCodeLogin(action) {
  try {
    const res = yield fetch(`https://cloud.softech.vn/mobile/api/SgkEbookAnswer/GetUserByCode/${action.code}`).then((res) => res.json())
    const payload = res.results
    yield put({ type: actionTypes.POST_CODE_LOGIN_SUCCESS, payload })
  } catch (error) {
    Notifications("danger", "Thông báo", 'Có lỗi xảy ra vui lòng thử lại');

    yield put({ type: actionTypes.POST_CODE_LOGIN__FAILURE, error })

  }
}
export default function* loginSaga() {
  yield takeLatest(actionTypes.POST_LOGIN_REQUEST, postlogin);
  yield takeLatest(actionTypes.POST_CODE_LOGIN_REQUEST, postCodeLogin);
  yield takeLatest(actionTypes.POST_LOGIN_SACHSO_REQUEST, postLoginBySachSo);
}