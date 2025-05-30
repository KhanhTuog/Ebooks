import { ames247Axios } from '../../configs/api';
import axios from 'axios';

export function* postLoginToApi({ username, password }) {
  const response = yield ames247Axios.post('/api/authenticate', {
    UserName: username,
    Password: password,
  });
  return response;
}

export function* postRegisterToApi({ username, password }) {
  const response = yield ames247Axios.post('/api/authenticate', {
    UserName: username,
    Password: password,
  });
  return response;
}

export function* postResetPassApi(phone) {
  let request = {
    uri: 'https://cloud.softech.cloud/mobile/ames/api/myames/ResetPassword',
    configs: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        AppName: 'WEB_MY_AMES',
      },
      body: JSON.stringify({
        username: phone,
      }),
    },
  };
  let response = yield fetch(request.uri, request.configs)
    .then((j) => j.json())
    .then((v) => {
      return v;
    });
  return response;
}

export function* postCheckVoucherApi(code) {
  let request = {
    uri: `https://cloud.softech.cloud/mobile/ames/api/myames/GetCurriculumCodeByVoucher/${code}`,
    configs: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        AppName: 'WEB_MY_AMES',
      },
    },
  };
  let response = yield fetch(request.uri, request.configs)
    .then((j) => j.json())
    .then((v) => {
      return v;
    });
  return response;
}

const sachsoServerUrl = 'https://server.sachso.edu.vn'
const authorizationKey = 'Basic 12C1F7EF9AC8E288FBC2177B7F54D';

export function* queryFirst(sqlCommand, parameters = {}, applicationName = 'SachSo') {
  return yield axios({
    url: `${sachsoServerUrl}/api/v1.0/dynamic/query/first`,
    method: 'POST',
    headers: {
      Authorization: authorizationKey,
      ApplicationName: applicationName,
    },
    data: {
      sqlCommand,
      parameters,
    },
  })
  .then((response) => response)
  .catch((error) => error);
}