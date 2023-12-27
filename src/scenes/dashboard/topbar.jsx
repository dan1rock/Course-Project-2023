const Topbar = () => {
    return (
        <header className="topbar">
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
        </header>
    );
}

export default Topbar;