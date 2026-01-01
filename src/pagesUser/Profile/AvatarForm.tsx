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

  const _user = useAppSelector((s) => s.userSlice)

  const [api, contextHolder] = notification.useNotification();

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


