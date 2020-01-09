import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
// * Styles
import "./form.component.css";
// logo
import user from "../../../media/user.png";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <i
          className="fas fa-user user-logo"
          style={{ fontSize: "120px", color: "#393e46" }}
        ></i>{" "}
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [
              { required: true, message: "Por favor introduce tu usuario" }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Usuario"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [
              { required: true, message: "Por favor introduce tu password." }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox style={{ color: "white" }}>Recordarme</Checkbox>)}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Logear
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Olvidé el password
          </a>
          <a className="login-register" href="">
            Registrarse
          </a>
        </Form.Item>
        <Form.Item></Form.Item>
      </Form>
    );
  }
}

const LoginComponent = Form.create({ name: "normal_login" })(NormalLoginForm);

export default LoginComponent;
