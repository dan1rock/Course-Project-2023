import {useContext} from "react";
import {ColorModeContext, palette} from "../theme";
import {Box} from "@mui/material";

const StatItem = ({icon, name, value, iconColor}) => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

    return (
        <Box
            width="25%"
            id="statItem"
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

export default StatItem;
