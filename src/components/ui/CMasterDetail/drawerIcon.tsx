import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

export default ({ toggleOpen, isOpen }: IDrawerIcon) => {
  const _toggleOpen = () => {
    toggleOpen(!isOpen)
  }

  return (
    <Space>
      <Button onClick={_toggleOpen}>
        {isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </Space>
  );
};


export interface IDrawerIcon {
  toggleOpen: (open: boolean) => void;
  isOpen?: boolean;
}