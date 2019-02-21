import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'dva';
import './form1.less';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Form1 extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    console.info(this.props);
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>

        <FormItem
          label="Username"
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}>
          {getFieldDecorator('userName', {
            // initialValue: this.props.form1.username,
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>

        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}>
          {getFieldDecorator('password', {
            initialValue:'111',
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps({ form1 }){
  return {
    form1
  };
}

const WrappedHorizontalLoginForm = Form.create({
  onFieldsChange(props, changedFields) {
    // console.info(changedFields.userName.value);
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    // console.info({...props});
    const { form1 } = {...props};
    // console.info(form1.username);
    return {
      userName: Form.createFormField({
        // ...props.username,
        value: form1.username,
      }),
    };
  },
  onValuesChange(_, values) {
    // console.log(values);
  },
})(Form1);
export default connect( form1 => form1)(WrappedHorizontalLoginForm);

