import LineChart from "../../../components/lineChart";
import { mockLineData } from "../../../data/mockData";
import { Box } from "@mui/material";
import {useContext} from "react";
import {ColorModeContext, palette} from "../../../theme";

const Dashboard = () => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

    return (
        <div id="main_content">
            <div className="main-title">
                <p className="font-weight-bold">DASHBOARD</p>
            </div>
            <Box className="item-container" bgcolor={colors.itemContainer}>
                <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
            </Box>
        </div>
    );
}

export default Dashboard;