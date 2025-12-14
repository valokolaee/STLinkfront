import { useParams } from "react-router-dom";

export default () => {
    const { id } = useParams(); // { id: '123' }

    return <>wallet{id}</>
}