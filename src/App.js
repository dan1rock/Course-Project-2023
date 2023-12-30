import {useMode, ColorModeContext} from "./theme";
import Sidebar from "./scenes/dashboard/sidebar";
import Topbar from "./scenes/dashboard/topbar";
import Dashboard from "./scenes/dashboard/context/dashboard";
import Reporting from "./scenes/dashboard/context/reporting";
import Users from "./scenes/dashboard/context/users";
import Admins from "./scenes/dashboard/context/admins";
import Settings from "./scenes/dashboard/context/settings";
import FAQ from "./scenes/dashboard/context/faq";
import {Route, Routes} from "react-router-dom";

const App = () => {
    const colorMode = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
                <div className="app">
                    <div className="grid-container">
                        <Topbar/>
                        <Sidebar/>

                        <main className="main-container">
                            <Routes>
                                <Route path="/" element={<Dashboard/>} />
                                <Route path="/reporting" element={<Reporting/>} />
                                <Route path="/users" element={<Users/>} />
                                <Route path="/admins" element={<Admins/>} />
                                <Route path="/faq" element={<FAQ/>} />
                                <Route path="/settings" element={<Settings/>} />
                            </Routes>
                        </main>
                    </div>
                </div>
        </ColorModeContext.Provider>
    );
}

export default App;
