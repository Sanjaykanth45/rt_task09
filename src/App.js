import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app-container d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
