import Sidebar from "./scenes/dashboard/sidebar";
import Topbar from "./scenes/dashboard/topbar";
import Dashboard from "./scenes/dashboard/context/dashboard";
import Reporting from "./scenes/dashboard/context/reporting";
import Users from "./scenes/dashboard/context/users";
import Admins from "./scenes/dashboard/context/admins";
import Settings from "./scenes/dashboard/context/settings";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
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
                        <Route path="/settings" element={<Settings/>} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
