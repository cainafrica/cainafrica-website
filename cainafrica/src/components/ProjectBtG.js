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
import newJeida01 from "../images/Jeida/BPC.jpg";
import newJeida02 from "../images/Jeida/CHP.jpg";
import newJeida03 from "../images/Jeida/VCC.jpg";
import newJeida04 from "../images/Jeida/Clinic.jpg";

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
          <TopHeaderText>PROJECTS</TopHeaderText>
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>
      <OverallWrapper>
        <PostWrapper>
          <PostHeader>Bridging the Gap - Health Care For Jeida</PostHeader>
          <PostParagraph>
            Ensuring that underprivileged communities in Africa have access to
            adequate healthcare services will continue to be our top concern and
            it remains one of the two pillars of the CAIN Educational and
            Medical Foundation.
            <br />
            <br />
            Kelechi Umoga, a Yale University medical student, in collaboration
            with CAIN Education Foundation and the Presbyterian
            Church of Nigeria, worked on a project to create a healthcare clinic
            in Jeida - a tiny town on the outskirts of Abuja.
            <br />
            <br />
            With grants from Davis Projects for Peace, Engaged Learning and
            Research (ELR), and the Office of Academic Diversity Initiative
            (both departments at Cornell University), we achieved this in the
            summer of 2013.
            <br />
            <br />
            We started laying out our strategy and putting in place the
            procedures for establishing a health clinic in Jeida. It was erected
            and roofed at the end of the summer. The entire building project,
            including the installation of fixtures and painting, is now
            complete.
            <br />
            <br />
            Kelechi's work throughout the winter break in 2014 was focused on
            procuring medical equipment and furniture for the clinic so that it
            could open to the public in April 2015. Knowing about the ongoing
            work, the CAIN Education Foundation was thrilled to
            cooperate with Kelechi to secure funds from the Gianforte Family
            Foundation.
            <br />
            <br />
            Although the villages around Jeida were in better shape than Jeida,
            they all had the same problem of obtaining immediate access to basic
            health care. As a result, this newly constructed out-patient health
            clinic in the village's core acts as a conduit for basic health care
            to reach Jeida and the surrounding towns.
            <br />
            <br />
            We hope to see better health outcomes in these communities in the
            long run. The success of this effort will be judged on the
            subsequent mortality rates from preventable diseases, which will be
            evaluated on a regular basis.
            <br />
            <br />
            In addition to creating the clinic, Volunteer community health
            workers (CHWs) were recruited from the community and trained at a
            health technology school in the city. These CHWs act as a link
            between the formal health system and the community, allowing for a
            constant flow of information between the two.
            <br />
            <br />
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          <SingleImage>
            <PostImage src={`${newJeida04}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              The clinic after final completion of the internal fittings.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${newJeida01}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Ongoing humanitarian work at the clinic
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${newJeida02}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Ongoing humanitarian work at the clinic
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${newJeida03}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Ongoing humanitarian work at the clinic
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectBtG;
