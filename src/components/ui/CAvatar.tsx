import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useAppSelector } from "../../redux/hooks";
import { AvatarSize } from "antd/es/avatar/AvatarContext";

export default ({ url, shape, size ,style}: IAvatar) => {

    
    return (<Avatar
        shape={shape}
        src={url}
        size={size}
        icon={<UserOutlined />}
        style={style}
         
    />)
}

export interface IAvatar {
    shape?: 'circle' | 'square';
    size?: AvatarSize;
    url?: string;
    style?: React.CSSProperties;

}