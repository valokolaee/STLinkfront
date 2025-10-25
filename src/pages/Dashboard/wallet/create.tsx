import { Form, FormProps, Input } from 'antd';
import { useRef } from 'react';
import CButton from '../../../components/ui/CButton';
import IUserWallet from '../../../interfaces/IUserWallet';
import { useAppSelector } from '../../../redux/hooks';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { userWallet } from '../../../webService/ApiUrls/apis';
import IReqRes from '../../../webService/ApiUrls/apis/IReqRes';

export default ({ onSucceed }: { onSucceed?: (res: any) => void }) => {
  const refWebService = useRef<IWebServiceFuncs>()
  const _savedUser = useAppSelector((s) => s.userSlice)


  interface FieldType extends IUserWallet {
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    values = { userId: _savedUser.id!, ...values }
    const res = await refWebService?.current?.callApi<IReqRes<IUserWallet>['create']['res']>(userWallet.create(values as IUserWallet))

    if (res?.success) {
      onSucceed!(res.data)
    } else {
    }
  };


  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>

      <h2 className='text-white' >Add Mining Wallet</h2>

      <Form
        name="createDevice"
        preserve={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: '30%' }}
        layout="horizontal"
        autoComplete='off'
      >

        <Form.Item
          label= 'Address'  
          name="walletAddress"
          rules={[
            {
              required: true,
              message: 'Please input your Wallet Address!',
            }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label= 'Nickname' 
          name="nickname"
          rules={[
            {
              required: true,
              message: 'Please input a nickname by which you can recognize easier later!',
            }]}
        >
          <Input />
        </Form.Item>


        <Form.Item label={null} className='none'>
          <CButton title='Submit' />
        </Form.Item>



      </Form>

      <WebService ref={refWebService} />
    </div>
  );
};
