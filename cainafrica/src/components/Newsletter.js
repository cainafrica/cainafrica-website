// src/Newsletter.jsx
import React from "react";
import styled from "styled-components";
import { TopImage, TextWrapper, TopParaText } from "./StyledComponents.js";
import Toolbar from "./Toolbar/Toolbar.js";
import TeamCover from "../images/Our Team/TeamBanner.jpg";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2rem auto;
`;

export default function Newsletter(props) {
  return (
    <div>
      <TopImage style={{ backgroundImage: `url(${TeamCover})` }}>
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          <TopParaText>Subscribe to Our Newsletter</TopParaText>
        </TextWrapper>
      </TopImage>

      <FormWrapper>
        {/* Form below is taken directly from your embed code — field names/ids preserved */}
        <div id="mc_embed_shell">
          <div id="mc_embed_signup">
            <form
              action="https://cainafrica.us6.list-manage.com/subscribe/post?u=47db4d6cc70082fdd60e1ac73&id=a7f3d31cb6&f_id=006412e2f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe to our Newsletter</h2>

                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>

                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                  />
                </div>

                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">
                    First Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="FNAME"
                    className="required text"
                    id="mce-FNAME"
                    required
                  />
                </div>

                <div className="mc-field-group input-group">
                  <strong>
                    Send me updates <span className="asterisk">*</span>
                  </strong>
                  <ul>
                    <li>
                      <input
                        type="radio"
                        name="MMERGE27"
                        id="mce-MMERGE270"
                        value="Yes"
                      />
                      <label htmlFor="mce-MMERGE270">Yes</label>
                    </li>
                  </ul>
                </div>

                {/*
                    Find the value of the hidden tag for the CAIN Volunteers tag on MailChimp
                */}
                <input type="hidden" name="tags" value="" />

                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                </div>

                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input
                    type="text"
                    name="b_47db4d6cc70082fdd60e1ac73_a7f3d31cb6"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>

                <div className="clear">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
}
