import {Box} from "@mui/material"
import {ColorModeContext, palette} from "../../theme";
import {useContext} from "react";

const Topbar = () => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

    return (
        <Box
            className="topbar"
            bgcolor={colors.itemContainer}
            color={colors.default}
        >
            <div className="menu-icon">
                <span className="material-icons-outlined">menu</span>
            </div>
            <div className="header-left">
                <span className="material-icons-outlined">search</span>
            </div>
            <div className="header-right">
                <span className="material-icons-outlined">notifications</span>
                <span className="material-icons-outlined">email</span>
                <span className="material-icons-outlined">account_circle</span>
            </div>
        </Box>
    );
}

export default Topbar;