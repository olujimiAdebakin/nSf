import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Vendor.css";
import vendor_img from "../../assets/gateway.png";
import oval from "../../assets/Oval.png";
import { Link } from "react-router-dom";

const Vendor = () => {
  const [vendorId, setVendorId] = useState("");
  const [mealsServed, setMealsServed] = useState(0);
  const [allocatedMeals, setAllocatedMeals] = useState(500);

  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    const randomId = Math.floor(1000000 + Math.random() * 9000000);
    setVendorId(randomId);
  }, []);

  
  useEffect(() => {
    if (location.state?.mealsServed && location.state?.allocatedMeals) {
      setMealsServed(location.state.mealsServed);
      setAllocatedMeals(location.state.allocatedMeals);
    }
  }, [location.state]);

  
  const handleClockIn = () => {
    navigate("/barcode", { state: { mealsServed, allocatedMeals, vendorId } });
  };

  const handleOut = () => {
    navigate("/")
  }

  return (
    <div className="vendor">
      <div className="vendor-top">
        <div className="vendor-top-flex">
          <div className="vendor-top-left">
            <img src={vendor_img} alt="Vendor" />
          </div>
          <div className="vendor-top-right">
            <h3>
              ID: <span>{vendorId}</span>
            </h3>
          </div>
        </div>
        <div className="vendor-detail">
          <img src={oval} alt="Profile" />
          <h3>Mrs. Fasakin Adebimpe</h3>
        </div>
        <div className="vendor-assgn">
          <span>Caterer A</span>
          <span>Assigned to Hostel A</span>
        </div>
        <div className="meal-view">
          <h3>Today's Meals Overview</h3>
        </div>
        <div className="meal-num">
          <div className="meal-num-left">
            <h3>{mealsServed}</h3>
            <span>Meals Served Today</span>
          </div>
          <div className="meal-num-right">
            <h3>{allocatedMeals}</h3>
            <span>Allocated Meals</span>
          </div>
        </div>
        <div className="vendor-profile">
          <Link to="/profile">View Profile</Link>
        </div>
      </div>
      <div className="vendor-down">
        <div className="vendor-box">
          <div className="vendor-state">
            <h3 onClick={handleClockIn}>Clock In</h3>
            <h3>Viewed Assigned Participant</h3>
            <h3>View History</h3>
          </div>
          <div className="logout">
            <h3 onClick={handleOut}>Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
