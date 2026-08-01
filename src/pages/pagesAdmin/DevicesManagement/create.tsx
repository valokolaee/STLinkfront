import { Form, FormProps, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import CSubmitBtn from '../../../components/ui/CSubmitBtn';
import IMiningDevice from '../../../interfaces/IMiningDevice';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { panel } from '../../../webService/ApiUrls/apis';
import IDeviceReqRes from '../../../webService/ApiUrls/apis/IDeviceReqRes';
import UserPicker from '../../../components/layout/userPicker';
import IUser from '../../../interfaces/IUser';
import { useForm } from 'antd/es/form/Form';

const imei_length = 30

export default ({ onSucceed }: { onSucceed?: (res: any) => void }) => {
  const refWebService = useRef<IWebServiceFuncs>()
  const [form] = useForm();
  const [selectedUser, set_selectedUser] = useState<IUser>()

  interface FieldType extends IMiningDevice {
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log(values);

    const res = await refWebService?.current?.callApi<IDeviceReqRes['create']['res']>(panel.miningDevices.create(values as IDeviceReqRes['create']['req']))
    console.log(res);

    if (res?.success) {
      onSucceed!(res.data)
    } else {
    }
  };
  useEffect(() => {
    console.log(selectedUser);

  }, [selectedUser])


  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo.errorFields);
  };


  const onUserSelect = (user?: IUser) => {
    set_selectedUser(user);

    form.setFieldValue("userId", user!.id);
  }

  return (
    <div className='flex flex-col mx-5'>
      <h2 className='text-white' >Add Mining Device</h2>
      <Form
        name="createDevice"
        form={form}
        preserve={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 3 }}
        // wrapperCol={{ span: 14 }}
        // // labelCol={{ span: 5 }}
        // wrapperCol={{ span: '50%' }}
        // // layout="vertical"
        autoComplete='off'
        // initialValues={{
        //   // userId: selectedUser?.id,
        //   deviceName: 'ccc',
        //   imei: '123456789012345678901234567890',
        //   deviceModel: 'd23r23',
        //   serialNumber: 'sfd'
        // }}
      >

        <Form.Item
          label='Owner'
          name="userId"

          rules={[
            {
              required: true,
              message: 'Please input your Device Owner!',
            }]}
        >


          <UserPicker sel={{ onSelect: onUserSelect, selectedItem: selectedUser! }}
          //   onChange={(e) => {

          //   set_selectedUser(

          //     e.target.value as IUser
          //   )
          //   console.log(

          //   );
          // }}
          />

        </Form.Item>

        <Form.Item
          label='Name'
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
          label='IMEI'
          name="imei"
          rules={[
            {
              required: true,
              message: 'Please input IMEI!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('imei').length === imei_length) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(`username length must be at least ${imei_length} characters long`));
              },
            }),

          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Model'
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
          label='Serial Number'
        // hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item label={null} className='none'>
          <CSubmitBtn title='Submit' />
        </Form.Item>



      </Form>

      <WebService ref={refWebService} />
    </div>
  );
};
