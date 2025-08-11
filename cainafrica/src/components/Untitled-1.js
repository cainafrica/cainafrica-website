import React from "react";
import { TopImage, TextWrapper, TopParaText } from "./StyledComponents.js";
import Toolbar from "./Toolbar/Toolbar.js";
import TeamCover from "../images/Our Team/TeamBanner.jpg";


export default function MonthlyDonor(props) {
  return (
    <div>
      <TopImage style={{ backgroundImage: `url(${TeamCover})` }}>
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          <TopParaText>
            “REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO
            ONO
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <div
        id="mc_embed_shell"
        style={{
          background: "#fff",
          clear: "left",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "14px",
          width: "600px",
          margin: "2rem auto",
        }}
      >
        <div id="mc_embed_signup">
          <form
            action="https://cainafrica.us6.list-manage.com/subscribe/post?u=47db4d6cc70082fdd60e1ac73&id=a7f3d31cb6&f_id=006512e2f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <h2>CAIN Africa Monthly Donors Sign-Up Form</h2>

              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>

              {/* Email */}
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
              </div>

              {/* Last Name */}
              <div className="mc-field-group">
                <label htmlFor="mce-MMERGE10">Last Name</label>
                <input type="text" name="MMERGE10" className="text" id="mce-MMERGE10" />
              </div>

              {/* First Name */}
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">
                  First Name <span className="asterisk">*</span>
                </label>
                <input type="text" name="FNAME" className="required text" id="mce-FNAME" required />
              </div>

              {/* Monthly Donation Amount */}
              <div className="mc-field-group">
                <label htmlFor="mce-MMERGE24">
                  Monthly Donation Amount <span className="asterisk">*</span>
                </label>
                <input type="number" name="MMERGE24" className="required number" id="mce-MMERGE24" required />
              </div>

              {/* Phone Number */}
              <div className="mc-field-group">
                <label htmlFor="mce-PHONE">Phone Number</label>
                <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" />
              </div>

              {/* Professional Image URL */}
              <div className="mc-field-group">
                <label htmlFor="mce-MMERGE23">Professional Image</label>
                <input type="url" name="MMERGE23" className="imageurl" id="mce-MMERGE23" />
              </div>

              {/* Gender */}
              <div className="mc-field-group input-group">
                <strong>Gender</strong>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  <li>
                    <input type="radio" name="MMERGE25" id="mce-MMERGE250" value="Male" />
                    <label htmlFor="mce-MMERGE250">Male</label>
                  </li>
                  <li>
                    <input type="radio" name="MMERGE25" id="mce-MMERGE251" value="Female" />
                    <label htmlFor="mce-MMERGE251">Female</label>
                  </li>
                  <li>
                    <input type="radio" name="MMERGE25" id="mce-MMERGE252" value="Prefer not to say" />
                    <label htmlFor="mce-MMERGE252">Prefer not to say</label>
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div className="mc-field-group">
                <label htmlFor="mce-MMERGE5">
                  Location <span className="asterisk">*</span>
                </label>
                <input type="text" name="MMERGE5" className="required text" id="mce-MMERGE5" required />
                <span id="mce-MMERGE5-HELPERTEXT" className="helper_text">
                  Include city, state, and country
                </span>
              </div>

              {/* Organization Name */}
              <div className="mc-field-group">
                <label htmlFor="mce-MMERGE2">
                  Organization Name <span className="asterisk">*</span>
                </label>
                <input type="text" name="MMERGE2" className="required text" id="mce-MMERGE2" required />
                <span id="mce-MMERGE2-HELPERTEXT" className="helper_text">Institution or Organization</span>
              </div>

              {/* Public Recognition */}
              <div className="mc-field-group input-group">
                <strong>
                  Would you love to be recognized publicly? <span className="asterisk">*</span>
                </strong>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  <li>
                    <input type="radio" name="MMERGE26" id="mce-MMERGE260" value="Yes" />
                    <label htmlFor="mce-MMERGE260">Yes</label>
                  </li>
                  <li>
                    <input type="radio" name="MMERGE26" id="mce-MMERGE261" value="No" />
                    <label htmlFor="mce-MMERGE261">No</label>
                  </li>
                </ul>
                <span id="mce-MMERGE26-HELPERTEXT" className="helper_text">
                  (You can mention me in social media posts and newsletters)
                </span>
              </div>

              {/* Hidden tag (Monthly Donors) */}
              <input type="hidden" name="tags" value="3416503" />

              {/* Responses */}
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
              </div>

              {/* Honeypot */}
              <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                <input type="text" name="b_47db4d6cc70082fdd60e1ac73_a7f3d31cb6" tabIndex={-1} defaultValue="" />
              </div>

              <div className="clear">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
