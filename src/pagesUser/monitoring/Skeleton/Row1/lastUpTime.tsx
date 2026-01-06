import svgList from "../../../../assets/icons/svgList";
import ContentBox from "../components/ContentBox";

export default ({ lastUpdated }: { lastUpdated?: Date }) => <ContentBox
    fontSize={4}
    color={{ name: 'blue', num: 500 }}
    title='Last Update' value={
        lastUpdated ?
            [
                <strong>
                    {new Date(lastUpdated!).getMinutes() + ":" + new Date(lastUpdated!).getSeconds()}
                </strong>,
                // <p></p>,
                <div className="text-sm">
                    {new Date(lastUpdated!).getDate() + "-" + new Date(lastUpdated!).getMonth() + "-" + new Date(lastUpdated!).getFullYear()}
                </div>

            ]

            : '.. : ..'}
    svg={svgList.chart1}
/>