import { shadowY } from "../../../css/classNames";
import Item from "./item";
import routList from "./routList";

export default () =>
    <div>
        {routList().map((item, index) => <Item {...item} key={index} />)}
    </div>