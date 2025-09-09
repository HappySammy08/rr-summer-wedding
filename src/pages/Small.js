import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Details from "../components/Details";
import Calendar from "../components/CalendarSmall";

import "../styles/mobile.css";
export default function Small() {
  return (
    <div className="Mobile">
      <Header />
      <Calendar />
      <Details />
      <Footer />
    </div>
  );
}
