import { Tag } from 'antd';
import IWithdrawalRequest from '../../../interfaces/IWithdrawalRequest';


export default ({ status }: { status: IWithdrawalRequest['status'] }) =>
    <div>

        <Tag color={_color(status)} key={'tag'}  >
            {status!.toUpperCase()}
        </Tag>

    </div>


const _color = (s: IWithdrawalRequest['status']) => {
    switch (s) {
        case 'completed':
            return 'lightGreen'
        case 'approved':
            return 'green'
        case 'failed':
        case 'rejected':
            return 'red'
        case 'processing':
            return 'gray'
        case 'pending':
            return 'blue'
        case 'cancelled':
            return 'orange'

        default:
            return 'white'
    }

}
