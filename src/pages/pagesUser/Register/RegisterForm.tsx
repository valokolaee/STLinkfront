import {
  Form,
  FormProps,
  Input,
  notification,
  Select
} from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CButton from '../../../components/ui/CButton';
import CLink from '../../../components/ui/CLink';
import CText from '../../../components/ui/CText';
import IUser from '../../../interfaces/IUser';
import { setUser, setUserAvatar } from '../../../redux/actions';
import WebService, { IWebServiceFuncs } from '../../../webService';
import apis from '../../../webService/ApiUrls/apis';
import IRegisterReq, { IRegisterRes } from '../../../webService/ApiUrls/apis/IRegister';
import { formContainer, inputText } from '../../../css/classNames';
import CSubmitBtn from '../../../components/ui/CSubmitBtn';
import { DownOutlined } from '@ant-design/icons';


const FormDisabledDemo: React.FC = () => {
  const refWebService = useRef<IWebServiceFuncs>()

  const navigate = useNavigate();

  interface FieldType extends IRegisterReq {
    confirm?: string;
  };
  //   const xxx: FieldType = {

  // }
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log(values);
    values = { ...values, confirm: undefined }
    const x = await refWebService?.current?.callApi<IRegisterRes>(apis.auth.register(values));

    // console.log('xxx', x);


    if (x?.success) {
      setUser(x.data as IUser)
      setUserAvatar('')
      // navigate('/dashboard')
    } else {
      openNotification(x?.message || 'Registration failed')
    }


  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string) => {

    api.info({
      message,
      // description:`yesterday you said tomorrow, so just do it!`,
      placement: 'topRight',
      showProgress: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className={`${formContainer} border-solidc overflow-scroll `} >
      {contextHolder}

      <h2 >Register</h2>

      <Form
        name="Register"
        preserve={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}

        style={{ maxWidth: '600px', width: '90%' }}
        wrapperCol={{ span: '30%' }}
        initialValues={{
          username:'cc2',
          email: 'c2@g.com',
          password: '111111',
          confirm:'111111'
}}

        layout="vertical"
        // style={{ maxWidth: '80%' }}
        autoComplete='off'
      >

        <Form.Item
          label={<label style={{ color: "white" }}>Username</label>}
          name="username"
          // rules={[{ required: true, message: 'Please input your username!' }]}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('username').length >= 3) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("username length must be at least 3 characters long"));
              },
            }),
          ]}
        >
          <Input
          // className={inputText}
          />
        </Form.Item>

        <Form.Item
          label={<label style={{ color: "white" }}>Email</label>}
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input
          // className={inputText}
          />
        </Form.Item>

        <Form.Item
          label={<label style={{ color: "white" }}>Password</label>}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password').length >= 6) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("password length must be at least 6 characters long"));
              },
            }),
          ]} hasFeedback
        >
          <Input.Password autoComplete="new-password"
          // className={inputText}
          />
        </Form.Item>

        <Form.Item
          name="confirm"

          label={<label style={{ color: "white" }}>Confirm Password</label>}

          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },

            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),

          ]}
        >
          <Input.Password autoComplete="new-password"
          // className={inputText}
          />
        </Form.Item>
{/* 
        <Form.Item
          label={<label style={{ color: "white" }}>Client Type</label>}
          name="clientType"
          // rules={[{ required: true, message: 'Please input your client type!' }]}
        // className={inputText}

        >
          <Select suffixIcon={<DownOutlined style={{ color: '#fff', fontSize: '12px' }} />}>
            <Select.Option value="individual">Individual</Select.Option>
            <Select.Option value="financial_entities">Financial Entity</Select.Option>
            <Select.Option value="business">Business</Select.Option>
          </Select>
        </Form.Item> */}

        <Form.Item>
          <CSubmitBtn />
        </Form.Item>

      </Form>

      <WebService ref={refWebService} />

      <CText text={`Already have Id?`} className="block mt-5 " />
      <CLink
        to={'/login'}
        title="login"
      />

    </div>
  );
};

export default () => <FormDisabledDemo />;




