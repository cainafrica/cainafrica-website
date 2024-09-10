import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  TopHeaderText,
  TopParaText,
  OverallWrapper,
  PostWrapper,
  PostHeader,
  PostParagraph,
  PostImage,
  MediaWrapper,
  SingleImage,
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projectsCover.jpg";
import Image2 from "../images/Gallery/CAREER/B (3).jpg";
import Image3 from "../images/Career Enrichment/CE1.jpg";

const CareerEnrichmentProgram = (props) => {
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
          <PostHeader>Career Enrichment Program</PostHeader>
          <PostParagraph>
            {/* <i>
              “Reading is essential for those who seek to rise above the
              ordinary.” <strong>– Jim Rohn</strong>
            </i> */}
            The CAIN Career Enrichment Program is a monthly developmental
            program created to assist over 1,000 underprivileged students in
            making informed educational and career choices. We believe all
            individuals should be empowered to choose a meaningful career and
            education pathway to position themselves for lifelong success.
            <br />
            <br />
            The primary goal of this program is to expose students to a wide
            range of career rewarding opportunities and ultimately eradicate
            unemployment and poverty. Our objective is to help students develop
            a positive attitude towards their studies and make them become fully
            engrossed in career planning at an early stage, motivating them to
            become the architects of their own lives by identifying, utilizing
            and profiting from the resources and opportunities within their
            environment.
            <br />
            <br />
            Facilitators and business leaders from various fields and
            professions such as Accounting, Medicine, Business Management,
            Information & Communications Technology, Oil & Gas, Agriculture,
            Transportation, Engineering and Education are invited to engage with
            the students on career related topics. The facilitators help the
            students to understand their core interest areas, educate them about
            various career paths, empower them to identify their strengths and
            weaknesses and equip them to make more informed decisions about
            their career. The program also provides the students with an
            opportunity to listen to local and international professionals.
            Through their interaction with these professionals, they receive
            insight into opportunities that are available within and beyond
            their local environment and tips on how to optimally maximize them.
            <br />
            <br />
            Through the use of PowerPoint slides, graphic illustrations and
            video livestream, our facilitators discuss the concept of Career
            Guidance & Counseling and why it is important for students. They
            also discuss the factors that informed their own career decision and
            the step-by-step process they undertook to attain their career goal.
            This is in addition to offering counsels and guidelines that will
            accompany the students throughout their entire process of schooling
            up till securing their first employment.
            <br />
            <br />
            Three editions of this program have so far taken place with an
            overall attendance of 76 students, and we expect these numbers to
            keep growing as we progress. Feedback from the students reveal that
            most of them have benefited immensely with an average satisfaction
            rate of 81.4%.
            <br />
            <br />
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          {/* <PostIframeWrapper>
            <PostIframe  src="https://www.youtube.com/embed/ETBP3YoLt6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
              </PostIframeWrapper> */}
          {/* <SingleImage>
            <PostImage src={`${Image1}`} /> */}
          {/* <i style={{ padding: "1rem 0" }}>
              Ongoing discussion at the Akaeze summer program
            </i> */}
          {/* </SingleImage> */}
          <SingleImage>
            <PostImage src={`${Image2}`} />
            {/* <i style={{ padding: "1rem 0" }}>
              Students and facilitators at the Akaeze Summer Program
            </i> */}
          </SingleImage>
          <SingleImage>
            <PostImage src={`${Image3}`} />
            {/* <i style={{ padding: "1rem 0" }}>
              Students and facilitators at the Akaeze Summer Program
            </i> */}
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default CareerEnrichmentProgram;
