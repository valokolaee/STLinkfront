import { Content } from 'antd/es/layout/layout';
import React from 'react';
import CAvatar, { IAvatar } from './CAvatar';
import ImageUploader, { IUploader } from "./CUploader";
import { useAppSelector } from '../../redux/hooks';
import { Flex } from 'antd';


const AvatarUploader: React.FC<IImageUploader> = ({ avatar, uploader }) => {

  // console.log(avatar);
  
  return (
      <Flex vertical align='center' >
        <CAvatar {...avatar} />

        <div className='h-2'/>

        <ImageUploader {...uploader} />
      </Flex>
  );
};

export default AvatarUploader;

export interface IImageUploader {
  uploader?: IUploader;
  avatar?: IAvatar

}