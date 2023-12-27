import Sidebar from "./scenes/dashboard/sidebar";
import Topbar from "./scenes/dashboard/topbar";

const App = () => {
  return (
    <div className="app">
      <div className="grid-container">
        <Topbar/>
        <Sidebar/>

        <main className="main-container">
          <div id="main_content">
            <div className="main-title">
              <p className="font-weight-bold">DASHBOARD</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
