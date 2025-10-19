import { Form, FormProps, Input, notification, Select } from 'antd';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CButton from '../../../components/ui/CButton';
import CLink from '../../../components/ui/CLink';
import CText from '../../../components/ui/CText';
import IMiningDevice from '../../../interfaces/IMiningDevice';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { miningDevices, withdrawalRequest } from '../../../webService/ApiUrls/apis';
import IDeviceReqRes from '../../../webService/ApiUrls/apis/IDeviceApi';
import CWhiteLabel from '../../../components/ui/CWhiteLabel';
import IWithdrawalRequest from '../../../interfaces/IWithdrawalRequest';
import IReqRes from '../../../webService/ApiUrls/apis/IReqRes';

export default ({ onSucceed }: { onSucceed?: (res: any) => void }) => {
  const refWebService = useRef<IWebServiceFuncs>()


  interface FieldType extends IWithdrawalRequest {
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const res = await refWebService?.current?.callApi<IDeviceReqRes['create']['res']>(withdrawalRequest.create(values as  IWithdrawalRequest ))
   
    if (res?.success) {
      onSucceed!(res.data)
    } else {
    }
  };


  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
  // TODO list of wallets

  return (
    <div>
 
      <h2 className='text-white' >Add Mining Device</h2>

      <Form
        name="withdraw"
        preserve={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: '30%' }}
        layout="horizontal"
        autoComplete='off'
      >

        <Form.Item
          label={<CWhiteLabel txt='amount' />}
          name="amount"
          rules={[
            {
              required: true,
              message: 'Please input  amount',
            }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<CWhiteLabel txt='currency' />}

          name="currency"
          rules={[
            {
              required: true,
              message: 'Please input currency!',
            }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<CWhiteLabel txt='walletAddress' />}
          name="walletAddress"
          rules={[
            {
              required: true,
              message: 'Please input walletAddress!',
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
