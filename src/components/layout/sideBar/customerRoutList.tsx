import { ProfileOutlined } from '@ant-design/icons';
import { DashboardOutlined, DeveloperBoard, MonitorSharp, NewspaperOutlined, RequestPageOutlined, WalletOutlined } from '@mui/icons-material';
import { customerMainRoutes } from '../../../protectedRouts/config/customerRoutes';
import { IRout } from '.';



const customerRoutList =   [
    { label: 'Dashboard', rout: `${customerMainRoutes}/Dashboard`, icon: <DashboardOutlined /> },
    { label: 'Monitoring', rout: `${customerMainRoutes}/Monitoring`, icon: <MonitorSharp /> },
    { label: 'Devices', rout: `${customerMainRoutes}/Devices`, icon: <DeveloperBoard /> },
    { label: 'Wallets', rout: `${customerMainRoutes}/Wallets`, icon: <WalletOutlined /> },
    { label: 'Withdraw', rout: `${customerMainRoutes}/Withdraw`, icon: <RequestPageOutlined /> },
    { label: 'Profile', rout: `${customerMainRoutes}/Profile`, icon: <ProfileOutlined /> },
]
export default customerRoutList




