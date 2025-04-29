import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/Sidebar.css";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="logo">
          <img src="#" alt="Ventixe logo" />
        </div>

        <nav className="nav-menu">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Dashboard
          </NavLink>
          <NavLink to="/bookings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Bookings
          </NavLink>
          <NavLink to="/invoices" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Invoices
          </NavLink>
          <NavLink to="/inbox" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Inbox
          </NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Calendar
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Events
          </NavLink>
          <NavLink to="/financials" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Financials
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Gallery
          </NavLink>
          <NavLink to="/feedback" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Feedback
          </NavLink>
        </nav>

        <div className="upgrade-box">
          <img src="/images/sidebar-images/Illustration.svg" alt="Illustration" className="upgrade-image" />
          <p>Experience enhanced features and a smoother interface with the latest version of Ventixe</p>
          <button>Try New Version</button>
        </div>
      </div>

      <div className="sidebar-bottom">
        <a href="#" className="signout-btn">
           Sign Out
        </a>
      </div>
    </aside>
  );
};

export default Aside;