/* eslint-disable jsx-a11y/anchor-is-valid */
/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
// reactstrap components
// import { useHistory } from "react-router-dom";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import { Form, Input, Button } from "antd";
// core components
import * as ActionTypes from "../../Redux/actions";
import * as constants from '../../constants/index'

import styles from './styles.module.css';
import bookImage from '../../assets/img/Books_laptop.png'
import { useDispatch } from "react-redux";
const { Colors } = constants;

const FormItem = Form.Item;

const Login = (props) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [form] = Form.useForm();
  // const loggedInUserSGK = useSelector((rootState) => rootState.loginReducer.loggedInUserSGK)
  const handleSubmit = React.useCallback((values) => {
    dispatch({ type: ActionTypes.POST_LOGIN_SACHSO_REQUEST, values });
  }, [dispatch]);

  return (
    <>
      <Container style={{ padding: 0 }}>
        <Row className="justify-content-center">
          <Col lg="24" md="12">
            <Card className={`bg-secondary border-0 mb-0 ${styles.card}`}>
              <CardBody style={{ backgroundColor: 'white', borderRadius: 'inherit' }}>
                <div key="title" className={styles.title}>
                  <p style={{ fontSize: 25, fontWeight: 600 }}>Đăng nhập</p>
                </div>
                <Form
                  layout={'vertical'}
                  autoComplete="off"
                  form={form}
                  onFinish={handleSubmit}
                  className={styles.form}
                  style={{ backgroundColor: 'white' }}
                  requiredMark={false}
                >
                  <FormItem
                    hasFeedback
                    label={<label style={{ color: Colors.dimGray, fontSize: 16, margin: 0 }}>Tên tài khoản</label>}

                    name="username"
                    rules={[
                      {
                        whitespace: true,
                        message: "Vui lòng nhập tên tài khoản",
                      },
                      {
                        required: true,
                        message: "Vui lòng nhập E-mail hoặc tên tài khoản!",
                      },
                    ]}
                    maxLength={250}
                    style={{ color: 'red' }}
                  >
                    <Input
                      style={{
                        boxShadow:
                          "0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02)",
                        borderRadius: 10,
                      }}
                      allowClear
                      size="large"
                      placeholder="Nhập tên tài khoản"
                    />
                  </FormItem>

                  <FormItem
                    label={<label style={{ color: Colors.dimGray, fontSize: 16, margin: 0 }}>Mật khẩu</label>}
                    style={{ margin: 0, marginBottom: 5 }}
                    hasFeedback
                    name="password"
                    rules={[
                      // { min: 6, message: "Tối thiểu 6 ký tự!" },
                      {
                        whitespace: true,
                        message: "Vui lòng nhập mật khẩu!",
                      },
                      { required: true, message: "Vui lòng nhập mật khẩu!" },
                    ]}
                  >
                    <Input.Password
                      style={{
                        boxShadow:
                          "0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02)",
                        borderRadius: 10,
                      }}
                      allowClear
                      size="large"
                      placeholder="Nhập mật khẩu"
                    />
                  </FormItem>
                  <div style={{ marginBottom: 15 }}>
                    <div
                      style={{ color: Colors.dodgerBlue, cursor: 'pointer' }}
                    // onClick={dispatchProps}
                    >Quên mật khẩu?
                    </div>
                  </div>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span>Lưu đăng nhập</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button
                      className="mt-4"
                      color="info"
                      type="button"
                      htmlType="submit"
                      style={{
                        width: "100%",
                        padding: 10,
                        height: "auto",
                        margin: "0px 0px 10px 0px",
                        backgroundColor: Colors.dodgerBlue,
                        fontSize: 15,
                        color: "white",
                        fontWeight: "500",
                        borderRadius: 5,
                      }}
                    >
                      Đăng nhập
                    </Button>

                  </div>
                </Form>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ color: Colors.greyChateau }}>Chưa có tải khoản? </span>
                  <span
                    style={{ color: Colors.dodgerBlue, cursor: 'pointer' }}
                  // onClick={() => dispatchProps('register')}
                  >
                    Đăng ký ngay
                  </span>
                </div>
                <div className={styles.topIcon} style={{
                  position: 'absolute'
                }}>
                  <div
                    className={styles.bigBoxTransform}
                  ></div>
                  <div
                    className={styles.smallBoxTransform}
                  ></div>
                </div>
              </CardBody>
              <img key="img" className={`${styles.displayImg}`} src={bookImage} alt="" style={{
                borderRadius: 'inherit',
                width: 340,
                height: 452,
              }} />
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Login;
