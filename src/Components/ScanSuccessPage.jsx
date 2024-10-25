import React from "react";
import "./ScanSuccess.css"
import { useNavigate, useLocation } from "react-router-dom";
import success from "../assets/image.png"

const ScanSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    mealsServed,
    allocatedMeals,
    name,
    id,
    scanDate,
    scanTime,
    mealType,
  } = location.state || {};


  const handleBackToVendor = () => {
    navigate("/vendor", {
      state: { mealsServed, allocatedMeals, vendorId: id, },
    });
  };

  return (
    <div className="success-page">
      <div className="success-header">
        <h3>Food Service Check-In</h3>
      </div>
      <div className="success-img">
        <img src={success} alt="" />
        <h2>Clock-In Successful!</h2>
      </div>
      <div className="success-detail">
        {/* <p>Vendor Name: {name}</p>
        <p>Vendor ID: {id}</p> */}
        <p>Meals Served Today: {mealsServed}</p>
        <p>Allocated Meals Left: {allocatedMeals}</p>
        {/* <p>Meal Type: {mealType}</p>
        <p>Scan Date: {scanDate}</p>
        <p>Scan Time: {scanTime}</p> */}
        <div className="vendor-feel">
          <p>
            Successfully clocked in for {name} {id} for {mealType} on {scanDate}       

            ,{scanTime}
            
            2024.
          </p>
        </div>
      </div>
      <div className="bttn">
        <button onClick={handleBackToVendor}>Home</button>
      </div>
    </div>
  );
};

export default ScanSuccessPage;
