import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";


const Dashboard = () => {
  return (
    <div className="dashboard-container p-4">
      {/* Welcome Section */}
      <div className="welcome-section p-4 bg-white rounded shadow-sm">
        <h3>Welcome Sanjay Kanth</h3>
        <p>
          All systems are running smoothly! You have{" "}
          <a href="#" className="text-primary">
            3 unread alerts!
          </a>
        </p>
      </div>

      {/* Dashboard Content */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="p-4 bg-light rounded shadow-sm">
            <img
              src={"https://treaktravel.mdayurvediccollege.in/assets/images/dashboard/people.svg"}
              alt="family trip"
              className="img-fluid rounded"
            />
            <div className="weather-info mt-3">
              <h4>
              <FontAwesomeIcon icon={faSun} />31° C </h4>
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div className="card p-3 bg-primary text-white">
                <h5>Today's Bookings</h5>
                <h2>4006</h2>
                <p>10.00% (30 days)</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-3 bg-secondary text-white">
                <h5>Total Bookings</h5>
                <h2>61344</h2>
                <p>22.00% (30 days)</p>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card p-3 bg-info text-white">
                <h5>Number of Meetings</h5>
                <h2>34040</h2>
                <p>2.00% (30 days)</p>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card p-3 bg-danger text-white">
                <h5>Number of Clients</h5>
                <h2>47033</h2>
                <p>0.22% (30 days)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
