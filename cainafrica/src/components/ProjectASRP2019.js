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
  PostImage,
  MediaWrapper,
  SingleImage,
  PostIframe,
  PostIframeWrapper,
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projects.jpg";
import Image1 from "../images/Akaeze/Akaeze Gallery.png.jpg";
import Image2 from "../images/Akaeze/A1.jpg";
import Image3 from "../images/Akaeze/A5.jpg";
// import Image4 from "../images/Akaeze/ASP2.jpg";
// import Image5 from "../images/Akaeze/A4.jpg";
// import Image6 from "../images/Akaeze/ASP7.jpg";

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
          {/* <TopHeaderText>PROJECTS</TopHeaderText> */}
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <OverallWrapper>
        <PostWrapper>
          <PostHeader><a className="program-titles"  href='https://guardian.ng/features/cain-africa-empowers-underprivileged-students-with-game-changing-ai-education/' target='_blank'>Akaeze Summer Program</a></PostHeader>
          <PostParagraph>
            {" "}
            <i>
              “Reading is essential for those who seek to rise above the
              ordinary.” <strong>– Jim Rohn</strong>
            </i>
            {/* <br /> */}
            <br />
            Launched in 2018, the Akaeze Summer Program was born out of a pressing need identified by our Founder and CEO, May Asagba, who observed a critical gap in the ability of underprivileged students to communicate effectively and confidently. Many struggled to express their thoughts clearly, both in writing and speech. This inspired the creation of the Akaeze Summer Program—an innovative initiative aimed at closing communication gaps and equipping students with essential life and leadership skills.
            <br />
            <br />
            For four transformative weeks each summer, the program immersed students in activities designed to strengthen reading, writing, critical thinking, and communication. Structured around three core objectives, the program sought to:
            <ol>
              <li><b>Enhance Communication Skills </b> through intensive reading, essay writing, and group discussions.</li>
              <li><b>Instil Social and Moral Values </b>by exploring themes such as gender equality, diversity, and environmental stewardship.</li>
              <li><b>Develop Critical Thinking </b> through debates and interactive sessions that encourage analytical thinking and respectful discourse.</li>
            </ol>
            <br />
            The approach was simple yet deeply impactful. Each edition revolved around a timely theme supported by a curated book, often complemented by movie or documentary screenings. These tools helped students build vocabulary, improve comprehension, and express complex ideas confidently. Public speaking, critical thinking, and respectful dialogue were central to every activity, delivered in a way that was both educational and engaging.
            <br />
            <br />
            Over the years, the program addressed pressing global and social issues, including toxic masculinity, racism, climate change, and most recently, Artificial Intelligence. In 2024, with no suitable age-appropriate book on AI, we created The AI Adventure, our first original publication designed to simplify AI for teenagers.
            <br /><br />
            Each edition of the program blended learning with excitement and motivation. Students participated in engaging academic contests, creative writing challenges, and lively debates,  earning recognition through titles like <b>“Quiz Whiz,” “Aspiring Novelist,”</b> and <b>“Star Student.”</b>
            <br /><br />
            Every student received generous educational support, including <b>school bags, shoes, notebooks, and a full range of stationery supplies.</b> Contest winners were specially rewarded with memorable experiences, such as outings to <b>cinemas and game houses,</b> a fun and meaningful way to celebrate their hard work and keep them inspired.
            <br /><br />
            Though the Akaeze Summer Program has now come to a close, it remains one of CAIN’s most beloved and impactful initiatives, having empowered <b>251 students</b> over <b>six program years</b> through a hands-on, community-centred approach that continues to inspire our work across all other educational interventions.
            {/* <br /><br />
            The 2024 edition took a bold step into the future by focusing on Artificial Intelligence (AI), a topic that is rapidly reshaping the world as we know it. As the global economy becomes increasingly tech-driven, having AI skills is essential for staying competitive. This is especially critical for students in underserved areas, who, without intervention, risk being left behind due to a lack of resources and educational opportunities in this field.
            <br /><br />
            Recognizing the absence of an age-appropriate book to help teenagers grasp the complex concepts of AI, we innovatively created The AI Adventure, a guide specifically designed to simplify AI for young minds. This book now stands as CAIN’s first original product, a testament to our commitment to ensuring that no student is left behind in the fast-evolving digital world.
            <br /><br />
            Each year, the program includes fun activities and awards to recognize outstanding students in various categories, such as the “Quiz Whiz,” “Aspiring Novelist,” and “Star Student.” Students also receive school supplies, and their special requests for rewards, such as a lunch and movie outing, are often granted. */}
            <br /><br />
          <table className="asrp-table">
              <thead>
                  <tr>
                      <th>Year</th>
                      <th>Theme</th>
                      <th>Book of Choice</th>
                      <th>Movie of Choice</th>
                      <th>Number of Participants</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td data-label="Year">2018</td>
                      <td data-label="Theme">Gender Roles & Toxic Masculinity</td>
                      <td data-label="Book of Choice">Things Fall Apart by Chinua Achebe</td>
                      <td data-label="Movie of Choice">None</td>
                      <td data-label="Number of Participant">45</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2019</td>
                      <td data-label="Theme">Feminism & Sexual Assault</td>
                      <td data-label="Book of Choice">Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions by Chimamanda Ngozi Adichie</td>
                      <td data-label="Movie of Choice">N/A</td>
                      <td data-label="Number of Participant">50</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2020</td>
                      <td data-label="Theme">N/A (Program halted due to COVID-19)</td>
                      <td data-label="Book of Choice">N/A</td>
                      <td data-label="Movie of Choice">N/A</td>
                      <td data-label="Number of Participant">N/A</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2021</td>
                      <td data-label="Theme">Tribalism & Racism</td>
                      <td data-label="Book of Choice">Second Class Citizen by Buchi Emecheta</td>
                      <td data-label="Movie of Choice">N/A</td>
                      <td data-label="Number of Participant">55</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2022</td>
                      <td data-label="Theme">Courage and Determination</td>
                      <td data-label="Book of Choice">The Old Man and the Sea by Ernest Hemingway</td>
                      <td data-label="Movie of Choice">Creed</td>
                      <td data-label="Number of Participant">50</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2023</td>
                      <td data-label="Theme">Climate Change</td>
                      <td data-label="Book of Choice">Global Warming - Horizons Students’ Encyclopedia</td>
                      <td data-label="Movie of Choice">The Boy Who Harnessed the Wind</td>
                      <td data-label="Number of Participant">51</td>
                  </tr>
                  <tr>
                      <td data-label="Year">2024</td>
                      <td data-label="Theme">Artificial Intelligence</td>
                      <td data-label="Book of Choice">The AI Adventure by CAIN Africa</td>
                      <td data-label="Movie of Choice">I, Robot</td>
                      <td data-label="Number of Participant">50</td>
                  </tr>
              </tbody>
          </table>
          <br />
          The Akaeze Summer Program has become one of CAIN’s main annual programs, and it continues to be a vital tool in our efforts to educate the next generation and foster future leaders. With your support, we can expand this program and positively impact more students each year.

          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>

          <PostIframeWrapper style={{marginBottom: '8rem', width: '100%'}}>
            <div class="pr-impact-container">
              <div class="pr-impact-num">
                <div class="pr-impact-content">
                  <span id="impact-content-title">400</span><br></br><span id="impact-content-data-p">Students Benefitted from the program.</span>
                </div>
                <div class="pr-impact-content">
                  <span id="impact-content-title">78%</span><br></br><span id="impact-content-data-p">Satisfaction rate among beneficiaries and facilitators.</span>
                </div>
                <div class="pr-impact-content">
                  <span id="impact-content-title">8</span><br></br><span id="impact-content-data-p">Editions of the program held, addressing 8 critical topics.</span>
                </div>
              </div>

              <div class="outcome-data-report pr-data-report">
                <img src="../assets/images/notification.svg" alt="Notification Bell"></img>
                <div class="outcome-data-p"><a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024<br></br> Annual Report <b>HERE</b></a></div>
              </div>

              <div class="pr-testimonial-content">
                <div class="pr-testimonial-media testimonial-image pr-ak-media"></div>
                <div class="pr-testimonial-data">Over the two years I attended, I gained valuable insights into technology, climate change, and personal development. The program also helped sharpen my spelling and vocabulary, and I discovered new words like “eschew."<div class="pr-testimonial-footer"><i><strong>Fareed Oshodi,  </strong>Beneficiary</i></div>
                </div>
              </div>
            </div>
          </PostIframeWrapper>
          <PostIframeWrapper>
            <PostIframe
              src="https://www.youtube.com/embed/nYdZY38L5OM?si=jkutEnqntd0K7PK4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </PostIframe>
          </PostIframeWrapper>
          <SingleImage>
            <PostImage className="asrp-post-image" src={`${Image1}`} />
            <i style={{ padding: "1rem 0" }}>
              Students at the Akaeze summer program
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${Image2}`} />
            <i style={{ padding: "1rem 0" }}>
              Students reading the Akaeze Summer Program 2024 Book titled "The AI Adventure."
            </i>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${Image3}`} />
            <i style={{ padding: "1rem 0" }}>
              Students in a group discussion.
            </i>
          </SingleImage>

          {/* <SingleImage>
            <PostImage src={`${Image4}`} />
            <i style={{ padding: "1rem 0" }}>
              Movie screening in one of the Akaeze Summer Program.
            </i>
          </SingleImage> */}

          {/* <SingleImage>
            <PostImage src={`${Image5}`} />
            <i style={{ padding: "1rem 0" }}>
              The best students in the 2024 Akaeze Summer Program posing with the CEO after receiving their certificate of excellence.
            </i>
          </SingleImage> */}
          
          {/* <SingleImage>
            <PostImage src={`${Image6}`} />
            <i style={{ padding: "1rem 0" }}>
              Students cleaning the streets of dirt and plastics during the 2023 Edition, themed “Climate Change.
            </i>
          </SingleImage> */}

        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectASRP2019;
