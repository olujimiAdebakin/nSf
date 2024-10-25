import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QrScanner from "react-qr-barcode-scanner"; // Import barcode scanner
import "./ScannerPage.css";

const ScannerPage = () => {
  const [scanning, setScanning] = useState(true);
  const [scanResult, setScanResult] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { mealsServed, allocatedMeals, vendorId } = location.state || {};

 const handleScan = (result) => {
   if (result) {
     console.log(result);
     setScanResult(result.text || result.data);
     setScanning(false);
     validateParticipantId(result.text);

     // Capture current date and time
     const currentDate = new Date();
     const formattedDate = currentDate.toLocaleDateString();
     const formattedTime = currentDate.toLocaleTimeString();
     const hours = currentDate.getHours();
     
     const mealType =
       hours < 12 ? "Breakfast" : hours < 16 ? "Lunch" : "Dinner";

     const newMealsServed = mealsServed + 1;
     const newAllocatedMeals = allocatedMeals - 1;

     setTimeout(() => {
       navigate("/scan-success", {
         state: {
           name: "Mrs. Fasakin Adebimpe",
           id: vendorId,
           mealsServed: newMealsServed,
           allocatedMeals: newAllocatedMeals,
           scanDate: formattedDate,
           scanTime: formattedTime,
           mealType:mealType,
         },
       });
     }, 4000);
   }
 };


  const handleError = (err) => {
    console.error(err);
  };

     const validateParticipantId = (participantId) => {
       // Replace this with actual validation logic
       // For example, you might want to call an API to check if the ID exists
       const isValid = participantId === "expectedParticipantId"; // Dummy check
       if (isValid) {
         navigate("/scan-success", { state: { participantId } });
       } else {
         alert("Invalid ID. Please scan a valid participant ID.");
         setScanning(true); // Restart scanning if invalid
       }
     };

  return (
    <div className="barcode-scanner-container">
      <div className="barcode-header">
        <h3>Food Service Check-In</h3>
        <p>
          Please scan the barcode on the participant’s ID or mobile device to
          confirm that the meal is served.
        </p>
      </div>
      <h3>{scanning ? "Scanning..." : "Scan Successful"}</h3>
      <div className="scanner-box">
        {scanning && (
          <>
            {/* Scanner animation */}
            <div className="scanner-line"></div>
            <QrScanner
              onUpdate={handleScan}
              onError={handleError}
              delay={4000}
              style={{ width: "100%" }}
            />
          </>
        )}
      </div>
      <div className="scanner-btn">
        <button>Scan QR Code</button>
      </div>
    </div>
  );
};

export default ScannerPage;
