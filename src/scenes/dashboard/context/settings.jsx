import { Switch, Box } from "@mui/material";
import { useContext } from "react";
import { palette, ColorModeContext } from "../../../theme";

const Settings = () => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

    const handleModeChange = () => {
        colorMode.toggleColorMode();
    };

    return (
        <div id="main_content">
            <div className="main-title">
                <p className="font-weight-bold">SETTINGS</p>
            </div>
            <Box className="item-container" height="auto" display="flex" bgcolor={colors.itemContainer}>
                <Box marginY="auto" marginLeft="50px" fontWeight="600">Dark Mode</Box>
                <Box marginLeft="40px">
                    <Switch
                        defaultChecked={colorMode.getMode() === "dark"}
                        onChange={handleModeChange}
                    />
                </Box>
            </Box>
        </div>
    );
}

export default Settings;