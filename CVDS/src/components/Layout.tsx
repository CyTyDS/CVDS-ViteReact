import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import './Layout.css';

export function Layout() {
  return (
    <div className="app-layout">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <main className="content-container fade-in">
        <Outlet />
      </main>
    </div>
  );
}
