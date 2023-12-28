import LineChart from "../../../components/lineChart";
import BarChart from "../../../components/barChart";
import { mockLineData, mockBarData } from "../../../data/mockData";
import { Box } from "@mui/material";

const Reporting = () => {
    return (
        <div id="main_content">
            <div className="main-title">
                <p className="font-weight-bold">REPORTING</p>
            </div>
            <Box display="flex">
                <Box className="item-container" m="-20px 10px 0 -5px" flex="50%">
                    <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
                </Box>
                <Box className="item-container" m="-20px 0 0 0" flex="50%">
                    <BarChart data={mockBarData} bottomLegend="Data1" sideLegend="Data2"/>
                </Box>
            </Box>
            <Box className="item-container" height="350px" m="10px 0 0 0">
                <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
            </Box>
        </div>
    );
}

export default Reporting;