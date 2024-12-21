import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar bg-primary text-white vh-100">
      <div className="logo py-3 px-4">
        <h4 >Skydash</h4>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item px-4 py-2">
          <a className="nav-link text-white active" href="#">
            <i className="bi bi-grid-fill me-2"></i> Dashboard
          </a>
        </li>
        <li className="nav-item px-4 py-2">
          <a className="nav-link text-white" href="#">
            <i className="bi bi-widgets me-2"></i> Widgets
          </a>
        </li>
        <li className="nav-item px-4 py-2">
          <a className="nav-link text-white" href="#">
            <i className="bi bi-ui-checks-grid me-2"></i> UI Elements
          </a>
        </li>
        <li className="nav-item px-4 py-2">
          <a className="nav-link text-white" href="#">
            <i className="bi bi-ui-radios-grid me-2"></i> Advanced UI
          </a>
        </li>
        <li className="nav-item px-4 py-2">
          <a className="nav-link text-white" href="#">
            <i className="bi bi-file-earmark-text me-2"></i> Form Elements
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
