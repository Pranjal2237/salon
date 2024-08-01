import React, { useState } from "react";
import "./style.css";
import { bookingBanner } from "../../assets";
import Appointment from "../../components/appointment";
import Information from "../../components/information";
import Confirmation from "../../components/confirmation";

const Bookings = () => {
  const [active, setActive] = useState("Your Info");
  return (
    <div>
      <div className="booking-banner">
        <div className="banner-content">
          <h1>BOOK ONLINE</h1>
        </div>
      </div>
      <ul className="inline-wrapper padding-block options-list">
        {["Choose Appointment", "Your Info", "Confirmation"].map((option) => (
          <li className={active == option ? "active-option option" : "option"}>
            {option}
          </li>
        ))}
      </ul>
      <div className="inline-wrapper padding-block">
        {active == "Choose Appointment" && <Appointment />}
        {active == "Your Info" && <Information />}
        {active=="Confirmation" && <Confirmation />}
      </div>
      <div className="inline-wrapper padding-block reminder">
        <h1>REMINDER</h1>
        <ul>
          <li>Deposit</li>
          <p>
            A deposit is required to secure your booking. This amount will be
            redeemed/ deducted out of individual service charge on the day
            (excluding processing fees) but is inapplicable to no-shows and
            cancellations/rescheduling done within 48 hours of appointment time.
          </p>
          <li>Cancellations/Rescheduling</li>
          <p>
            Cancellations and rescheduling are only accepted up to 48 hours
            prior to the scheduled appointment time. Any cancellations or
            rescheduling done within 48 hours will result in the deposit being
            forfeited and an additional deposit will be charged should you wish
            to reschedule.
          </p>
          <li>No-shows</li>
          <p>The deposit will not be refunded for no-shows as well.</p>
        </ul>
      </div>
    </div>
  );
};

export default Bookings;
