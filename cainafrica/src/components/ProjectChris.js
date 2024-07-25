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
  MediaWrapper,
  PostIframe,
  PostIframeWrapper,
  SingleImage,
  PostImage
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projectsCover.jpg";
import Image1 from "../images/christmas/Christmas.jpg";

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
          <TopHeaderText>PROJECTS</TopHeaderText>
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
            This effort arose from our desire to assist and support the
            community's less privileged people over the Christmas holiday
            season. It's a CAIN Education Foundation charity
            initiative aimed at providing food and other gifts to destitute
            families during the Christmas season.
            <br />
            <br />
            The first edition of this program, dubbed "The 50/50 Campaign", took
            place in December 2020, and was followed by another hugely
            successful edition in December 2021. Donors were encouraged to
            donate up to $50 to help feed 50 families with food and Covid-19
            sanitary products.
            <br />
            <br />
            The initiative was well-thought-out and executed, with recipients
            carefully chosen from the Ikotun/Igando community based on
            socioeconomic vulnerability indicators. The event took place at our
            Educational Resource Centre in Ikotun. It was a fantastic success
            because all 50 of the target beneficiaries were reached and greatly
            aided.
            <br />
            <br />
            Our goal is to make this an annual event, similar to our other
            significant programs. We also hope to see you at future editions,
            where we hope to brighten the faces of 50 families once more.
            <br />
            <br />
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
         
          <PostIframeWrapper>
            <PostIframe
              width="520"
              height="315"
              src="https://www.youtube.com/embed/u84WXflC2cY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
            ></PostIframe>
          </PostIframeWrapper>
         <SingleImage>
            <PostImage src={`${Image1}`} />
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectChris;
