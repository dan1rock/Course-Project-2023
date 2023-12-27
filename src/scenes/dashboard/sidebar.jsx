const Sidebar = () => {
    return (<aside id="sidebar">
        <div className="sidebar-title">
            <div className="sidebar-brand">
                <span className="material-icons-outlined">apartment</span> Company Name
            </div>
            <span className="material-icons-outlined">close</span>
        </div>

        <ul className="sidebar-list">
            <li className="sidebar-list-item">
                <span className="material-icons-outlined">dashboard</span> Dashboard
            </li>
            <li className="sidebar-list-item">
                <span className="material-icons-outlined">poll</span> Reporting
            </li>
            <li className="sidebar-list-item">
                <span className="material-icons-outlined">person</span> Users
            </li>
            <li className="sidebar-list-item">
                <span className="material-icons-outlined">shield</span> Admins
            </li>
            <li className="sidebar-list-item">
                <span className="material-icons-outlined">settings</span> Settings
            </li>
        </ul>
    </aside>);
}

export default Sidebar;