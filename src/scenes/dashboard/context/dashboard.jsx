import LineChart from "../../../components/lineChart";
import { mockLineData } from "../../../data/mockData";
import { Box } from "@mui/material";

const Dashboard = () => {
    return (
        <div id="main_content">
            <div className="main-title">
                <p className="font-weight-bold">DASHBOARD</p>
            </div>
            <Box className="item-container">
                <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
            </Box>
        </div>
    );
}

export default Dashboard;