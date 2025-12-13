import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { FormProps } from 'antd';
import { Checkbox, Flex, Form, Input } from 'antd';
import CButton from '../../components/ui/CButton';
import CLink from "../../components/ui/CLink";
import CText from "../../components/ui/CText";
import IUser from "../../interfaces/IUser";
import IWithdrawalRequest from "../../interfaces/IWithdrawalRequest";
import { setUser, setUserAvatar } from "../../redux/actions";
import { useAppSelector } from "../../redux/hooks";
import WebService, { IWebServiceFuncs } from "../../webService";
import apis, { deviceAlertRequest, deviceSpecificationRequest, miningSession, permission, rolePermissionRequest, roleRequest, userSession } from "../../webService/ApiUrls/apis";
import ILoginReq, { ILoginRes } from "../../webService/ApiUrls/apis/ILogin";
import IReqRes from "../../webService/ApiUrls/apis/IReqRes";
import { formContainer, inputText } from "../../css/classNames";
import CSubmitBtn from "../../components/ui/CSubmitBtn";
import { ClassNames } from "@emotion/react";
const Login = () => {
  const refWebService = useRef<IWebServiceFuncs>()

  const navigate = useNavigate();
  const _savedUser = useAppSelector((s) => s.userSlice)

  interface FieldType extends ILoginReq {
    remember?: boolean;

  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const v = { ...values, remember: undefined }
    const x = await refWebService?.current?.callApi<ILoginRes>(apis.auth.login(v))
    console.log('xxx', x);

    if (x?.success) {
      var u: IUser = x.data as IUser;
      if (values.remember) {
        u.pass = values.password
      }

      setUser(u)
      setUserAvatar(u.profileImage + '?a=' + new Date())
      navigate('/')
    }
  };




  const _try = async () => {
    await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(deviceAlertRequest.getAll())
    await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(deviceSpecificationRequest.getAll())
    await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(miningSession.getAll())
    await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(permission.getAll())
    await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(rolePermissionRequest.getAll())
    await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(roleRequest.getAll())
    await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(userSession.getAll())

    // const res = await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['create']['res']>(withdrawalRequest.create({ amount: 10, currency: 'cbtw', walletAddress: '100oidytf' }))
    // await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(withdrawalRequest.update({ id: res?.data?.id, walletAddress: '20cc1250y0', currency: 'ddd', amount: 100000 }))

    // await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(withdrawalRequest.getOneByID(1))
    // await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getOneByID']['res']>(withdrawalRequest.delete(1))



    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.create({ deviceModel: 'wbc', deviceName: 'scv', imei: new Date().getTime().toString() }))
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.create({ amount: 32, currency: 'eew', deviceId: 1, isSettled: true, userId: 1 }))
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.getAll())
    // amount
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningWallet.create({ userId: _savedUser.id!, walletAddress: v4() }))
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningWallet.update({ id: 4, userId: _savedUser.id!, walletAddress: '2000', withdrawnAmount: 220002 }))

    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningWallet.getAll())


    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.create({ deviceModel: 'wbc', deviceName: 'scv', imei: new Date().getTime().toString() }))
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.create({  amount:32,currency:'eew',deviceId:1,isSettled:true}))



    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.getAll())
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.getAll())



    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.create({  amount: 3200 ,deviceId:1,currency:'ccc',isSettled:true}))
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.getOneByID(1))
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.getAllBy({ deviceId: 1 }))

    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.delete(1))


    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.getAll())
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.getOneByID(1))
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.getAllBy({ userId: _savedUser.id }))

    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.update({ id: 1, deviceName: 'cccv2' }))
    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.delete(1))



    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(miningDevices.getAllBy({ userId: _savedUser.id }))


    // await refWebService?.current?.callApi<IDeviceReqRes['getOneByID']['res']>(deviceEarnings.getAllBy({ deviceId: 1 }))


  }




  return (


    <div className={formContainer}>

      <h2 onClick={_try} className="cursor-auto">login</h2>

      <Form
        name="login"
        onFinish={onFinish}


        style={{ maxWidth: '600px', width: '90%' }}
        wrapperCol={{ span: '30%' }}
        layout="vertical"


        autoComplete="yes"


        initialValues={{
          remember: true,
          email: _savedUser?.email,
          password: _savedUser?.pass,
        }}

      >
        <Form.Item<FieldType>

          label={<label style={{ color: "white" }}>Username</label>}
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className={inputText} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<label style={{ color: "white" }}>Password</label>}

          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className={inputText} />
        </Form.Item>
        <Form.Item<FieldType>

          name="remember" valuePropName="checked"
          // label="yes"
          label={<label style={{ color: "white" }}>Remember me</label>}
        >
          <Checkbox />
        </Form.Item>

        <Form.Item>
          <CSubmitBtn />
        </Form.Item>
        <WebService ref={refWebService} />

      </Form>

    </div>
  );
};

export default Login;