import React, { useEffect } from "react";
import "./Barcode.css"
import JsBarcode from "jsbarcode";
import { useNavigate } from "react-router-dom";

const BarcodePage = () => {
  const navigate = useNavigate();


  useEffect(() => {
    JsBarcode("#barcode", "123456789012", {
      format: "CODE128",
      lineColor: "#000",
      width: 3,
      height: 200,
      displayValue: true,
    });
  }, []);

  const handleBack = () => {
    navigate("/vendor");
  };

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
        <button onClick={handleBack}>Go Back</button>
      </div>
    </div>
  );
};

export default BarcodePage;
