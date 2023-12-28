import LineChart from "../../../components/lineChart";
import {mockLineData} from "../../../data/mockData";
import {Box} from "@mui/material";

const Reporting = () => {
    return (
        <div id="main_content">
            <div className="main-title">
                <p className="font-weight-bold">REPORTING</p>
            </div>
            <Box display="flex">
                <Box height="250px" m="-20px 10px 0 -5px" bgcolor="#ffffff" borderRadius="20px" flex="50%">
                    <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
                </Box>
                <Box height="250px" m="-20px 0 0 0" bgcolor="#ffffff" borderRadius="20px" flex="50%">
                    <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
                </Box>
            </Box>
            <Box height="350px" m="10px 0 0 0" bgcolor="#ffffff" borderRadius="20px">
                <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
            </Box>
        </div>
    );
}

export default Reporting;