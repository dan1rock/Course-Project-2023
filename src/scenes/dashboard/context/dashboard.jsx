import LineChart from "../../../components/lineChart";
import { mockLineData } from "../../../data/mockData";
import { Box } from "@mui/material";

const Dashboard = () => {
    return (
        <div id="main_content">
            <div className="main-title">
                <p className="font-weight-bold">DASHBOARD</p>
            </div>
            <Box height="250px" m="-20px 0 0 0" bgcolor="#ffffff" borderRadius="20px">
                <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
            </Box>
        </div>
    );
}

export default Dashboard;