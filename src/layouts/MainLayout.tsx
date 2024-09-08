import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../App.css';

const MainLayout: React.FC = () => {
  return (
    <>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/posts"
        >
          Posts
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;