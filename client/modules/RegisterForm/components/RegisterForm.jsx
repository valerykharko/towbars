import React from "react";
import Link from "next/link";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UnlockOutlined } from "@ant-design/icons";

import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.info}>
          <img src="/static/images/auth/register-icon.png" alt="" />
          <h2>Регистрация</h2>
          <span>Пожалуйста, введите данные</span>
        </div>
        <div className={styles.mainBlock}>
          <div>
            <Form
              name="form"
              className={styles.form}
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="email"
                className={styles.formItem}
                rules={[{ required: true, message: "Введите Ваш email" }]}
              >
                <Input
                  className={styles.input}
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                className={styles.formItem}
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  className={styles.input}
                  prefix={<UnlockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                />
              </Form.Item>
              <Form.Item
                name="password"
                className={styles.formItem}
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  className={styles.input}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Повторите пароль"
                />
              </Form.Item>
              <Form.Item className={styles.button}>
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Зарегистрироваться
                  </Button>
                </div>
                <Link href={"/auth/login"}>
                  <div className={styles.other}>
                    <span>Войти</span>
                  </div>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
