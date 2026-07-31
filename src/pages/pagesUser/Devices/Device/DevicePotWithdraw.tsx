import { Flex, Form, FormProps, Input, Select } from 'antd';
import { useEffect, useRef, useState } from 'react';
import CButton from '../../../../components/ui/CButton';
import useIsMobile from '../../../../hooks/useIsMobile';
import IWithdrawalRequest from '../../../../interfaces/IWithdrawalRequest';
import WebService, { IWebServiceFuncs } from '../../../../webService';
import apis, { miningWallet, userWallet, withdrawalRequest } from '../../../../webService/ApiUrls/apis';
import IReqRes from '../../../../webService/ApiUrls/apis/IReqRes';
import IResponse from '../../../../webService/ApiUrls/apis/IResponse';
import IDeviceEarningPot from '../../../../interfaces/IDeviceEarningPot'
import { useAppSelector } from '../../../../redux/hooks';
import { safeFixed } from '../../../../utils/text.utils';
import IUserWallet from '../../../../interfaces/IUserWallet';
import { CheckBoxOutlineBlank } from '@mui/icons-material';
import { CheckCircleFilled } from '@ant-design/icons';
import { safeParseFloat } from '../../../../utils/math.utils';
import CSubmitBtn from '../../../../components/ui/CSubmitBtn';
import { ICreateEdit } from '../../withdraw/create';
import ITransaction from '../../../../interfaces/ITransaction';

export default ({ onSucceed, pot }: IDevicePotWithdraw) => {
  const [form] = Form.useForm();
  const refWebService = useRef<IWebServiceFuncs>()
  const _savedUser = useAppSelector((s) => s.userSlice)
  const [_mining_wallet, set_mining_wallet] = useState<IDeviceEarningPot>();
  const [_mining_wallets, set_mining_wallets] = useState<IDeviceEarningPot[]>([]);
  const [_user_wallets, set_user_wallets] = useState<IUserWallet[]>([]);

  interface FieldType extends ITransaction {

  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    const res = await refWebService?.current?.callApi<IResponse<ITransaction>>(apis.transactions.create({ ...values, fromDevicePotId: pot?.id }))

    if (res?.success) {
      form.resetFields();
      onSucceed!(res.data, 'add')
    }

  };


  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const _loadListOfUserWallets = async () => {
    const res = await refWebService?.current?.callApi<IReqRes<IUserWallet>['getAllBy']['res']>(userWallet.getAllBy({ userId: _savedUser.id! }))
    if (res?.success) {
      set_user_wallets(res?.data!)
    }
  }

  
  return (

    <Form
      form={form}
      name="withdraw"
      preserve={false}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"


      autoComplete='off'

    >

      <div>
        {pot?.availableBalance}
      </div>

      <Form.Item
        style={style}
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
            message: 'Please input  amount',
          }

        ]}
      >
        <Input placeholder='amount' type='number' />
      </Form.Item>



      <Form.Item
        name="toWalletId"
        label="User Wallet"
        rules={[{ required: true, message: 'Please input your client type!' }]}
        style={style}

      >
        <Select onFocus={_loadListOfUserWallets}
          placeholder="User Wallet "
        >
          {_user_wallets.map((wl) =>
            <Select.Option key={wl.id} value={wl.id!}>
              <Flex flex={1} >
                <Flex flex={1} >
                  {`${wl.nickname}  `}
                </Flex>
              </Flex>

            </Select.Option>)}
        </Select>
      </Form.Item>

      <Form.Item
        name={'submit'}
        style={{ ...style, width: undefined }}
        className='none'
      >

        <CSubmitBtn />

      </Form.Item>

      <WebService ref={refWebService} />

    </Form>


  );
};


const style = { margin: 5, width: '100%' }


export interface IDevicePotWithdraw extends ICreateEdit {
  pot?: Partial<IDeviceEarningPot>;

}

