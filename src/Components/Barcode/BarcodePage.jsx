import React, { useEffect } from "react";
import "./Barcode.css";
import JsBarcode from "jsbarcode";
import arrow from "../../assets/Vector.png";
import { useLocation, useNavigate } from "react-router-dom";

const BarcodePage = ({ participantId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mealsServed, allocatedMeals, vendorId } = location.state || {};
  const barcodeData = "OG-123-45678";

  useEffect(() => {
    JsBarcode("#barcode", "OG-123-45678", participantId, {
      format: "CODE128",
      lineColor: "#000",
      width: 3,
      height: 200,
      displayValue: true,
    });

    const timeout = setTimeout(() => {
      navigate("/barcode-scanner", {
        state: { mealsServed, allocatedMeals, vendorId },
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [
    navigate,
    mealsServed,
    allocatedMeals,
    vendorId,
    participantId,
    barcodeData,
  ]);

  return (
    <div className="barcode">
      <div className="barcode-header">
        <h3>Food Service Check-In</h3>
        <p>
          Please scan the barcode on the participant’s ID or mobile device to
          confirm that the meal is served.
        </p>
      </div>
      <div className="barcode-bottom">
        <svg id="barcode"></svg>
        <button>Scan QR Code</button>
      </div>
    </div>
  );
};

export default BarcodePage;
