import { Flex, Form, FormProps, Input, Select } from 'antd';
import { useEffect, useRef, useState } from 'react';
import CButton from '../../../components/ui/CButton';
import useIsMobile from '../../../hooks/useIsMobile';
import IWithdrawalRequest from '../../../interfaces/IWithdrawalRequest';
import WebService, { IWebServiceFuncs } from '../../../webService';
import { miningWallet, userWallet, withdrawalRequest } from '../../../webService/ApiUrls/apis';
import IReqRes from '../../../webService/ApiUrls/apis/IReqRes';
import IResponse from '../../../webService/ApiUrls/apis/IResponse';
import IMiningWallet from '../../../interfaces/IMiningWallet';
import { useAppSelector } from '../../../redux/hooks';
import { safeFixed } from '../../../utils/text.utils';
import IUserWallet from '../../../interfaces/IUserWallet';
import { CheckBoxOutlineBlank } from '@mui/icons-material';
import { CheckCircleFilled } from '@ant-design/icons';
import { safeParseFloat } from '../../../utils/math.utils';

export default ({ onSucceed, wr }: ICreateWithdrawProps) => {
  const [form] = Form.useForm();
  const refWebService = useRef<IWebServiceFuncs>()
  const _savedUser = useAppSelector((s) => s.userSlice)
  const [_mining_wallet, set_mining_wallet] = useState<IMiningWallet>();
  const [_mining_wallets, set_mining_wallets] = useState<IMiningWallet[]>([]);
  const [_user_wallets, set_user_wallets] = useState<IUserWallet[]>([]);

  interface FieldType extends IWithdrawalRequest {

  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    // console.log('c');


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
    // console.log('Failed:', errorInfo);
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


      <Form.Item
        name="miningWalletAddress"
        label='Mining Wallet Address'
        rules={[{ required: true, message: 'Please input your client type!' }]}
        style={style}
        hidden={!!wr}

      >
        <Select onFocus={_loadListOfMiningWallets}
          placeholder="Mining Wallet Address"
          disabled={!!wr}
          onSelect={(a, b,) => {
            console.log(a, b);

          }}
        >
          {_mining_wallets.map((wl) => <Select.Option


            // className='border-solid px-0 py-0 p-0 m-0'

            key={wl.id} value={wl.walletAddress!} >
            <Flex
              // className='border-solid my-0'
              flex={1}
            // onClick={() => { set_mining_wallet(wl) }}
            >
              <Flex flex={1} >
                {wl.walletAddress}
              </Flex>
              Balance:      {safeFixed(wl.availableBalance!, 2)} {wl.currency}
            </Flex>

          </Select.Option>)}
        </Select>
      </Form.Item>



      <Form.Item
        style={style}
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
            message: 'Please input  amount',
          }
          ,
          // ({ getFieldValue }) => ({
          //   validator(_, value) {
          //     const c = safeParseFloat(value) > safeParseFloat(_mining_wallet?.availableBalance)

          //     // console.log(value, _mining_wallet?.availableBalance, c);

          //     // if (safeParseFloat(value) > safeParseFloat(_mining_wallet?.availableBalance)) {
          //     //   return Promise.reject(new Error('Request amount more than balance'));
          //     // } else {
          //     //   return Promise.resolve();

          //     // }

          //   },
          // }),


        ]}
      >
        <Input placeholder='amount' type='number' />
      </Form.Item>



      <Form.Item
        name="userWalletAddress"
        label="User WalletAddress"
        rules={[{ required: true, message: 'Please input your client type!' }]}
        style={style}
        hidden={!!wr}

      >
        <Select onFocus={_loadListOfUserWallets}
          placeholder="User Wallet Address"
          disabled={!!wr}
        >
          {_user_wallets.map((wl) =>
            <Select.Option key={wl.id} value={wl.walletAddress!}>
              <Flex flex={1} >
                <Flex flex={1} >
                  {`${wl.nickname}  `}
                </Flex>
                {/* {wl.walletAddress} */}
                {/* {`       Balance: ${safeFixed(wl.pendingBalance!, 2)} ${wl.currency}`} */}
              </Flex>

            </Select.Option>)}
        </Select>
      </Form.Item>


      <Form.Item
        name={'submit'}
        style={{ ...style, width: undefined }}
        className='none'
      >
        {!!wr ?
          <button className='rounded-full px-0 py-0 p-0'>
            <CheckCircleFilled className='text-green-300 text-4xl' />
          </button>
          :
          <CButton title={'Submit Withdraw'} className='w-full' />
        }
      </Form.Item>



      <WebService ref={refWebService} />

    </Form>


  );
};


const style = { margin: 5, width: '100%' }


export interface ICreateWithdrawProps extends ICreateEdit {
  wr?: IWithdrawalRequest;
}

export interface ICreateEdit {
  onSucceed?: (res: any, mode: 'add' | 'delete' | 'update') => void;
} 