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
            Every morning, <b>Flourish Bassey, a determined 15-year-old, walks for about 1 hour and 20 minutes with her younger brother to attend school — the only school in the entire region that offers affordable, high-quality education in Jeida, where she lives with her family.</b> That school is Divine Wisdom Presbyterian School, established through a transformative partnership between CAIN Educational Foundation, Crossbonds, and The Presbyterian Church of Nigeria.
            <br />
            <br />
            What began as a single effort to bring education to a forgotten village has grown into a full-scale development project impacting over 2,000 lives. From education to healthcare to access to clean water, the Jeida Village Project has become a multi-faceted community development initiative.
            <br /><br></br>
            <strong style={{color: "red", fontSize: "1.5rem"}}>Quality Education for Jeida</strong>
            <br />
            At the heart of this development is <strong>Divine Wisdom Presbyterian School</strong>, the <strong>first school ever built in Jeida</strong>. Today, it serves over <strong>100 students</strong>, many of whom had no prior access to structured education. Thanks to this school, children like Flourish now have a chance to learn, grow, and dream beyond the limitations they were born into.
            <br />
            <br />
            The school began with primary education and has since expanded to include <strong>secondary classes</strong>, bringing structure, possibility, and dignity to students and their families. Offered at a <strong>highly subsidised rate</strong>, it ensures that underprivileged African students are not left behind simply because of their background.
            <br /><br></br>
            <strong style={{color: "red", fontSize: "1.5rem"}}>Quality Healthcare Access for Jeida</strong>
            <br />
            In 2016, we launched the <b>Abba Father Presbyterian Clinic</b>, providing essential primary healthcare services to the community. Since then, the clinic has recorded an average of eight safe childbirths per year with a zero-mortality rate — a rare feat in rural Nigerian communities.
            <br />
            Mothers no longer have to make long, risky journeys for basic healthcare. With community nurses and health workers present, families in Jeida now have access to lifesaving care right in their village.
            <br />
            <br />
            <strong style={{color: "red", fontSize: "1.5rem"}}>Sustainable Future for Jeida</strong>
            <br />
            To create a self-sustaining model, a <strong>poultry and fish farm</strong> was established to help fund the school and health centre. At its peak, the farm generated significant revenue, demonstrating the power of sustainable, community-led development.
            <br />
            <br />
           <strong style={{color: "red", fontSize: "1.5rem"}}>Access to Clean Water for Jeida</strong>
           <br />
            For decades, <strong>access to clean water was a distant dream for the people of Jeida</strong> — a dream made even harder to achieve by the <strong>village’s rough, rocky terrain</strong>, which made drilling difficult and expensive.
            <br />
            <br />
            But today, that dream has become a reality. Through strategic intervention, a <strong>fully functional water pump and overhead tank</strong> were installed, now providing safe and accessible drinking water to the entire community.
            <br />
            <br />
           <strong style={{color: "red", fontSize: "1.5rem"}}>What Comes Next</strong>
           <br />
           While much has been achieved, our work in Jeida, especially at the school, is far from complete. We are committed to scaling and strengthening Divine Wisdom Presbyterian School so it can continue to serve the next generation of leaders.
           <br />
           Here’s how you can help:
            <ul>
              <li>Provide <strong>whiteboard markers and writing supplies</strong></li>
              <li>Improve <strong>classroom furniture and seating</strong></li>
              <li>Renovate and repaint <strong>existing classrooms</strong></li>
              <li>Build a <strong>standard playground</strong> for early learners</li>
              <li>Establish a fully equipped <strong>ICT centre</strong></li>
              <li>Construct a <strong>permanent secondary school building</strong></li>
              <li>Provide a <strong>school bus</strong>, so students no longer walk for hours to school</li>
            </ul>
            <strong style={{color: "red", fontSize: "1.5rem"}}>Want to Help? Let’s Do This Together.</strong>
           <br />
            If you would like to support this school or partner with us in building brighter futures for underprivileged African students in Jeida:
            <br /><br />
            Email - <strong>info@cainafrica.org</strong>
            <br />
            Phone - <strong>+2347049879535</strong>
            <br /><br />
            <strong>One village. Four projects. Thousands of lives touched. And still, the best is yet to come.</strong>
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
              With fresh stationery in hand, students proudly stand before their brand-new school, ready to embrace a brighter future.
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
