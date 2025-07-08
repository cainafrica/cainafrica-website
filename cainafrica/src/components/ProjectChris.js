import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  // TopHeaderText,
  TopParaText,
  OverallWrapper,
  PostWrapper,
  PostHeader,
  PostParagraph,
  MediaWrapper,
  PostIframe,
  PostIframeWrapper,
  SingleImage,
  PostImage
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projects.jpg";
import Image1 from "../images/christmas/beneficiary.jpg";
import Image2 from "../images/christmas/CH1.jpg";

const ProjectChris = (props) => {
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
          <PostHeader>Christmas Benevolence Project </PostHeader>
          <PostParagraph>
          While Christmas is often seen as a time of joy, celebration, and abundance, for many underprivileged families, it is a stark reminder of their struggles and insufficiencies as they are reminded of their inability to put food on their tables.
          <br />
          <br />
          With constant inflation ravaging the country's and the world's economies, essential commodities like food have become increasingly inaccessible for those already living below the poverty line. The harsh reality is that as others celebrate, many families in underserved communities grapple with the despair of not being able to afford a basic meal.
          <br />
          <br />
          Understanding this profound need, we initiated the Christmas Benevolence Project—a charity effort aimed at bringing relief and joy to these families during the holiday season. Our mission was to assist and support identified underprivileged families by providing food and other essential gifts, ensuring that they are not left behind during a time meant for togetherness and hope.
          <br />
          <br />
          <b>The Humble Beginning: The 50/50 Campaign</b>
          <br />
          <br />
          Launched in December 2020 during the height of the COVID-19 pandemic, the first edition of the project was aptly named the 50/50 Campaign. Donors contributed $50 each to feed 50 underprivileged families, offering essential food items and sanitary products. The goal was simple yet impactful: bring dignity, relief, and joy to families unable to celebrate due to financial hardship. Held at the CAIN Educational Resource Centre in Ikotun, the initiative met its target and provided much-needed comfort in a time of global uncertainty.
          <br />
          <br />
          <b>From 50 to Hundreds: Evolving to Meet Greater Needs</b>
          <br />
          <br />
          As Nigeria’s inflation deepened and food prices surged, it became clear that $50 could no longer adequately support a family. Yet, instead of folding, the project evolved. Over the next four years — from 2021 to 2024 — the Christmas Benevolence Project expanded in scope and ambition. Each year, we adapted to the realities of rising costs, sourcing more food items and reaching more families.
          <br />
          <br />
          <b>The Impact at a Glance</b>
          <br />
          <br />
          <ul>
            <li><b>1,068 individuals </b>from <b>467 families</b> reached</li>
            <li><b>$8,444 </b>raised and distributed as food aid</li>
            <li><b>20+ varieties of essential food items </b>shared</li>
            <li>Joy and dignity restored to households who would have otherwise gone without</li>
          </ul>
          <br />
          <br />
          Through the generosity of donors and supporters, the project became more than a seasonal effort — it became a tradition of love, compassion, and community. Each Christmas, families once burdened by despair were given a reason to smile, gather, and celebrate.
          {/* <br />
          <br />
          "The true spirit of Christmas is love shared in action." */}

          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>

          <PostIframeWrapper style={{marginBottom: '5rem'}}>
            <div class="pr-impact-container cbp-pr-container">
              <div class="pr-impact-num">
                <div class="pr-impact-content">
                  <span id="cbp-pr-title">467</span><br></br><span id="impact-content-data-p">Individuals from 200 families were supported with food.</span>
                </div>
                <div class="pr-impact-content">
                  <span id="cbp-pr-title">$8,444</span><br></br><span id="impact-content-data-p">Was raised to support these families with food supplies.</span>
                </div>
                <div class="pr-impact-content">
                  <span id="cbp-pr-title">20</span><br></br><span id="impact-content-data-p">Varieties of food items have been distributed to families.</span>
                </div>
              </div>
          
              <div class="outcome-data-report pr-data-report">
                <img src="../assets/images/notification.svg" alt="Notification Bell"></img>
                <div class="outcome-data-p"><a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024<br></br> Annual Report <b>HERE</b></a></div>
              </div>
          
              <div class="pr-testimonial-content">
                <div class="pr-testimonial-media testimonial-image pr-chris-media"></div>
                <div class="pr-testimonial-data">The gifts I received today, I cannot carry alone. This organisation is a wonder to me. Tutoring my children for free and now giving my family this gigantic Christmas gift. Please help me thank them. <div class="pr-testimonial-footer"><i><strong>Mr Ajibade Isreal,  </strong>Parent and Beneficiary</i></div>
                </div>
              </div>
            </div>
          </PostIframeWrapper>
         
          <PostIframeWrapper className="cbp-iframe">
            <PostIframe
              width="560" height="315"
              src="https://www.youtube.com/embed/KcDeWifTRWc?si=UdqqbClhMm_CNNI-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </PostIframe>
          </PostIframeWrapper>
         <SingleImage>
            <PostImage className="cbp-post-image" src={`${Image1}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Beneficiaries receiving the food items.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${Image2}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Varieties of food items arranged, to be distributed to families in need.
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectChris;
