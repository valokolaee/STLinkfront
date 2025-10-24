import { Flex, Form, FormProps, Input, Select } from 'antd';
import { useEffect, useRef, useState } from 'react';
import CButton from '../../../components/ui/CButton';
import useIsMobile from '../../../hooks/useIsMobile';
import IWithdrawalRequest from '../../../interfaces/IWithdrawalRequest';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { miningWallet, withdrawalRequest } from '../../../webService/ApiUrls/apis';
import IReqRes from '../../../webService/ApiUrls/apis/IReqRes';
import IResponse from '../../../webService/ApiUrls/apis/IResponse';
import IMiningWallet from '../../../interfaces/IMiningWallet';
import { useAppSelector } from '../../../redux/hooks';
import { safeFixed } from '../../../utils/text.utils';

export default ({ onSucceed, wr }: ICreateWithdrawProps) => {
  const [form] = Form.useForm();
  const refWebService = useRef<IWebServiceFuncs>()
  const _savedUser = useAppSelector((s) => s.userSlice)
  const [_wallets, set_wallets] = useState<IMiningWallet[]>([]);

  interface FieldType extends IWithdrawalRequest {

  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

  
    if (!!!wr) {

     const res = await refWebService?.current?.callApi<IResponse<any>>(withdrawalRequest.create(values as IWithdrawalRequest))
      if (res?.success) {
        form.resetFields();
        onSucceed!(res.data, 'add')
      }
    } else {

      const __wr :IWithdrawalRequest= { id: wr?.id!, ...values ,}

     const res = await refWebService?.current?.callApi<IResponse<any>>(withdrawalRequest.update( __wr  ))
      if (res?.success) {
        form.resetFields();
        onSucceed!({...wr,...__wr}, 'update')
      }
    }

   
  };


  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const _listOfWallets = async () => {
    const res = await refWebService?.current?.callApi<IReqRes<IMiningWallet>['getAllBy']['res']>(miningWallet.getAllBy({ userId: _savedUser.id! }))
    if (res?.success) {
      set_wallets(res?.data!)
    }

  }

  useEffect(() => {
    _listOfWallets()
  }, [])

  return (

    <Form
      form={form}
      name="withdraw"
      preserve={false}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // labelCol={{ span: 5 }}
      // wrapperCol={{ span: '30%' }}
      layout="vertical"
      initialValues={{
        amount: wr?.amount,
        walletAddress: wr?.walletAddress,
      }}
      autoComplete='off'

    >
      <Flex align='center' vertical={useIsMobile()} className=' '>

        <Form.Item
          style={style}
          // label={<CWhiteLabel txt='amount' />}
          name="amount"
          rules={[
            {
              required: true,
              message: 'Please input  amount',
            }]}
        >
          <Input placeholder='amount' type='number' />
        </Form.Item>

        {/* <Form.Item
          // label='currency'
          // label={<CWhiteLabel txt='currency' />}
          style={style}

          name="currency"
          rules={[
            {
              required: true,
              message: 'Please input currency!',
            }]}
        >
          <Input placeholder='currency' />
        </Form.Item> */}

        {/* <Form.Item
          style={style}
          name="walletAddress"
          rules={[
            {
              required: true,
              message: 'Please input walletAddress!',
            }]}
        >
          <Input placeholder='walletAddress' />
        </Form.Item> */}
        <Form.Item
          name="walletAddress"
          rules={[{ required: true, message: 'Please input your client type!' }]}
          style={style}
        >
          <Select>
            {_wallets.map((wl) => <Select.Option key={wl.id} value={wl.walletAddress!}>
              <Flex flex={1} >
                <Flex flex={1} >
                  {wl.walletAddress}

                </Flex>

                {safeFixed(wl.availableBalance!, 2)} {wl.currency}
              </Flex>


            </Select.Option>)}
            {/* <Select.Option value="individual">Individual</Select.Option> */}
            {/* <Select.Option value="financial_entities">Financial Entity</Select.Option>
            <Select.Option value="business">Business</Select.Option> */}

          </Select>
        </Form.Item>


        <Form.Item
          style={{ ...style, width: undefined }}
          className='none'>
          <CButton title={(!!wr ? 'Edit ' : 'Submit ') + 'Withdraw'} className='w-full' />
        </Form.Item>
      </Flex>


      <WebService ref={refWebService} />

    </Form>


  );
};
const style = { margin: 5, width: '100%' }
export interface ICreateWithdrawProps {
  wr?: IWithdrawalRequest;
  onSucceed?: (res: any, mode: 'add' | 'delete' | 'update') => void;
} 