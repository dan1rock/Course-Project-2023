import LineChart from "../../../components/lineChart";
import PieChart from "../../../components/pieChart";
import BarChart from "../../../components/barChart";
import StatItem from "../../../components/statItem";
import { mockLineData, mockBarData, mockPieData } from "../../../data/mockData";
import { Box } from "@mui/material";
import {useContext} from "react";
import {ColorModeContext, palette} from "../../../theme";



const Dashboard = () => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

    return (
        <div id="dashboard">
            <div className="main-title">
                <p className="font-weight-bold">DASHBOARD</p>
            </div>
            <Box display="flex" marginBottom="50px">
                <StatItem
                    icon="publish"
                    name="stat"
                    value="23,467"
                    iconColor="#61cdbb"
                />
                <StatItem
                    icon="saved_search"
                    name="stat"
                    value="23,467"
                    iconColor="#f47560"
                />
                <StatItem
                    icon="clear_all"
                    name="stat"
                    value="23,467"
                    iconColor="#f1e15b"
                />
                <StatItem
                    icon="install_desktop"
                    name="stat"
                    value="23,467"
                    iconColor="#e8c1a0"
                />
            </Box>
            <Box className="item-container" bgcolor={colors.itemContainer}>
                <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
            </Box>
            <Box
                display="flex"
                marginTop="40px"
            >
                <Box width="33%">
                    <Box className="item-container" bgcolor={colors.itemContainer} width="95%" marginX="auto">
                        <BarChart data={mockBarData} bottomLegend="Data1" sideLegend="Data2"/>
                    </Box>
                </Box>
                <Box width="33%">
                    <Box className="item-container" bgcolor={colors.itemContainer} width="95%" marginX="auto">
                        <LineChart data={mockLineData} bottomLegend="Data1" sideLegend="Data2"/>
                    </Box>
                </Box>
                <Box width="33%">
                    <Box className="item-container" bgcolor={colors.itemContainer} width="95%" marginX="auto">
                        <PieChart data={mockPieData}/>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Dashboard;