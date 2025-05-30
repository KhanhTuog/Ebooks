import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import axios from 'axios';

import { POST_CODE_LOGIN_SUCCESS } from './Redux/actions';

const sachsoClient = axios.create({
  baseURL: 'https://webhook.softech.cloud/api/sachso',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Platform: 'WEB',
    ApplicationName: 'sachso.edu.vn',
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZW5hbWUiOiJzYWNoc28ifSwiaWF0IjoxNjIzOTQ3NTE5LCJleHAiOjE3ODE2Mjc1MTksImF1ZCI6IndlYmhvb2suc29mdGVjaC5jbG91ZCIsImlzcyI6InNvZnRlY2guY2xvdWQiLCJzdWIiOiJzYWNoc28ifQ.g5cijByPRAaLxHp1kv1YXrtlMbKvJjQtpaQTqmpo24hVyw9P7rMH8lLYskfmsT3tSkVbmew7SihaBns2ILcGTQ',
  },
});

export default function SSO() {
  // Hooks
  const { userId, bookId } = useParams();
  const dispatch = useDispatch();

  // GET USER
  React.useEffect(() => {
    const fetch = async () => {
      const response = await sachsoClient.get(`/user/${userId}`);
      let user = response.data.result;
      // console.log(user);
      if (user) {
        dispatch({ type: POST_CODE_LOGIN_SUCCESS, payload: user });
      }
      window.location = '/1';
    };

    fetch();
  }, [userId, bookId, dispatch]);

  return (
    <React.Fragment>
      <Container>
        <h2>Loading ...</h2>
      </Container>
    </React.Fragment>
  );
}
