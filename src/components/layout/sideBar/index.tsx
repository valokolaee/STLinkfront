import { shadow } from "../../../css/classNames";
import Item from "./item";
import routList from "./routList";

export default () =>
    <div className={ shadow}>
        {routList().map((item, index) => <Item {...item} key={index} />)}
    </div>