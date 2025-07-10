import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  // TopHeaderText,
  TopParaText,
  OverallWrapper,
  PostIframeWrapper,
  PostIframe,
  PostWrapper,
  PostHeader,
  PostParagraph,
  PostImage,
  MediaWrapper,
  SingleImage,
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projects.jpg";
import newJeida01 from "../images/Jeida/BPC.jpg";
import newJeida02 from "../images/Jeida/Jeida5.jpg";
// import newJeida03 from "../images/Jeida/Jeida1.jpg";

const ProjectBtG = (props) => {
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
          {/* <TopHeaderText>PROJECTS</TopHeaderText> */}
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>
      <OverallWrapper>
        <PostWrapper>
          <PostHeader>Community Development in Jeida Village</PostHeader>
          <PostParagraph>
            Through a partnership with <b>Crossbonds</b> and <b>The Presbyterian Church of Nigeria,</b> CAIN Africa facilitated a community development initiative in <b>Jeida Village,</b> focused on improving access to quality healthcare, education, and clean water. Over the years, this intervention brought meaningful progress to the lives of residents, despite a number of systemic challenges.
            <br />
            <br />
            <b>Jeida Health Centre</b>
            <br /><br></br>
            In 2016, the <b>Jeida Health Centre</b> was established to provide primary healthcare services to the local population. Since its inception, the centre has safely delivered an average of <b>eight children per year</b> with a <b>zero mortality rate</b> — a significant achievement given the high infant mortality rates common in rural Nigeria.
            <br /><br />
            Despite the absence of a resident doctor, community health workers and nurses consistently provided basic medical care to the villagers. However, the national brain drain in Nigeria’s healthcare sector, especially the exodus of doctors, posed a significant challenge. Combined with the absence of essential infrastructure — including reliable electricity, clean water, and accessible roads — the centre struggled to attract and retain qualified medical personnel.
            <br />
            <br />
            <b>Divine Wisdom Presbyterian School</b>
            <br /><br></br>
            The <b>Divine Wisdom Presbyterian School</b> played a vital role in the educational development of Jeida Village. Initially focused on <b>primary education,</b> the school served over <b>100 students</b> and later expanded to include <b>secondary education,</b> a major milestone for the community.
            <br />
            While the school provided essential academic opportunities, it faced limitations such as the absence of a well-equipped library, playground, and computer facilities — resources critical to delivering holistic, quality education.
            <br />
            <br />
            <b>Poultry and Fish Farm</b>
            <br /><br></br>
            A <b>poultry and fish farm</b> was established as a sustainability initiative to help fund the school and health centre. For a time, the farm successfully generated revenue to support these projects. However, operational difficulties and a sharp increase in animal feed prices led to a decline in productivity and a reduction in its ability to financially support the community services.
            <br />
            <br />
           <b>Water Pump Project</b>
           <br /><br></br>
            As part of efforts to ensure access to clean water, a <b>water pump and overhead tank</b> were installed in the village. The water system became fully operational and was made accessible to community members, addressing a crucial need for safe and reliable water.

            <br />
            <br />
            The Jeida Community Development Project brought significant positive change to the village, from safer childbirths and better access to healthcare to increased educational opportunities and clean water. While the journey included notable challenges, the initiative served as a powerful example of what collaborative, community-driven development can achieve in underserved areas.
            
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>

            <div class="pr-impact-container">
              <div class="pr-impact-num pr-impact-ict">
                <div class="pr-impact-content">
                  <span id="impact-content-title">2000+</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Beneficiaries including community members and students enrolled in the school at a subsidized rate.</span>
                </div>
                <div class="pr-impact-content">
                  <span id="impact-content-title">4</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Infrastructure Projects: The first school in the community, a community health centre, a poultry and fish farm, and a borehole for communal use.</span>
                </div>
              </div>

              <div class="outcome-data-report pr-data-report">
                <img src="../assets/images/notification.svg" alt="Notification Bell"></img>
                <div class="outcome-data-p"><a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024<br></br> Annual Report <b>HERE</b></a></div>
              </div>

              <div class="pr-testimonial-content">
                <div class="pr-testimonial-media testimonial-image pr-btg-media"></div>
                <div class="pr-testimonial-data">I walk a very long distance every day to come to school with my younger brother. Because this is the only standard school that is also affordable in this area. <div class="pr-testimonial-footer"><i><strong>Flourish Bassey,  </strong>Beneficiary</i></div></div>
              </div>
          </div>

        <PostIframeWrapper>
            <PostIframe
              src="https://www.youtube.com/embed/O2BWLawlcfE?si=xJSrxzTBGvr5IKA9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></PostIframe>
          </PostIframeWrapper>
          <SingleImage>
            <PostImage className="post-image" src={`${newJeida01}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              A nurse attending to a patient.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${newJeida02}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Excited students showing off the educational materials they received.
            </i>
          </SingleImage>
          {/* <SingleImage>
            <PostImage src={`${newJeida03}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              A patient at the clinic.
            </i>
          </SingleImage> */}
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectBtG;
