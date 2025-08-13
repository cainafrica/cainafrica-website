import React from "react";
import styled from "styled-components";
import { TopImage, TextWrapper, TopParaText } from "./StyledComponents.js";
import Toolbar from "./Toolbar/Toolbar.js";
import TeamCover from "../images/Our Team/TeamBanner.jpg";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  margin: 2rem auto;
`;

export default function Volunteer(props) {
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

      <FormWrapper>
        <div id="mc_embed_shell">
          <div id="mc_embed_signup">
            <form
              action="https://cainafrica.us6.list-manage.com/subscribe/post?u=47db4d6cc70082fdd60e1ac73&id=a7f3d31cb6&f_id=006012e2f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Signup as a Volunteer</h2>

                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>

                {/* Email */}
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

                {/* First name */}
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

                {/* Last name (MMERGE10 in your Mailchimp code) */}
                <div className="mc-field-group">
                  <label htmlFor="mce-MMERGE10">
                    Last Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="MMERGE10"
                    className="required text"
                    id="mce-MMERGE10"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mc-field-group">
                  <label htmlFor="mce-PHONE">
                    Phone Number <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="PHONE"
                    className="REQ_CSS"
                    id="mce-PHONE"
                    required
                  />
                </div>

                {/* Areas of Interest (use exactly the same names/ids as Mailchimp) */}
                <div className="mc-field-group input-group">
                  <strong>Area(s) of Interest</strong>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][1]"
                        id="mce-group[471109]-471109-0"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-0">
                        Fundraising
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][2]"
                        id="mce-group[471109]-471109-1"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-1">Events</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][4]"
                        id="mce-group[471109]-471109-2"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-2">
                        Technology
                      </label>
                    </li>
                    {/* <li>
                      <input
                        type="checkbox"
                        name="group[471109][8]"
                        id="mce-group[471109]-471109-3"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-3">
                        Healthcare
                      </label>
                    </li> */}
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][16]"
                        id="mce-group[471109]-471109-4"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-4">Education</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][32]"
                        id="mce-group[471109]-471109-5"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-5">
                        Publicity &amp; Media
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][64]"
                        id="mce-group[471109]-471109-6"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-6">Advocacy</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][128]"
                        id="mce-group[471109]-471109-7"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-7">Research</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][256]"
                        id="mce-group[471109]-471109-8"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-8">Analytics</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][512]"
                        id="mce-group[471109]-471109-9"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-9">Graphic Design</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][1024]"
                        id="mce-group[471109]-471109-10"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-10">Web Design</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][2048]"
                        id="mce-group[471109]-471109-11"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-11">
                        Data Visualization &amp; Reporting
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471109][4096]"
                        id="mce-group[471109]-471109-12"
                        value=""
                      />
                      <label htmlFor="mce-group[471109]-471109-12">Other</label>
                    </li>
                  </ul>
                  <span
                    id="mce-group[471109]-HELPERTEXT"
                    className="helper_text"
                  >
                    Kindly select at least one area you would like to volunteer
                  </span>
                </div>

                {/* How did you hear about CAIN? */}
                <div className="mc-field-group input-group">
                  <strong>How did you hear about CAIN?</strong>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471110][8192]"
                        id="mce-group[471110]-471110-0"
                        value=""
                      />
                      <label htmlFor="mce-group[471110]-471110-0">
                        Social Media
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471110][32768]"
                        id="mce-group[471110]-471110-1"
                        value=""
                      />
                      <label htmlFor="mce-group[471110]-471110-1">
                        Internet Search / Website
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471110][65536]"
                        id="mce-group[471110]-471110-2"
                        value=""
                      />
                      <label htmlFor="mce-group[471110]-471110-2">
                        Friend / Family
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471110][131072]"
                        id="mce-group[471110]-471110-3"
                        value=""
                      />
                      <label htmlFor="mce-group[471110]-471110-3">CAIN Event</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471110][262144]"
                        id="mce-group[471110]-471110-4"
                        value=""
                      />
                      <label htmlFor="mce-group[471110]-471110-4">CAIN Member</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471110][524288]"
                        id="mce-group[471110]-471110-5"
                        value=""
                      />
                      <label htmlFor="mce-group[471110]-471110-5">
                        Benevity / Workplace Volunteer Program
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="group[471110][1048576]"
                        id="mce-group[471110]-471110-6"
                        value=""
                      />
                      <label htmlFor="mce-group[471110]-471110-6">Other</label>
                    </li>
                  </ul>
                </div>

                {/* Hidden tag (Volunteer) */}
                <input type="hidden" name="tags" value="3416507" />

                {/* Responses */}
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>

                {/* Honeypot */}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
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
