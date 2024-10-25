import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Loading from "./Components/Loading/Loading";
import Login from "./Components/Login/Login";
import Vendor from './Components/Vendor/Vendor';
import BarcodePage from './Components/Barcode/BarcodePage';
import ScannerPage from './Components/ScannerPage';
import ScanSuccessPage from './Components/ScanSuccessPage';






const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/barcode" element={<BarcodePage />} />
        <Route path="/barcode-scanner" element={<ScannerPage />} />{" "}
        {/* Route for scanning */}
        <Route path="/scan-success" element={<ScanSuccessPage />} />
      </Routes>
    </>
  );
}

export default App
