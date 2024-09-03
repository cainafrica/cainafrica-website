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
  PostIframe,
  PostIframeWrapper,
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projectsCover.jpg";
import Image1 from "../images/Gallery/AKAEZE PROGRAM/A (1).jpg";
import Image2 from "../images/Gallery/AKAEZE PROGRAM/A (14).jpg";

const ProjectASRP2019 = (props) => {
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
          <PostHeader>Akaeze Summer Program</PostHeader>
          <PostParagraph>
            {" "}
            <i>
              “Reading is essential for those who seek to rise above the
              ordinary.” <strong>– Jim Rohn</strong>
            </i>
            <br />
            <br />
            The Akaeze Summer Reading Program is designed to encourage students to build a reading habit as well as critical thinking and communication abilities. Reading, discussions, vocabulary development and essay writing are the four main pillars of this program.
            <br />
            <br />
            The first edition of this program took place at the CAIN Educational Resource Centre from August 11 to September 8, 2018. Chinua Achebe's Things Fall Apart was the book of choice. Using references from the book, discussions centered around gender roles, domestic violence, and toxic masculinity. We also provided quizzes and essay writing opportunities for our pupils to improve their vocabulary and writing skills. This program yielded fantastic results. Our pupils left with a clear understanding of why domestic abuse should not be tolerated. Our ladies left with a stronger sense of equality with their male counterparts, while our boys became better aware of how to properly engage women in social interaction.
            <br />
            <br />
            As a result of these accomplishments, the Akaeze summer program has become one of CAIN Educational and Medical Foundation's main annual programs, and it is held at our Educational Resource Centre in Ikotun every summer. We're delighted to keep using this medium to educate the next generation and develop adults with exceptional character.
            <br />
            <br />
            The book of choice for the 2019 edition was Chimamanda Adichie's "Dear Ijeawele, or a Feminist Manifesto in Fifteen Suggestions." We talked about feminism and sexual assault, and we had some intriguing discussions regarding marital rape and the stigmatization of sexual assault victims in Nigeria. By the end of the program, our students had a greater knowledge of why it's vital to advocate for women's rights, what constitutes consent, and how to handle sexual assault cases.
            <br />
            <br />
            Students received school supplies as usual, and three awards were given out: Quiz whiz, Aspiring novelist, and Star student. We asked our awardees what kind of gift they wanted, and they suggested we take them out for lunch, games, and a movie. Their desires were granted, and they had a great time.
            <br />
            <br />
            Due to Covid 19 regulations, this program did not take place in
            2020.
            <br />
            <br />
            The theme for the 2021 edition was tribalism and racism, with Buchi Emechata's Second Class Citizen as the featured book. Students were educated on the serious individual and societal costs and implications of tribalism and racism. They also looked into the various factors that contribute to racism and tribalism, as well as strategies for bridging racial and tribal differences. The majority of students stated the program was informative, improved their vocabulary and essay writing skills, and extended their perspective on the subject. At the end of the program, the students were given bags, lunch boxes, key chains, cards, stickers, bracelets, lapel pins, and shortie plush as souvenirs and presents, which were all donated by Microsoft employees.
            <br />
            <br />
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          {/* <PostIframeWrapper>
                        <PostIframe  src="https://www.youtube.com/embed/ETBP3YoLt6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                    </PostIframeWrapper> */}
          <PostIframeWrapper>
            <PostIframe
              src="https://www.youtube.com/embed/Ji7-zOivxmU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
            ></PostIframe>
          </PostIframeWrapper>
          <SingleImage>
            <PostImage src={`${Image1}`} />
            <i style={{ padding: "1rem 0" }}>
              Ongoing discussion at the Akaeze summer program
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${Image2}`} />
            <i style={{ padding: "1rem 0" }}>
              Students and facilitators at the Akaeze Summer Program
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectASRP2019;
