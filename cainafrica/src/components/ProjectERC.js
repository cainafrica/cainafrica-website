import React from "react";
import {
  TopImage,
  TextWrapper,
  TopHeaderText,
  TopParaText,
  OverallWrapper,
  DonateLink,
  SingleImage,
  PostImage,
  PostHeader,
  PostParagraph,
  PostWrapper,
  MediaWrapper,
  PostIframeWrapper,
  PostIframe,
} from "./StyledComponents.js";
import CAINERC1 from "../images/ProjectsData/CAINERC1.JPG";
import CAINERC2 from "../images/ProjectsData/CAINERC2.jpg";
import CAINERC3 from "../images/resource_center/CPL.jpg";
import Toolbar from "./Toolbar/Toolbar.js";
import projectsCover from "../images/ProjectsData/projectsCover.jpg";

const ProjectERC = (props) => {
  let scrollToTop = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <div>
      <TopImage
        style={{
          backgroundImage: `url(${projectsCover})`,
          backgroundPosition: "center",
        }}
      >
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          <TopHeaderText>PROJECTS</TopHeaderText>
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <OverallWrapper>
        <PostWrapper>
          <PostHeader>CAIN Educational Resource Center</PostHeader>

          <PostParagraph>
            The CAIN Educational Resource Centre in Ikotun, Lagos, was established as a result of our resolve to provide long-term solutions to the void in quality education that plagues underprivileged communities.
            <br />
            <br />
            By establishing this facility, we are be able to provide educational resources that promote intellectual development, self-reliance and socioeconomic growth. The facility has the following features:
            <ul>
              <li>A library</li>
              <li>An I.C.T room </li>
              <li>A meeting room</li>
              <li>A large open-air entertainment and recreational area</li>
            </ul>
            <br />
            <strong>Purchase</strong>
            <br />
            <strong>Status: Completed</strong>
            <br />
            CAIN Education Foundation completed the required
            payments to purchase the property for the educational resource
            center in 2016. We were able to purchase the site thanks to generous
            individual donations and grants from Microsoft employees and Davis
            Projects for Peace.
            <br />
            <br />
            <strong>Renovation</strong> <br />
            <strong>
              Status: Completed. (Internal and External renovations)
            </strong>
            <br />
            CAIN Education Foundation took part in a Clinton Global
            Initiative University fundraising competition to help pay for
            improvements. We raised funding through Microsoft's Benevity
            platform and from a variety of donors that are passionate about our
            objective. Although we’ve completed external renovations, we are yet
            to install electric barbed wires and security cameras to safeguard
            our equipment from any form of theft and vandalism.
            <br />
            <br />
            <strong>Furnishing</strong> <br />
            <strong>Status: In progress</strong> <br />
            To begin furnishing the Educational Resource Centre, the CAIN
            Educational and Medical Foundation teamed with the Africans at
            Microsoft community and the Nigerian Students Association at Cornell
            University to generate donations. The library, seminar room, waiting
            room, and one classroom are now being outfitted. Many more rooms
            still need to be outfitted, and we need all the help we can get,
            especially yours. You will be making a difference in the lives of
            thousands of impoverished youngsters in Nigeria by sponsoring this
            project. Together, we can give them a better future.
            <br />
            <br />
            <table>
              <tbody>
                <tr>
                  <th>Room</th>
                  <th>COST (US Dollars)</th>
                </tr>
                <tr>
                  <td>ICT Room</td>
                  <td>$27,000</td>
                </tr>
                <tr>
                  <td>Alternative sources of Power</td>
                  <td>$25,000</td>
                </tr>
                <tr>
                  <td>Classroom</td>
                  <td>$7,000</td>
                </tr>
                <tr>
                  <td>Staff Room</td>
                  <td>$3,000</td>
                </tr>
                <tr>
                  <td>Kitchenette</td>
                  <td>$2,500</td>
                </tr>
                <tr>
                  <td>Reception</td>
                  <td>$2,300</td>
                </tr>
                <tr>
                  <td>Archives</td>
                  <td>$700</td>
                </tr>
              </tbody>
            </table>
            <br />
            <strong>
              Sponsor a room at CAIN’s Educational Resource Center
            </strong>
            <br />
            <br />
            <strong>One time/Monthly donation: </strong>
            You can make a one-time donation or sign up for a monthly donation
            to support this project. If you donate $1000 over the course of a
            year, the CAIN Education Foundation will name one of
            our several programs at the Educational Resource Centre after you.
            <br />
            <br />
            Contribute to the complete furnishing of a room, and the room will
            be named after you or your organization
            <br />
            <br />
            The time is NOW, these kids need you.
            <PostHeader onClick={scrollToTop}>
              {" "}
              <DonateLink style={{ color: "black" }} to="/donate">
                {" "}
                <strong>Click below to donate towards this project.</strong>
                <br />
                <br />
                <DonateLink style={{ color: "black" }} to="/donate">
                  <a href="donate.js" class="donate_button">
                    <span class="donate_button__text">Donate</span>
                  </a>
                </DonateLink>
              </DonateLink>{" "}
            </PostHeader>
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          <PostIframeWrapper>
            <PostIframe
              src="https://www.youtube.com/embed/QVSKpP0dfWA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
              frameBorder="0"
            ></PostIframe>
          </PostIframeWrapper>
          <SingleImage>
            <PostImage src={`${CAINERC1}`} />
            <i style={{ padding: "1rem 0" }}>
              Property purchased to serve as the Educational Resource Center.
            </i>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${CAINERC2}`} />
            <i style={{ padding: "1rem 0" }}>
              {" "}
              The Educational Resource Center during internal renovations and
              painting
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CAINERC3}`} />
            <i style={{ padding: "1rem 0" }}>
              Current state of the Educational Resource Center after internal
              renovations and painting.
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectERC;
