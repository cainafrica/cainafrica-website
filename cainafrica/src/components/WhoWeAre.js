import React from "react";
import styled from "styled-components";
import {
  TopImage,
  TextWrapper,
  TopParaText,
  MidSection,
  MidParagraphOne,
  ObjWrap,
  ObjTopImage,
  ObjContent,
  ObjContentTitle,
  ObjContentData,
  ObjContainer,
  ObjMainTitle,
  PostImage,
  SingleImage,
} from "./StyledComponents.js";
import TopOurMission2 from "../images/Our Mission/WCV.jpg";
import Obj1 from "../images/About/obj-1.svg";
import Obj2 from "../images/About/obj-2.svg";
import Obj3 from "../images/About/obj-3.svg";
import About01 from "../images/About/abt-1.png";
import About02 from "../images/About/abt-2.png";
import About03 from "../images/About/abt-3.png";
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
          <TopParaText>
            "BE THE CHANGE YOU WANT TO SEE IN THE WORLD." - MAHATMA GANDHI{" "}
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <MidSection style={{marginBottom: "8rem"}}>
        <MidParagraphOne>
          <h2 style={{ margin: "0.5rem", fontSize: "2rem" }}>Our Mission</h2>
          <h4
            style={{ color: "red", margin: "0.5rem", fontSize: "1.25rem" }}
          >
            Our mission is to empower underprivileged students in underserved African communities by providing access to quality education, enabling them to break free from poverty and compete on a global scale.
          </h4>

          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            CAIN Education Foundation, a 501(c)(3) non-profit organization based in Lagos, Nigeria, was established in 2013 by a passionate group of young adults dedicated to empowering underprivileged Africans.
          </p>
          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
           <strong style={{fontSize: "2rem"}}>Who We Are</strong><br/><br/>
            We are committed to organizing, mobilizing, and channeling resources to create transformative educational opportunities for underserved communities, fostering self-reliance. Through a comprehensive, community-focused strategy, we enhance the quality and accessibility of education for marginalized students across Africa. Our ambitious goal is to educate and empower 1,000,000 children and youth with exceptional education and skills by 2040, enabling them to overcome poverty and thrive on the global stage.
          </p>
          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
            At the heart of our foundation lies the belief that everyone deserves access to quality education, regardless of socioeconomic status. Since our inception, we have prioritized providing underserved African communities with access to quality education.
          </p>

          <p style={{ margin: "0.5rem", fontSize: "1rem" }}>
           <strong style={{fontSize: "2rem"}}>Our Core Values:</strong><br/>
            <ul>
              <li>
                <span style={{color: 'red', fontWeight: 'bold'}}>Equity and Justice: </span>Fair access to education, ensuring no child is left behind.
              </li>
              <li>
                <span style={{color: 'red', fontWeight: 'bold'}}>Integrity & Accountability: </span>Transparency and ethical standards in all partnerships.
              </li>
              <li>
                <span style={{color: 'red', fontWeight: 'bold'}}>Innovation & Excellence: </span>Leveraging technology to transform learning outcomes.
              </li>
              <li>
                <span style={{color: 'red', fontWeight: 'bold'}}>Respect & Dignity: </span>Creating an inclusive, empowering environment.
              </li>
              <li>
                <span style={{color: 'red', fontWeight: 'bold'}}>Gender Equality: </span>Promoting female leadership and equal participation.
              </li>
            </ul>
          </p>

          <ObjContainer>
            <ObjMainTitle>Objectives</ObjMainTitle>

            <ObjWrap>
              <ObjTopImage style={{marginTop: '2rem'}} src={`${Obj1}`} />
              <ObjContent>
                <ObjContentTitle>
                  Establish a Scalable, Community-Centered Learning Ecosystem
                </ObjContentTitle>
                <ObjContentData>
                  To build and maintain a replicable model of a safe, inclusive, and tech-enabled after-school center that responds directly to local educational challenges, fosters lifelong learning, and can be adapted across African communities facing similar systemic barriers.
                </ObjContentData>
              </ObjContent>
            </ObjWrap>

            <ObjWrap>
              <ObjTopImage style={{marginTop: '2rem'}} src={`${Obj2}`} />
              <ObjContent>
                <ObjContentTitle>
                  Bridge the Education-to-Opportunity Gap for Underserved Youth
                </ObjContentTitle>
                <ObjContentData>
                  To provide consistent access to quality academic support, digital skills training, and career readiness programs that empower youth from underserved communities—especially those aged 10 to 30—to transition successfully from education into meaningful employment or entrepreneurship.
                </ObjContentData>
              </ObjContent>
            </ObjWrap>
 
            <ObjWrap>
              <ObjTopImage style={{marginTop: '2rem'}} src={`${Obj3}`} />
              <ObjContent>
                <ObjContentTitle>
                  Bridge the Education-to-Opportunity Gap for Underserved Youth
                </ObjContentTitle>
                <ObjContentData>
                  To provide consistent access to quality academic support, digital skills training, and career readiness programs that empower youth from underserved communities—especially those aged 10 to 30—to transition successfully from education into meaningful employment or entrepreneurship.
                </ObjContentData>
              </ObjContent>
            </ObjWrap>

          </ObjContainer>
          
        </MidParagraphOne>

        <MidParagraphOne style={{marginTop: '0rem'}}>

            <PostIframe style={{marginTop: "3rem"}}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ILc2lnyRgik"
            frameborder="3"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen">
            </PostIframe>

          <SingleImage>
            <PostImage src={`${About01}`}></PostImage>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${About02}`}></PostImage>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${About03}`}></PostImage>
          </SingleImage>
        </MidParagraphOne>
        
        {/* <MidParagraphTwo /> */}

      </MidSection>

    </div>
  );
};

export default WhoWeAre;
