import React from "react";
import styled from "styled-components";
import {
  TopImage,
  TextWrapper,
  TopHeaderText,
  TopParaText,
  MidSection,
  MidParagraphOne,
} from "./StyledComponents.js";
import TopOurMission2 from "../images/Our Mission/TopOurMission2.JPG";
import Toolbar from "./Toolbar/Toolbar.js";

export const PostIframe = styled.iframe`
  padding-left: 0.5rem;
  border: 2px solid white;
  margin: auto;
  // border: 1px solid black;
  @media (max-width: 768px) {
    // padding-top: 5rem;
    padding-left: 0rem;
    width: 100%;
    height: 15rem;
  }
`;

const WhoWeAre = (props) => {
  return (
    <div>
      <TopImage style={{ backgroundImage: `url(${TopOurMission2})` }}>
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          <TopHeaderText>WHO WE ARE</TopHeaderText>

          <TopParaText>
            "BE THE CHANGE YOU WANT TO SEE IN THE WORLD." - MAHATMA GANDHI{" "}
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <MidSection>
        <MidParagraphOne>
          <h2 style={{ margin: "0.5rem", fontSize: "1.25rem" }}>WHO WE ARE</h2>
          <h4
            style={{ color: "#d8aa35", margin: "0.5rem", fontSize: "1.25rem" }}
          >
            Our mission is to empower underprivileged students in underserved African communities by providing access to quality education, enabling them to break free from poverty and compete on a global scale.
          </h4>

          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            CAIN Educational and Medical Foundation is a 501(c)(3) non-profit organization in Lagos, Nigeria. It was established in 2013 by a group of young adults who are passionate about helping Africa's less privileged.
          </p>
          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            Quality healthcare and education are the two main goals of the foundation. At the heart of the foundation is the belief that everyone should have access to quality education and healthcare irrespective of their socioeconomic status. 
            And, from our foundation's establishment,
            we've made it a priority to lend a helping hand to areas that lack
            essential healthcare and educational services.
          </p>
          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            CAIN's office and Educational Resource Centre is located at Ikotun, Lagos State. It is open to students 6 days a week. On these days, trained volunteers and professional teachers teach a variety of disciplines to children for free. Students also get free access to the CAIN Library, which is stocked with textbooks for them to read and research on their own.
          </p>
          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            As a non-profit organization, CAIN relies on donations and support from generous sponsors. With a single act of contribution, you can ensure a child's future.
          </p>
        </MidParagraphOne>
        <PostIframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ILc2lnyRgik"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
        ></PostIframe>
        {/* <MidParagraphTwo /> */}
      </MidSection>

      <div></div>
    </div>
  );
};

export default WhoWeAre;
