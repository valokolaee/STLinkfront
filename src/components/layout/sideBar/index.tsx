import { IRouteConfig } from "../../../protectedRouts/types/IRouteConfig";
import Item from "./item";

export default ({ rList }: { rList: IRouteConfig[] }) =>
    <div>
        {rList.map((item, index) => <Item {...item} key={index} />)}
    </div>




