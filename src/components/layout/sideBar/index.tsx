import { ReactNode } from "react";
import { shadowY } from "../../../css/classNames";
import Item from "./item";
import customerRoutList from "./customerRoutList";

export default ({rList }:{rList:IRout[]}) =>
    <div>
        {rList.map((item, index) => <Item {...item} key={index} />)}
    </div>




export interface IRout {
    label: 'Dashboard';
    rout: string;
    icon: ReactNode
}
