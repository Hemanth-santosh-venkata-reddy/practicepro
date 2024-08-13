import React from "react";
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
  const handlelogout = () => {
    // localStorage.clear();
    // navigate('/signupform')
  };

  return (
    <div className="dashboard">
      <div className="d-flex align-items-center justify-content-end">
        <button onClick={handlelogout} className="me-3 mt-3">
          Logout
        </button>
      </div>
      <h1>Dashboard</h1>
    </div>
  );
};
export default Dashboard;
