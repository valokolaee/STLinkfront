import type { FormProps } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CSubmitBtn from "../../../components/ui/CSubmitBtn";
import { formContainer } from "../../../css/classNames";
import IUser from "../../../interfaces/IUser";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";
import { setUser, setUserAvatar, setUserLogo } from "../../../redux/actions";
import { useAppSelector } from "../../../redux/hooks";
import WebService, { IWebServiceFuncs } from "../../../webService";
import apis, { deviceAlertRequest, deviceSpecificationRequest, miningSession, panel, permission, rolePermissionRequest, roleRequest, userSession } from "../../../webService/ApiUrls/apis";
import ILoginReq, { ILoginRes } from "../../../webService/ApiUrls/apis/ILogin";
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes";
import ILoginAgentReq, { ILoginAgentRes } from '../../../webService/ApiUrls/apis/ILoginAgent';
import { adminMainRoutes } from '../../../protectedRouts/config/adminRoutes';
const Login = () => {
  const refWebService = useRef<IWebServiceFuncs>()

  const navigate = useNavigate();
  const _savedUser = useAppSelector((s) => s.userSlice)

  interface FieldType extends ILoginAgentReq {
    // remember?: boolean;

  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const v = { ...values, remember: undefined }
    const x = await refWebService?.current?.callApi<ILoginAgentRes>(panel.login(v))
    console.log('xxx', x);

    if (x?.success) {
      var u: IUser = x.data as IUser;
      // if (values.remember) {
      //   u.pass = values.password
      // }

      // setUser(u)
      setUser({ ...u, role: "admin" })

      setUserAvatar(u.profileImageUrl + '?a=' + new Date())

      if (!!!u.logoUrl) {
        setUserLogo('')
      } else {

        setUserLogo(u.logoUrl + '?a=' + new Date())
      }

      navigate(`${adminMainRoutes}/withdrawManagement`)
    }
  };



  return (


    <div className={formContainer}>

      {/* <h2  className="cursor-auto">login</h2> */}

      <Form
        name="agentLogin"
        onFinish={onFinish}


        style={{ maxWidth: '600px', width: '90%' }}
        wrapperCol={{ span: '30%' }}
        layout="vertical"


      // autoComplete="yes"


      // initialValues={{

      //   username: 'admin',
      //   passwordHash: 'michAeel@'
      // }}

      >
        <Form.Item<FieldType>

          label={<label style={{ color: "white" }}>Username</label>}
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
          // className={inputText}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label={<label style={{ color: "white" }}>Password</label>}

          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >


          <Input.Password
            // style={{
            //   borderRadius: 8,
            //   padding: '10px 12px',
            //   backgroundColor:'red'
            // }}
            // style={{ backgroundColor: 'black' }}
            // style={{
            //   backgroundColor: hasError ? '#fff2f0' : '#f6ffed'
            // }}
            // classNames={
            //   {
            //     input: inputText,
            //     // count: inputText,
            //     // prefix: inputText,
            //     root: inputText,
            //     suffix:''

            //   }
            // }
            classNames={{
              // input: inputText,
              // root: inputText,
              // prefix: 'undefined'
            }}
          // className={`${inputText}   `}
          />
        </Form.Item>
        {/* <Form.Item<FieldType>

          name="remember" valuePropName="checked"
          // label="yes"
          label={<label style={{ color: "white" }}>Remember me</label>}
        >
          <Checkbox />
        </Form.Item> */}

        <Form.Item>
          <CSubmitBtn />
        </Form.Item>
        <WebService ref={refWebService} />

      </Form>

    </div>
  );
};

export default Login;