import { Form, FormProps, Input, notification, Select } from 'antd';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CButton from '../../../components/ui/CButton';
import CLink from '../../../components/ui/CLink';
import CText from '../../../components/ui/CText';
import IMiningDevice from '../../../interfaces/IMiningDevice';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { miningDevices } from '../../../webService/ApiUrls/apis';
import IDeviceReqRes from '../../../webService/ApiUrls/apis/IDeviceApi';
import CWhiteLabel from '../../../components/ui/CWhiteLabel';

export default ({ onSucceed }: { onSucceed?: (res: any) => void }) => {
  const refWebService = useRef<IWebServiceFuncs>()


  interface FieldType extends IMiningDevice {
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const res = await refWebService?.current?.callApi<IDeviceReqRes['create']['res']>(miningDevices.create(values as IDeviceReqRes['create']['req']))
   
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
 
      <h2 className='text-white' >Add Mining Device</h2>

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
          label={<CWhiteLabel txt='Name' />}
          name="deviceName"
          rules={[
            {
              required: true,
              message: 'Please input your Device Name!',
            }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<CWhiteLabel txt='IMEI' />}

          name="imei"
          rules={[
            {
              required: true,
              message: 'Please input IMEI!',
            }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<CWhiteLabel txt='Model' />}
          name="deviceModel"
          rules={[
            {
              required: true,
              message: 'Please input Model!',
            }]}
        // hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="serialNumber"
          label={<CWhiteLabel txt='Serial Number' />}
        // hasFeedback
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
