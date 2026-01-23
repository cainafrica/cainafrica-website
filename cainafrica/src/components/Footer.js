import React from "react";
import styled from "styled-components";
import CainWhiteLogo from "../images/CainWhiteLogo.png";
import { InlineFollowButtons } from "sharethis-reactjs";
import { Link } from "react-router-dom";

const FooterBox = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color: #202020;
  // border: 1px solid black;
  @media (max-width: 768px) {
    height: 30rem;
    flex-direction: column;
  }
`;

const InnerFooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 11rem;
  width: 100%;
  background-color: #202020;
  // border: 1px solid black;
  @media (max-width: 768px) {
    height: 24rem;
    flex-direction: column;
  }
`;

const MailBox = styled.div`
  width: 20rem;
  text-align: left;
  margin-left: 2rem;
  color: white;
  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
  }
`;

const LogoBox = styled.div`
  //border: 1px solid white;
  width: 50rem;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const LocationBox = styled.div`
  width: 20rem;
  text-align: right;
  margin-right: 2rem;
  color: white;
  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 12rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
// const OrgType = styled.p`
//     @media (max-width: 768px) {
//         margin: auto;
//         width: 90%
//     }
// `

const Footer = () => {
  return (
    <FooterBox>
      <InnerFooterBox>
        <MailBox>
          <h2>CONTACT US</h2>
          <p style={{ marginTop: 0, marginBottom: "8px" }}>
            info@cainafrica.org
          </p>
          <p style={{ marginTop: 0, marginBottom: "8px" }}>+2347049879535</p>
          <div
            className="social-icons"
            style={{ display: "flex", alignItems: "center" }}
          >
            <InlineFollowButtons //From sharethis-reactjs Library
              config={{
                action: "Follow us:", // call to action (STRING)
                action_enable: false, // show/hide call to action (true, false)
                action_pos: "bottom", // position of call to action (left, top, right)
                color: "social", // set the color of buttons (social, white)
                enabled: true, // show/hide buttons (true, false)
                // alignment: "",
                networks: [
                  // which networks to include (see FOLLOW NETWORKS)
                  "twitter",
                  "facebook",
                  "instagram",
                  "linkedin",
                  "youtube",
                  "vk",
                ],
                padding: 8, // padding within buttons (INTEGER)
                profiles: {
                  // social profile links for buttons
                  twitter: "cainafrica",
                  facebook: "cainafrica?_rdc=1&_rdr",
                  instagram: "cainafrica/",
                  linkedin: "company/catering-to-africans-in-need/",
                  youtube: "channel/UCFI55OCmrLlN28M5wDPBNxQ",
                  vk: "placeholder",
                },
                radius: 15, // the corner radius on each button (INTEGER)
                size: 32, // the size of each button (INTEGER)
                spacing: 5, // the spacing between buttons (INTEGER)
              }}
            />
            <a href="https://api.whatsapp.com/send?phone=2347049879535">
              <img
                src="https://img.icons8.com/color/35/000000/whatsapp--v1.png"
                style={{ width: "28px", height: "28px", objectFit: "contain", cursor: "pointer",}}
                alt="whatsapp-icon"
              />
            </a>
             <a href="https://www.tiktok.com/@cain_africa" target="_blank" rel="noopener noreferrer">
              <img
                  src="https://img.icons8.com/color-glass/40/tiktok.png"
                style={{ width: "28px", height: "28px", objectFit: "contain", cursor: "pointer", marginLeft: "5px", }}
                className="social-icon"
                alt="tiktok-icon"
              />
            </a>
            <a href="https://www.twitter.com/CainAfrica" target="_blank" rel="noopener noreferrer">
              <img
                  src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000"
                style={{ width: "28px", height: "28px", objectFit: "contain", cursor: "pointer", marginLeft: "5px", }}
                className="social-icon"
                alt="X-icon"
              />
            </a>
            <a href="https://www.instagram.com/cainafrica/" target="_blank" rel="noopener noreferrer">
              <img
                  src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"
                style={{ width: "28px", height: "28px", objectFit: "contain", cursor: "pointer", marginLeft: "5px", }}
                className="social-icon"
                alt="instagram-icon"
              />
            </a>
            <a href="https://www.facebook.com/share/1akP6UumZr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <img
                  src="https://img.icons8.com/?size=100&id=j3vz80f-NDya&format=png&color=000000"
                style={{ width: "28px", height: "28px", objectFit: "contain", cursor: "pointer", marginLeft: "5px", }}
                className="social-icon"
                alt="facebook-icon"
              />
            </a>
            <a href="https://www.linkedin.com/company/catering-to-africans-in-need/" target="_blank" rel="noopener noreferrer">
              <img
                  src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                style={{ width: "28px", height: "28px", objectFit: "contain", cursor: "pointer", marginLeft: "5px", }}
                className="social-icon"
                alt="linkedin-icon"
              />
            </a>
          </div>
          <p style={{ marginBottom: 0 }}>
            Subscribe to our{" "}
            <strong>
              <Link to="/newsletter" style={{ textDecoration: "none" }}>
              Newsletter here
              </Link>
            </strong>
          </p>
        </MailBox>

        <LogoBox
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo src={CainWhiteLogo} alt="Cain logo" />
          <strong>
            CAIN (Catering to Africans In Need) is a 501(c)(3) non profit
            organization registered in the <br /> United States of America and
            Nigeria
          </strong>
        </LogoBox>

        <LocationBox>
          <h2>LOCATION</h2>
          <p>
            Cain Educational Resource Center <br />
            No. 15 Remilekun Shodeke Street <br />
            Off Igando Road <br />
            Ikotun, Lagos <br />
            Nigeria
          </p>
        </LocationBox>
      </InnerFooterBox>
    </FooterBox>
  );
};

export default Footer;
