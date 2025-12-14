import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { cardAndSelected } from '../../../css/classNames';

export default ({ toggleOpen, isOpen }: IDrawerIcon) => {
  const _toggleOpen = () => {
    toggleOpen(!isOpen)
  }

  return (
    <Space >
      <Button onClick={_toggleOpen} className={cardAndSelected(true)}>
        {isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </Space>
  );
};


export interface IDrawerIcon {
  toggleOpen: (open: boolean) => void;
  isOpen?: boolean;
}