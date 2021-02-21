import React from 'react'
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import './style.css';

class Login extends React.Component {
  onFinish = (values: object) => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div className="login-page">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
        </Button>
          </Form.Item>
        </Form >
      </div>
    );
  }
}

export default Login;