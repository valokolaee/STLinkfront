import { Form, FormProps, Input, notification, Select } from 'antd';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CButton from '../../../components/ui/CButton';
import CLink from '../../../components/ui/CLink';
import CText from '../../../components/ui/CText';
import IMiningDevice from '../../../interfaces/IMiningDevice';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { miningDevices, miningWallet } from '../../../webService/ApiUrls/apis';
import IDeviceReqRes from '../../../webService/ApiUrls/apis/IDeviceApi';
import CWhiteLabel from '../../../components/ui/CWhiteLabel';
import IMiningWallet from '../../../interfaces/IMiningWallet';
import { useAppSelector } from '../../../redux/hooks';

export default ({ onSucceed }: { onSucceed?: (res: any) => void }) => {
  const refWebService = useRef<IWebServiceFuncs>()
  const _savedUser = useAppSelector((s) => s.userSlice)


  interface FieldType extends IMiningWallet {
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    values = { userId: _savedUser.id!, ...values }
    const res = await refWebService?.current?.callApi<IDeviceReqRes['create']['res']>(miningWallet.create(values as IMiningWallet))

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
          label= 'currency' 
          name="currency"

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
