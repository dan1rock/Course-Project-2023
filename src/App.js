import {useMode, ColorModeContext, palette} from "./theme";
import Sidebar from "./scenes/dashboard/sidebar";
import Topbar from "./scenes/dashboard/topbar";
import Dashboard from "./scenes/dashboard/context/dashboard";
import Reporting from "./scenes/dashboard/context/reporting";
import Users from "./scenes/dashboard/context/users";
import Admins from "./scenes/dashboard/context/admins";
import Settings from "./scenes/dashboard/context/settings";
import FAQ from "./scenes/dashboard/context/faq";
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material"

const App = () => {
    const colorMode = useMode();
    const colors = palette(colorMode.getMode());

    return (
        <ColorModeContext.Provider value={colorMode}>
                <div className="app">
                    <div className="grid-container">
                        <Topbar/>
                        <Sidebar/>

                        <Box className="main-container" bgcolor={colors.defaultBackground}>
                            <Routes>
                                <Route path="/" element={<Dashboard/>} />
                                <Route path="/reporting" element={<Reporting/>} />
                                <Route path="/users" element={<Users/>} />
                                <Route path="/admins" element={<Admins/>} />
                                <Route path="/faq" element={<FAQ/>} />
                                <Route path="/settings" element={<Settings/>} />
                            </Routes>
                        </Box>
                    </div>
                </div>
        </ColorModeContext.Provider>
    );
}

export default App;
