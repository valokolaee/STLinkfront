import {
  Flex,
  Form,
  FormProps,
  Input,
  notification,
  Select
} from 'antd';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CButton from '../../components/ui/CButton';
import CLink from '../../components/ui/CLink';
import CText from '../../components/ui/CText';
import IUser from '../../interfaces/IUser';
import { setUser, setUserAvatar, setUserLogo } from '../../redux/actions';
import WebService, { IWebServiceFuncs } from '../../webService';
import apis from '../../webService/ApiUrls/apis';
import IRegisterReq, { IRegisterRes } from '../../webService/ApiUrls/apis/IRegister';
import Icon, { EditOutlined } from '@ant-design/icons';
import CAvatar from '../../components/ui/CAvatar';
import { useAppSelector } from '../../redux/hooks';
import ImageUploader from "../../components/ui/CUploader";
import { Content } from 'antd/es/layout/layout';
import AvatarUploader from '../../components/ui/CImageUploader';
import IResponse from '../../webService/ApiUrls/apis/IResponse';
import { formContainer } from '../../css/classNames';
import CSubmitBtn from '../../components/ui/CSubmitBtn';


const Profile: React.FC = () => {
  const refWebService = useRef<IWebServiceFuncs>()
  const [_disabled, set_disabled] = useState<boolean>(true)
  const navigate = useNavigate();
  const _user = useAppSelector((s) => s.userSlice)

  interface FieldType extends IRegisterReq {
  };
  //   const xxx: FieldType = {

  // }
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log(values);
    values = { ...values, }
    const x = await refWebService?.current?.callApi<IRegisterRes>(apis.auth.register(values));

    console.log('xxx', x);


    if (x?.success) {
      setUser(x.data as IUser)
      setUserAvatar('')
      navigate('/account')
    } else {
      openNotification(x?.message || 'Registration failed')
    }


  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string) => {

    api.info({
      message,
      // description:`yesterday you said tomorrow, so just do it!`,
      placement: 'topRight',
      showProgress: true,
      pauseOnHover: true,
    });
  };

  const _setDisabled = () => {
    set_disabled(!_disabled)
  }
  return (

    <Flex flex={1} vertical>
      {contextHolder}
      <AvatarUploader
        avatar={{
          url: _user?.profileImage! + '&a=' + new Date(),
          size: 150,
        }}


        uploader={{
          apiModel: apis.users.updateAvatar,
          callBack(res) { setUserAvatar(res.data.url + '?a=' + new Date()) },
          label: 'Upload Avatar'
        }}
      />

      <AvatarUploader
        avatar={{
          size: 100,
          url: _user?.logoUrl! + '&a=' + new Date(),
        }}
        uploader={{
          apiModel: apis.users.updateLogo,
          callBack(res) { setUserLogo(res.data.url + '?a=' + new Date()) },
          label: 'Upload Logo'
        }}
      />
    </Flex>

  );
};

export default () => <Profile />;


