import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Loading from "./Components/Loading/Loading";
import Login from "./Components/Login/Login";
import Vendor from './Components/Vendor/Vendor';
import BarcodePage from './Components/Barcode/BarcodePage';






const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/barcode" element={<BarcodePage />} />
      </Routes>
    </>
  );
}

export default App
