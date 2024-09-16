import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Details from "../components/Details";
import Calendar from "../components/CalendarSmall";

import "../styles/mobile.css";
export default function Small() {
  return (
    <div className="Mobile">
      <Header />
      <Divider />
      <Calendar />
      <Details />
      <Footer />
    </div>
  );
}
