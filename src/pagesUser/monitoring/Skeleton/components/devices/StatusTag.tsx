import { Tag } from 'antd';
import IMiningDevice from '../../../../../interfaces/IMiningDevice';
// import { IModalFuncs } from '../../../../components/ui/CModal';


export default ({ status }: { status: IMiningDevice['status'] }) =>
    <div>

        <Tag color={_color(status)} key={'tag'}  >
            {status!.toUpperCase()}
        </Tag>

    </div>


const _color = (s: IMiningDevice['status']) => {
    switch (s) {
        case 'active':
            return 'green'
        case 'error':
            return 'red'
        case 'inactive':
            return 'gray'
        case 'maintenance':
            return 'blue'
        case 'offline':
            return 'orange'

        default:
            return 'white'
    }

}
