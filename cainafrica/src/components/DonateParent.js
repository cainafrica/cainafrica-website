import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import DonatePage from "./DonatePage.jsx";

// Existing assets (same paths your old file used)
import PayPal from "../images/PayPal.png";
import Benevity from "../images/Benevity.png";

// New hero photo – copy hero-students.jpg to src/images/Donate/
import HeroImage from "../images/Donate/hero-students.jpg";

const CIRCLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1MbmLO69WAdRKnz9oM1ZTevfA7wEdNK9IiLR-vqWFN-OnSA/viewform?usp=header";
const PAYPAL_URL =
  "https://www.paypal.com/donate?hosted_button_id=SGG2UVLMRTH56";
const BENEVITY_URL = "https://benevity.com";

const DonateParent = (props) => {
  // Every "give" action currently sends the donor to your PayPal donate button.
  // Swap this for your own checkout later; it receives { amountUsd, currency, recurring }.
  const handleDonate = () => {
    window.open(PAYPAL_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Black header band so the white CAIN logo is visible on this page */}
      <div style={{ background: "#000", position: "relative", zIndex: 10 }}>
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
      </div>
      {props.sideDrawer}

      <DonatePage
        heroImage={HeroImage}
        paypalLogo={PayPal}
        benevityLogo={Benevity}
        paypalUrl={PAYPAL_URL}
        benevityUrl={BENEVITY_URL}
        circleUrl={CIRCLE_FORM_URL}
        contactEmail="info@cainafrica.org"
        onDonate={handleDonate}
      />
    </div>
  );
};

export default DonateParent;
