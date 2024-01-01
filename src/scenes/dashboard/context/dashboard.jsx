import LineChart from "../../../components/lineChart";
import PieChart from "../../../components/pieChart";
import BarChart from "../../../components/barChart";
import { mockLineData, mockBarData, mockPieData } from "../../../data/mockData";
import { Box } from "@mui/material";
import {useContext} from "react";
import {ColorModeContext, palette} from "../../../theme";

const StatItem = ({icon, name, value, iconColor}) => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

    return (
        <Box
            width="25%"
        >
            <Box
                className="item-container"
                bgcolor={colors.itemContainer}
                color={colors.default}
                height="100px"
                width="90%"
                marginX="auto"
                display="flex"
            >
                <Box width="35%" margin="auto" marginTop="30px">
                    <Box className="material-icons-outlined"
                         color={iconColor}
                         sx={{
                             scale: "200%",
                             paddingLeft: "35px"
                    }}>{icon}</Box>
                </Box>
                <Box width="65%" margin="auto">
                    <Box fontSize="36px" fontWeight="700">{value}</Box>
                    <Box fontSize="18px">{name}</Box>
                </Box>
            </Box>
        </Box>
    )
}

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