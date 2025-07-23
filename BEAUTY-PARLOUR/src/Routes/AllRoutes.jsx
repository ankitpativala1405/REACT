import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "../components/PAGES/Indexpage";
import BridalMain from "../components/PAGES/BridalMain";
import BookAppointmentMain from "../components/PAGES/BookAppointmentMain";
import ServiceDetailMain from "../components/PAGES/ServiceDetailMain";
import Offer from "../components/offer/Offer";

const AllRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/bridal" element={<BridalMain />} />
          <Route path="/bookappointment" element={<BookAppointmentMain />} />
          <Route path="/service" element={<ServiceDetailMain />}/>
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </div>
    </>
  );
};

export default AllRoutes;
