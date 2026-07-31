import { DashboardOutlined, DeveloperBoard, RequestPageOutlined } from '@mui/icons-material';
import Dashboard from '../../../pages/pagesAdmin/Dashboard';
import DevicesManagement from '../../../pages/pagesAdmin/DevicesManagement';
import Create from '../../../pages/pagesAdmin/DevicesManagement/create';
import DeviceManagement from '../../../pages/pagesAdmin/DevicesManagement/DeviceManagement';
import UsersManagement from '../../../pages/pagesAdmin/UsersManagement';
import WithdrawManagement from '../../../pages/pagesAdmin/withdrawManagement';





export const admin_dashboard = { path: '/dashboard', element: <Dashboard />, sideBar: { label: 'Dashboard', icon: <DashboardOutlined /> }, }
export const admin_withdraws = { path: '/withdraws', element: <WithdrawManagement />, sideBar: { label: 'Withdraws', icon: <RequestPageOutlined /> }, }
export const admin_devices = { path: '/devices', element: <DevicesManagement />, sideBar: { label: 'Devices', icon: <DeveloperBoard /> }, }
export const admin_device = { path: '/device', element: <DeviceManagement /> }
export const admin_add_device = { path: '/addDevice', element: <Create /> }
export const admin_rolls = { path: '/rolls', element: <DevicesManagement />, sideBar: { label: 'Rolls & Permissions', icon: <DeveloperBoard /> }, }
export const admin_roll = { path: '/roll', element: <DevicesManagement /> }
export const admin_users = { path: '/users', element: <UsersManagement />, sideBar: { label: 'Users', icon: <DeveloperBoard /> }, }
export const admin_user = { path: '/user', element: <DevicesManagement /> }
export const admin_reports = { path: '/reports', element: <DevicesManagement />, sideBar: { label: 'Reports', icon: <DeveloperBoard /> }, }
export const admin_report = { path: '/report', element: <DevicesManagement /> }

