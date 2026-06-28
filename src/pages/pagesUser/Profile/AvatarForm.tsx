import {
  Flex,
  notification
} from 'antd';
import React from 'react';
import AvatarUploader from '../../../components/ui/CImageUploader';
import { setUserAvatar, setUserLogo } from '../../../redux/actions';
import { useAppSelector } from '../../../redux/hooks';
import apis from '../../../webService/ApiUrls/apis';


const Profile: React.FC = () => {

  const _user = useAppSelector((s) => s.userSlice)

  const [api, contextHolder] = notification.useNotification();

  return (

    <Flex flex={1} vertical>
      {contextHolder}
      <AvatarUploader
        avatar={{
          url: _user?.profileImageUrl! + '&a=' + new Date(),
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


