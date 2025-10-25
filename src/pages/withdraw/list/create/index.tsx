import { Flex, Form, FormProps, Input, Select } from 'antd';
import { useEffect, useRef, useState } from 'react';
import CButton from '../../../../components/ui/CButton';
import useIsMobile from '../../../../hooks/useIsMobile';
import IWithdrawalRequest from '../../../../interfaces/IWithdrawalRequest';
import WebService, { IWebServiceFuncs } from '../../../../webService';
import { miningWallet, userWallet, withdrawalRequest } from '../../../../webService/ApiUrls/apis';
import IReqRes from '../../../../webService/ApiUrls/apis/IReqRes';
import IResponse from '../../../../webService/ApiUrls/apis/IResponse';
import IMiningWallet from '../../../../interfaces/IMiningWallet';
import { useAppSelector } from '../../../../redux/hooks';
import { safeFixed } from '../../../../utils/text.utils';
import IUserWallet from '../../../../interfaces/IUserWallet';

export default ({ onSucceed, wr }: ICreateWithdrawProps) => {
  const [form] = Form.useForm();
  const refWebService = useRef<IWebServiceFuncs>()
  const _savedUser = useAppSelector((s) => s.userSlice)
  const [_mining_wallets, set_mining_wallets] = useState<IMiningWallet[]>([]);
  const [_user_wallets, set_user_wallets] = useState<IUserWallet[]>([]);

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

      const __wr: IWithdrawalRequest = { id: wr?.id!, ...values, }

      const res = await refWebService?.current?.callApi<IResponse<any>>(withdrawalRequest.update(__wr))
      if (res?.success) {
        form.resetFields();
        onSucceed!({ ...wr, ...__wr }, 'update')
      }
    }


  };


  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const _loadListOfMiningWallets = async () => {
    const res = await refWebService?.current?.callApi<IReqRes<IMiningWallet>['getAllBy']['res']>(miningWallet.getAllBy({ userId: _savedUser.id! }))
    if (res?.success) {
      set_mining_wallets(res?.data!)
    }
  }

  const _loadListOfUserWallets = async () => {
    const res = await refWebService?.current?.callApi<IReqRes<IUserWallet>['getAllBy']['res']>(userWallet.getAllBy({ userId: _savedUser.id! }))
    if (res?.success) {
      set_user_wallets(res?.data!)
    }
  }

  // useEffect(() => {
  //   _loadListOfWallets()
  // }, [])

  return (

    <Form
      form={form}
      name="withdraw"
      preserve={false}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      initialValues={{
        amount: wr?.amount,
        userWalletAddress: wr?.userWalletAddress,
        miningWalletAddress: wr?.miningWalletAddress,
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


        <Form.Item
          name="miningWalletAddress"
          rules={[{ required: true, message: 'Please input your client type!' }]}
          style={style}
        >
          <Select onFocus={_loadListOfMiningWallets}
            placeholder="Mining Wallet Address"
          >
            {_mining_wallets.map((wl) => <Select.Option key={wl.id} value={wl.walletAddress!}>
              <Flex flex={1} >
                <Flex flex={1} >
                  {wl.walletAddress}
                </Flex>
                {safeFixed(wl.availableBalance!, 2)} {wl.currency}
              </Flex>

            </Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          name="userWalletAddress"
          rules={[{ required: true, message: 'Please input your client type!' }]}
          style={style}
        >
          <Select onFocus={_loadListOfUserWallets}
            placeholder="User Wallet Address"
          >
            {_user_wallets.map((wl) =>
              <Select.Option key={wl.id} value={wl.walletAddress!}>
                <Flex flex={1} >
                  <Flex flex={1} >
                    {wl.nickname}
                  </Flex>
                  {wl.walletAddress}
                </Flex>
                {safeFixed(wl.pendingBalance!, 2)} {wl.currency}

              </Select.Option>)}
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