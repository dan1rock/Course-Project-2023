import { Link } from "react-router-dom";

const Item = ({ icon, text, to }) => (
    <Link to={to} className="link">
        <li className="sidebar-list-item">
            <span className="material-icons-outlined">{icon}</span> {text}
        </li>
    </Link>
    );

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <span className="material-icons-outlined">apartment</span> Company Name
                </div>
                <span className="material-icons-outlined">close</span>
            </div>
            <ul className="sidebar-list">
                <Item
                    icon="dashboard"
                    text="Dashboard"
                    to="/"
                />
                <Item
                    icon="poll"
                    text="Reporting"
                    to="/reporting"
                />
                <Item
                    icon="person"
                    text="Users"
                    to="/users"
                />
                <Item
                    icon="shield"
                    text="Admins"
                    to="/admins"
                />
                <Item
                    icon="settings"
                    text="Settings"
                    to="/settings"
                />
            </ul>
        </aside>
    );
}

export default Sidebar;