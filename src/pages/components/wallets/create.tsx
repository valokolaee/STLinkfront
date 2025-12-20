import { Flex, Form, FormProps, Input } from 'antd';
import { useRef } from 'react';
import CSubmitBtn from '../../../components/ui/CSubmitBtn';
import useIsMobile from '../../../hooks/useIsMobile';
import IUserWallet from '../../../interfaces/IUserWallet';
import { useAppSelector } from '../../../redux/hooks';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { userWallet } from '../../../webService/ApiUrls/apis';
import IReqRes from '../../../webService/ApiUrls/apis/IReqRes';
import { ICreateEdit } from '../../withdraw/create';

export default ({ onSucceed, uw }: ICreateWallet) => {
  const refWebService = useRef<IWebServiceFuncs>()
  const _savedUser = useAppSelector((s) => s.userSlice)
  const [form] = Form.useForm();

  interface FieldType extends IUserWallet {
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    values = { userId: _savedUser.id!, ...values }


    if (!!!uw) {
      const res = await refWebService?.current?.callApi<IReqRes<IUserWallet>['create']['res']>(userWallet.create(values as IUserWallet))

      if (res?.success) {
        onSucceed!(res.data, 'add')
        form.resetFields();

      }

    } else {


      const res = await refWebService?.current?.callApi<IReqRes<IUserWallet>['update']['res']>(userWallet.update({ id: uw.id, ...values } as IUserWallet))

      if (res?.success) {
        onSucceed!({ ...uw, ...values }, 'update')
        form.resetFields();
      }

    }

  };


  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (


    <Form
      // className='border-solid'
      form={form}
      name="createDevice"
      preserve={false}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // labelCol={{ span: 5 }}
      // wrapperCol={{ span: '30%' }}

      layout="vertical"

      autoComplete='off'
      initialValues={{ nickname: uw?.nickname!, walletAddress: uw?.walletAddress }}
    >

      <Flex  vertical>

        <Form.Item
          name="walletAddress"
          rules={[
            {
              required: true,
              message: 'Please input your Wallet Address!',
            }]}
          hidden={!!uw}
        // style={style}
          label='Wallet Address'
        >
          <Input
            // className={inputText}

            disabled={!!uw}
            placeholder='Address'
          />
        </Form.Item>
        <Form.Item
          name="nickname"
          label="Nickname"
          rules={[
            {
              required: true,
              message: 'Please input a nickname by which you can recognize easier later!',
            }]}
        // style={style}
        >
          <Input
            placeholder='Nickname'
          // className={inputText}
          />
        </Form.Item>
        <Form.Item
        // style={{ ...style, width: undefined }}
        // label={null} className='none'
        >
          <CSubmitBtn />
          {/* <CButton title='Submit' /> */}
        </Form.Item>
      </Flex>



      <WebService ref={refWebService} />
    </Form>

  );
};


export interface ICreateWallet extends ICreateEdit {
  uw?: IUserWallet;
}