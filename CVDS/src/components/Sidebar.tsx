import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar() {
  const menuItems = [
    { path: '/home', label: '1. PERSONNEL FILE' },
    { path: '/about', label: '2. DOSSIER / INTEL' },
    { path: '/contacts', label: '3. COMMS / NETWORK' },
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2 className="brand-text">UMB. OS v2.1.4</h2>
        <div className="separator"></div>
      </div>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
            >
              <span className="cursor">▶</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <div className="separator-bottom"></div>
        <div className="status-indicator">
          <span className="dot pulse"></span> SYSTEM: ONLINE
        </div>
      </div>
    </nav>
  );
}
