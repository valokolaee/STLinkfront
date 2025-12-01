import { Flex, Form, FormProps, Input } from 'antd';
import { useRef } from 'react';
import CButton from '../../../components/ui/CButton';
import IUserWallet from '../../../interfaces/IUserWallet';
import { useAppSelector } from '../../../redux/hooks';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { userWallet } from '../../../webService/ApiUrls/apis';
import IReqRes from '../../../webService/ApiUrls/apis/IReqRes';
import useIsMobile from '../../../hooks/useIsMobile';
import { ICreateEdit } from '../../withdraw/list/create';
import { useForm } from 'antd/es/form/Form';
import { inputText } from '../../../css/classNames';
import CSubmitBtn from '../../../components/ui/CSubmitBtn';

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
      form={form}
      name="createDevice"
      preserve={false}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // labelCol={{ span: 5 }}
      // wrapperCol={{ span: '30%' }}
      // layout="horizontal"
      autoComplete='off'
      initialValues={{ nickname: uw?.nickname!, walletAddress: uw?.walletAddress }}
    >

      <Flex vertical={useIsMobile() && !!!uw}>

        <Form.Item
          name="walletAddress"
          rules={[
            {
              required: true,
              message: 'Please input your Wallet Address!',
            }]}
          hidden={!!uw}
          // style={style}

        >
          <Input
            className={inputText}

            disabled={!!uw}
            placeholder='Address'
          />
        </Form.Item>
        <Form.Item
          name="nickname"
          rules={[
            {
              required: true,
              message: 'Please input a nickname by which you can recognize easier later!',
            }]}
          // style={style}
        >
          <Input
            placeholder='Nickname'
            className={inputText}
          />
        </Form.Item>
        <Form.Item
          // style={{ ...style, width: undefined }}
          // label={null} className='none'
        >
          <CSubmitBtn/>
          {/* <CButton title='Submit' /> */}
        </Form.Item>
      </Flex>



      <WebService ref={refWebService} />
    </Form>

  );
};


const style = { margin: 5, width: '100%' }


export interface ICreateWallet extends ICreateEdit {
  uw?: IUserWallet;
}