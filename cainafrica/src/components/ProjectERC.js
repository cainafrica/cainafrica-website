import React from "react";
import {
  TopImage,
  TextWrapper,
  // TopHeaderText,
  TopParaText,
  // OverallWrapper,
  // DonateLink,
  // SingleImage,
  // PostImage,
  // PostHeader,
  // PostParagraph,
  // PostWrapper,
  // MediaWrapper,
  // PostIframeWrapper,
  // PostIframe,
} from "./StyledComponents.js";
// import CAINERC1 from "../images/ProjectsData/CAINERC1.JPG";
// import CAINERC2 from "../images/ERC/ICT.jpg";
// import CAINERC3 from "../images/resource_center/CPL.jpg";
// import CAINERC4 from "../images/ERC/F5.jpg";
// import CAINERC5 from "../images/ERC/F6.jpg";
import Toolbar from "./Toolbar/Toolbar.js";
import projectsCover from "../images/ProjectsData/projects.jpg";

const ProjectERC = (props) => {
  // let scrollToTop = () => {
  //   window.scrollTo({ top: 500, behavior: "smooth" });
  // };

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
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>

      {/* <OverallWrapper>
        <PostWrapper>
          <PostHeader>CAIN Educational Resource Center</PostHeader>

          <PostParagraph>
          <b>Background</b><br /><br />
          The idea of the CAIN Educational Resource Centre was born out of a pressing need to tackle inadequate access to quality education in underserved communities and bypass bureaucratic hurdles in the process. After much deliberation and expert analysis, we realized that a community-centred approach would offer the best solution. We decided to bring the resource directly into the neighborhoods where the need was greatest, ensuring that those who required it the most had direct access. Alimosho, the largest underserved community in Lagos and home to over 2 million residents, became the site of our Educational Resource Centre, a beacon of hope for underprivileged students striving for a brighter future.

            <br />
            <br />
            <b>Purchase and Renovation</b>
            <br /><br />

            In 2016, CAIN Educational Foundation successfully purchased the property for the CAIN Educational Resource Centre, thanks to grants from the Davis Projects for Peace and generous donations from Microsoft employees and individuals across the globe. This pivotal moment marked the beginning of our journey to provide accessible, quality education to underprivileged students.
            <br /><br />

            To transform the facility into a functional educational hub, we embarked on a full renovation, both internally and externally. We raised funds through Microsoft’s Benevity platform and from various passionate donors who believe in our mission. Additionally, we competed in a Clinton Global Initiative University fundraising competition, clinching third place and securing additional funding for the improvements. Today, the facility stands strong, but we are still working to fully secure it, with plans to enhance its features and help it reach its full potential.
            <br /><br />

            <b>Facility Impact</b>
            <br /><br />
            Since acquiring the property in 2016, the CAIN Educational Resource Centre has positively impacted over 1000 underprivileged students through our educational programs. The facility is more than just a building; it is a transformative space that hosts the following:
            <ul>
              <li><b>Classrooms:</b> Two classrooms serve as the site for our daily tutorials in English and Mathematics, equipping students with a strong foundation in these crucial subjects for academic success.</li>
              <li><b>Library:</b> Our library, stocked with a wealth of educational resources, provides a quiet space for students and individuals in the community to deepen their knowledge and expand their horizons.</li>
              <li><b>Seminar Room:</b> A dedicated space for staff deliberations, operations, and meetings, where we strategize ways to maximize our impact.</li>
              <li><b>Playground:</b> A vast recreational area where students can unwind, connect with their peers, and relax in a safe, nurturing environment.</li>
              <li><b>Digital Skills Lab:</b> The jewel of the facility, our digital skills lab is where we empower students with the critical tech skills they need to thrive in today’s world. By teaching the students various digital skills, we aim to equip them with the tools necessary to secure employment and excel in a competitive, tech-driven world.</li>
            </ul>
            <br />
            <b>Projections</b>
            <br /><br />
            While we’ve come a long way, there’s still much to be done. Our goal is to fully furnish the Educational Resource Centre and enable it to reach its full potential.
            <br /><br />
            <b>The digital skills lab</b> , for instance, requires more computers and gadgets to operate at full capacity. We estimate that $44,900 is needed to bring this vision to life. Learn more about our plans for the digital lab <a style={{color: "red"}} href="https://www.cainafrica.org/#/projects/ict4u">HERE.</a>
            <br />
            <b>Our library</b>, a cornerstone of intellectual growth, also needs more books and resources to accommodate the growing number of students seeking knowledge. We estimate that $26,380.30 is needed to accomplish this. Read more about our library initiative <a style={{color: "red"}} href="https://www.cainafrica.org/#/projects/project-library">HERE.</a>
            <br /><br />
            Additionally, we require the following to enhance the safety and functionality of the facility:
            <ul>
              <li><b>Solar inverter </b>to provide sustainable and cost-effective power – <b>$7778.6</b></li>
              <li><b>Starlink Internet installation </b>for fast and reliable internet - <b>$857.1</b></li>
              <li><b>Central CAIN Server </b>for centralized data storage - <b>$1071.4</b></li>
              <li><b>Air conditioning units </b>in all rooms to create a comfortable learning environment – <b>$1714.4</b></li>
              <li><b>Furniture</b>,  classroom chairs, reception, staff office etc - <b>$480.20</b></li>
            </ul>
            <br />
            <b>Join Us in Making a Difference</b>
            <br /><br />
            The time is now, and we need you to help us continue changing lives. This facility plays a crucial role in the lives of countless underprivileged students, providing them with the tools they need to rise above poverty and secure a brighter future. Your support can make a lasting impact on their journey toward self-reliance and success.
            
            <PostHeader onClick={scrollToTop}>
              {" "}
              <DonateLink style={{ color: "black" }} to="/donate">
                {" "}
                <strong>Click below to donate towards this project.</strong>
                <br />
                <br />
                <DonateLink style={{ color: "black" }} to="/donate">
                  <a href="donate.js" class="donate_button">
                    <span class="donate_button__text">Donate</span>
                  </a>
                </DonateLink>
              </DonateLink>{" "}
            </PostHeader>
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          <PostIframeWrapper>
            <PostIframe
              src="https://www.youtube.com/embed/QVSKpP0dfWA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
              frameBorder="0"
            ></PostIframe>
          </PostIframeWrapper>
          <SingleImage>
            <PostImage src={`${CAINERC1}`} />
            <i style={{ padding: "1rem 0" }}>
              Property purchased to serve as the Educational Resource Center.
            </i>
          </SingleImage>

          <SingleImage>
            <PostImage src={`${CAINERC2}`} />
            <i style={{ padding: "1rem 0" }}>
              {" "}
              Digital Skills Lab.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CAINERC3}`} />
            <i style={{ padding: "1rem 0" }}>
              Current state of the Educational Resource Center after internal
              renovations and painting.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CAINERC4}`} />
            <i style={{ padding: "1rem 0" }}>
              Interior view of the library.
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CAINERC5}`} />
            <i style={{ padding: "1rem 0" }}>
              The seminar room.
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper> */}

      <main class="erc-container main-container">
        <section class="left-col">
          <div class="upper-section">
            <p>
              Nigeria has one of the world’s largest and youngest populations, yet more than 18.3 million Nigerian children are not in school, and an additional 30 to 40 million students attend chronically underfunded schools where learning is nearly impossible. Classrooms with no books, teachers with no training, and students with no real chance. The result? Over 70% of public school students cannot read or solve basic math problems at their grade level.
            </p>
          </div>
          
          <div class="mid-section">
            <div class="main-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ILc2lnyRgik?si=iuxWAdy50ll1V6iy"
                title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>
            <div class="right-content">
              <p class="red-text">
              This is a national emergency that threatens to rob an entire generation of its potential and entrench cycles of poverty.
            </p>
            <img src="../assets/images/curve.svg" alt="Curve Line Image"></img>
            </div>
          </div>

          <div class="lower-section">
            <p>
              The CAIN Educational Resource Centre was born out of the urgent need to break through the barriers of inadequate access to quality education in Nigeria’s most underserved communities. After much deliberation and expert analysis, we embraced a community-centred, data-driven approach, co-created with students, teachers, parents, and local education stakeholders, as the most effective solution. This inclusive process ensured the Centre addressed real needs on the ground. We brought the resource directly into the neighbourhoods where the need was greatest, bypassing bureaucratic hurdles and giving direct access to those who needed it most. Alimosho, Lagos’ largest underserved community with over 2 million residents, became home to this transformative hub.
            </p>
          </div>
        </section>

        {/* Right top- and bottom-short borders */}
        <div class="right-borders">
          <div>
            <img src="../assets/images/top-border.svg" style={{marginTop: '2rem', height: '442px'}}></img>
          </div>
          <div>
            <img src="../assets/images/bottom-border.svg" style={{marginTop: '2rem', height: '242px'}}></img>
          </div>
        </div>
        
        {/* Border ends */}

        <section class="right-column">
          <div class="problem-container">
            <p><span class="red-text title" id="prob-title">the problem:</span><br></br>Nigeria’s education Crisis is a ticking time bomb</p>
          </div>

          <div class="problem-numb">
            <div class="numb-1">
              <p><span class="red-text title">18.3</span><br></br>Million Nigerian children are not in school</p>
            </div>
            <div class="numb-2">
              <p><span class="red-text title">30-40</span><br></br>Million students attend chronically underfunded schools and receive poor-quality education</p>
            </div>
          </div>

          <div class="stats-container" style={{margin: '0 auto'}}>
            <img src="../assets/images/data-schools.svg"></img>
          </div>

          <div class="solution-container">
            <p>
              <span class="red-text title">our solution</span><br></br>A community-centred solution <span class="red-text">targeting Age 10-30, </span>Secondary school students, school leavers, unemployed and underemployed youth
            </p>
          </div>
          <div class="erc-frame">
            <p><span class="red-text title">cain educational resource <br></br> center</span><br></br>A Muliti-purpose facility for education and empowerment.</p>
          </div>
        </section>
      </main>

      {/* First Carousel */}
      <section class="erc-container carousel-container">
        {/* <img class="carousel-nav left" src="../assets/images/left-scroll.svg" /> */}
        <div class="carousel">
          <img src="../assets/images/ERC1.png" alt="Image 1" />
          <img src="../assets/images/ERC2.png" alt="Image 2" />
          <img src="../assets/images/ERC3.png" alt="Image 3" />
          <img src="../assets/images/ERC1.png" alt="Image 1" />
          <img src="../assets/images/ERC2.png" alt="Image 2" />
          <img src="../assets/images/ERC1.png" alt="Image 3" />
        </div>
        {/* <img class="carousel-nav right" src="../assets/images/right-scroll.svg" /> */}
      </section>

      {/* First Carousel Ends */}

      <section class="erc-container outcome-container">
        <div class="outcome-top-container">
          <div class="title red-text report-title-t">the outcomes since inception</div>
          <div class="outcome-data-report">
            <img src="../assets/images/notification.svg" alt="Notification Bell"></img>
            <div class="outcome-data-p"><a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024<br></br> Annual Report <b>HERE</b></a></div>
          </div>
        </div>

        <div class="report-wrap">
          <div class="report-content container-1">
            <img src="../assets/images/people.svg" alt=""></img>
            <div className="report-p"><span id="title">3,600+</span><br></br>Total Beneficiaries</div>
          </div>

          <div class="report-content container-2">
            <img src="../assets/images/data.svg" alt=""></img>
            <div className="report-p"><span id="title">9+</span><br></br>Impactful Programs Hosted</div>
          </div>

          <div class="report-content container-3">
            <img src="../assets/images/increment.svg" alt=""></img>
            <div className="report-p"><span id="title">59%</span><br></br>Average Academic Improvement amongst students</div>
          </div>

          <div class="report-content container-4">
            <img src="../assets/images/computer.svg" alt=""></img>
            <div className="report-p"><span id="title">62%</span><br></br>Increase in computer proficiency amongst students</div>
          </div>
        </div>
      </section>

      {/* Facility starts */}

      <section class="erc-container outcome-container">
        <div class="title red-text">facility overview:</div>

        <div class="container-wrap">
          <div class="report-content container-1">
            <img src="../assets/images/classroom.svg" alt=""></img>
            <div className="report-p">2 Classrooms</div>
          </div>

          <div class="report-content container-2">
            <img src="../assets/images/computer-black.svg" alt=""></img>
            <div className="report-p">1 Digital Skills Lab</div>
          </div>

          <div class="report-content container-3">
            <img src="../assets/images/library.svg" alt=""></img>
            <div className="report-p">1 Library</div>
          </div>

          <div class="report-content container-4">
            <img src="../assets/images/people-sitting.svg" alt=""></img>
            <div className="report-p">1 Seminar Room</div>
          </div>

          <div class="report-content container-4">
            <img src="../assets/images/people-playing.svg" alt=""></img>
            <div className="report-p">1 Recreational ground</div>
          </div>

          {/* Facility Ends */}

        </div>
      </section>

      {/* Second Carousel */}
      {/* <section class="erc-container carousel-container">
        <img class="carousel-nav left" src="../assets/images/left-scroll.svg" />
        <div class="carousel">
          <img src="../assets/images/cr-1.png" alt="Image 1" />
          <img src="../assets/images/cr-2.png" alt="Image 2" />
          <img src="../assets/images/cr-3.png" alt="Image 3" />
          <img src="../assets/images/cr-1.png" alt="Image 1" />
          <img src="../assets/images/cr-2.png" alt="Image 2" />
          <img src="../assets/images/cr-3.png" alt="Image 3" />
        </div>
        <img class="carousel-nav right" src="../assets/images/right-scroll.svg" />
      </section> */}

      {/* Second Carousel Ends */}

      {/* Testimonial Section starts */}

      <section class="erc-container testimonial-container">
        <div class="title red-text">testimonial</div>
        <div class="testimonial-content">
          <div class="testimonial-img">
            <img src="../assets/images/test-img.png"></img>
          </div>
          <div class="testimonial-p">
            <span class="test-title">They Didn’t Just Change My Circumstances, They Changed My Life</span><br></br>
            <div class="testimonial-quot" style={{marginTop: '1.2rem'}}>
              <img src="../assets/images/quot.png" alt="Double Quote"></img>
            </div>
            I first encountered CAIN during my undergraduate years, introduced by a friend I met on the street. I didn’t have access to a conducive study space or a functioning laptop, so I took full advantage of their well-equipped library and top-tier IT resources. I used them to attend virtual interviews, complete applications, and prepare for my entire CIPM professional exams. <br></br>Today, I proudly stand as a Chartered Human Resource Professional, and one of those interviews led to a full-time role at Coronation Assurance Limited — one of Nigeria’s leading insurance companies.
            <div class="testimonial-footer"><i><b>Joseph Ibitoye,</b> Chartered HR Professional and a proud product of CAIN Africa’s Educational Resource Centre.</i></div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Ends */}

      {/* Core Values Starts */}

      <section class="erc-container core-v-container">
        <div class="title red-text core-v-title">core values of the educational centre</div>

        {/* First Row */}

        <div class="core-v-wrap">
          <div class="core-row-1">
            <div class="core-item core-item-1">
              <div class="core-img-1">
                <img src="../assets/images/key.svg"></img>
              </div>
              <div class="core-item-content">
                <div class="core-item-title">radical access</div>
                <div class="core-item-p">We meet learners where they are — and take them where they dream to be.</div>
              </div>
            </div>

            <div class="core-item core-item-2">
              <div class="core-img-2">
                <img src="../assets/images/peoples-change.svg"></img>
              </div>
              <div class="core-item-content">
                <div class="core-item-title">life-changing learning</div>
                <div class="core-item-p">We don’t just educate — we empower for life.</div>
              </div>
            </div>

            <div class="core-item core-item-3">
              <div class="core-img-3">
                <img src="../assets/images/equity.svg"></img>
              </div>
              <div class="core-item-content" style={{marginLeft: '1.5rem'}}>
                <div class="core-item-title">equity over charity</div>
                <div class="core-item-p">We don’t hand out help. We build pathways to dignity.</div>
              </div>
            </div>
          </div>
        
          {/* Second Row */}
          <div class="core-row-2">
            <div class="core-item core-item-4">
              <div class="core-img-4">
                <img src="../assets/images/globe-curve.svg"></img>
              </div>
              <div class="core-item-content" style={{marginLeft: '1.5rem'}}>
                <div class="core-item-title">Hyperlocal and Globally Relevant</div>
                <div class="core-item-p">Rooted in the community. Aligned with global best practices.</div>
              </div>
            </div>

            <div class="core-item core-item-5">
              <div class="core-img-5">
                <img src="../assets/images/partnership.svg"></img>
              </div>
              <div class="core-item-content" style={{marginLeft: '1.5rem'}}>
                <div class="core-item-title">Scalable Impact Through Collaboration</div>
                <div class="core-item-p">It takes a village — and we build one around every child.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values Ends */}

      {/* Programs Start */}

      <section class="erc-container main-container programs-main-container">
        <div class="left-col programs programs-r-col">
          <div class="left-col-p">
              The CAIN Educational Resource Centre is home to our programs and interventions. These programs are purposefully designed to unlock the potential of underprivileged students, bridging the gap in quality education and equipping them with the skills and confidence to break free from poverty and thrive globally. <br></br>Our core programs include: 
          </div>

          <div class="left-col-p">
            <span class="programs-title">Daily Academic Tutorials</span><br></br>Every year, <strong>120 students</strong> receive free, high-quality Mathematics and English lessons through our Daily Tutorials. They are building foundational skills essential for lifelong learning and economic independence. This tailored support has led to a <strong>59%</strong> average increase in academic performance of beneficiaries. <a href="">Explore more.</a>
          </div>

          <div class="left-col-p">
            <span class="programs-title">Digital Skills Training</span><br></br>Since the program’s launch in 2024,<strong> 23 students,</strong>  most of whom had never touched a computer, now navigate the digital world confidently, mastering skills from coding and data analysis to design and generative AI tools. With an 62% increase in computer proficiency, our ICT4U Program is setting them up for success in the digital economy. <a href="https://www.cainafrica.org/#/projects/ict4u">Explore more.</a>
          </div>

          <div class="left-col-p">
            <span class="programs-title">Career Enrichment Program</span><br></br>Through engaging webinars and virtual meetups,<strong> 208 students</strong>  have gained mentorship from 11 distinguished professionals, including Microsoft engineers and a Harvard scholar. This exposure has broadened their horizons, helping them make informed career choices and aim higher. <a href="https://www.cainafrica.org/#/projects/career-enrichment-program">Explore more.</a>
          </div>

          <div class="left-col-p">
            <span class="programs-title">The Library Initiative</span><br></br>With<strong> 298 registered users</strong>  and counting, our well-stocked library offers a sanctuary for learning, research, and personal growth, free of cost. It’s a space where students and professionals alike find the resources and focus they need. <a href="https://www.cainafrica.org/#/projects/project-library">Discover the library.</a>
          </div>

          <div class="left-col-p">
            <span class="programs-title">Mentorship for Life and Leadership</span><br></br>24 students have experienced life-changing one-on-one mentorship, receiving guidance on education, career, and leadership. This tailored support has bolstered their confidence, goal-setting, and critical thinking skills.
          </div>
        </div>

        {/* Border */}
        {/* <div class="right-borders"> */}
          <div>
            {/* <img src="../assets/images/line1.svg" style={{height: 'auto'}}></img> */}
          </div>
          <div>
            {/* <img src="../assets/images/line2.svg" style={{height: '700px'}}></img> */}
          </div>
        {/* </div> */}
        {/* Border ends */}

        <div class="right-col programs-right-col">
          <div class="title red-text" style={{textAlign: 'center'}}>programs and impact</div>

          <div class="programs-wrap">
            <div class="main-program">
              <div class="program-title">daily tutorial</div>
              <div class="program-content-wrap">
                <div class="program-content">
                  <div class="program-content-img"><img src="../assets/images/beneficiaries.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">1000</span><br></br>Beneficiaries</div>
                </div>

                <div class="program-content">
                  <div class="program-content-img"><img src="../assets/images/economic-growth.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">59%</span> Average Academic Improvement</div>
                </div>
              </div>
            </div>

            <div class="main-program">
              <div class="program-title">digital skills training</div>
              <div class="program-content-wrap">
                <div class="program-content">
                  <div class="program-content-img"><img src="../assets/images/beneficiaries.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">33</span><br></br>Beneficiaries</div>
                </div>

                <div class="program-content">
                  <div class="program-content-img"><img src="../assets/images/economic-growth.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">80%</span> Increase in proficiency</div>
                </div>
              </div>
            </div>

            <div class="main-program">
              <div class="program-title">career enrichment program</div>
              <div class="program-content-wrap">
                <div class="program-content">
                  <div class="program-content-img"><img src="../assets/images/beneficiaries.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">208</span><br></br>Beneficiaries</div>
                </div>

                <div class="program-content">
                  <div class="program-content-img"><img src="../assets/images/professional.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">11</span> Professionals from Diverse Fields</div>
                </div>
              </div>
            </div>

            <div class="main-program library">
              <div class="program-title">the library initiative</div>
              <div class="program-content-wrap">
                <div class="program-content" style={{width: '100%'}}>
                  <div class="program-content-img"><img src="../assets/images/person-reading.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">298</span><br></br>Registered Users</div>
                </div>
              </div>
            </div>

            <div class="main-program">
              <div class="program-title">mentorship program</div>
              <div class="program-content-wrap">
                <div class="program-content">
                  <div class="program-content-img"><img src="../assets/images/mentorship-beneficiaries.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">24</span><br></br>Beneficiaries</div>
                </div>

                <div class="program-content">
                  <div class="program-content-img"><img src="../assets/images/economic-growth.svg"></img></div>
                  <div class="program-content-p"><span class="program-content-title">98%</span><br></br>Satisfaction rate</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Third Carousel */}
      {/* <section class="erc-container carousel-container">
        <img class="carousel-nav left" src="../assets/images/left-scroll.svg" />
        <div class="carousel">
          <img src="../assets/images/cr-1.png" alt="Image 1" />
          <img src="../assets/images/cr-2.png" alt="Image 2" />
          <img src="../assets/images/cr-3.png" alt="Image 3" />
          <img src="../assets/images/cr-1.png" alt="Image 1" />
          <img src="../assets/images/cr-2.png" alt="Image 2" />
          <img src="../assets/images/cr-3.png" alt="Image 3" />
        </div>
        <img class="carousel-nav right" src="../assets/images/right-scroll.svg" />
      </section> */}
      {/* Third Carousel Ends */}

      {/* Project Phases Section Starts */}

      <section class="erc-container project-phase-container">
        <div class="title red-text">project phases and budget</div>

        <div class="pr-details">
          <div class="pr-table">
          <table class="pr-table" border="2">
            <thead style={{textTransform: 'uppercase', fontWeight: '700'}}>
              <td>phase</td>
              <td>description</td>
              <td>status</td>
              <td>budget</td>
            </thead>
            
            <tr>
              <td>Phase 1</td>
              <td>Property acquisition for the Educational Center</td>
              <td> Completed (2016–2017)</td>
              <td>$45,000</td>
            </tr>
            
            <tr>
              <td>Phase 2</td>
              <td>Property renovation and restructuring</td>
              <td> Completed (2018–2019)</td>
              <td>$35,000</td>
            </tr>

            <tr>
              <td>Phase 3</td>
              <td>Full equipping of learning, digital & support spaces</td>
              <td> In Progress (2019–Present)</td>
              <td>$80,000</td>
            </tr>
          </table>
        </div>
        {/* Table ends */}

        <div class="project-r-col">
          <img src="../assets/images/ERC-c.png" alt="Building during the three project phases"></img>
        </div>
        </div>

      </section>
      {/* Project Phases Section Ends */}

      <section class="erc-container fp-container">
        <div class="title red-text">future plans</div>

        <div class="fp-wrap">
          <div class="fp-content-wrap content-rw-1">
            <div class="fp-content fp-rw-1">
              <div class="fp-content-img">
                <div class="fp-num">1</div>
                <img src="../assets/images/solar-panel.png" alt="Solar Panel" ></img></div>
              <div class="fp-content-p">
                <span class="title">Solar Power Upgrade</span><span class="icon"><img src="../assets/images/right-arrow-fill.svg"></img>$15,000</span><br></br><span class="sub-title"><i>Transition to sustainable solar energy</i></span>
              </div>
            </div>
            <div class="fp-content fp-rw-2">
              <div class="fp-content-img">
                <div class="fp-num">2</div>
                <img src="../assets/images/library-tech.png" alt="Solar Panel"></img></div>
              <div class="fp-content-p">
                <span class="title">Library Tech Upgrade</span><span class="icon"><img src="../assets/images/right-arrow-fill.svg"></img>$20,000</span><br></br><span class="sub-title"><i>Add 20 laptops and headsets, furniture and digital tools for digital learning and research.</i></span>
              </div>
            </div>
          </div>

          <div class="fp-content-wrap content-rw-2">
            <div class="fp-content fp-rw-1">
              <div class="fp-content-img">
                <div class="fp-num">3</div>
                <img src="../assets/images/digital-lab.png" alt="Solar Panel"></img></div>
              <div class="fp-content-p">
                <span class="title">Digital Lab Expansion</span><span class="icon"><img src="../assets/images/right-arrow-fill.svg"></img>$20,000</span><br></br><span class="sub-title"><i>Add 17 laptops and headsets, furniture and digital learning tools </i></span>
              </div>
            </div>
            <div class="fp-content fp-rw-2">
              <div class="fp-content-img">
                <div class="fp-num">4</div>
                <img src="../assets/images/smart-class.png" alt="Solar Panel"></img></div>
              <div class="fp-content-p">
                <span class="title">Smart Classrooms</span><span class="icon"><img src="../assets/images/right-arrow-fill.svg"></img>$5,000</span><br></br><span class="sub-title"><i>Upgrade 2 classrooms with better furniture and learning tech.</i></span>
              </div>
            </div>
          </div>
        </div>
          
      </section>
    </div>
  );
};

export default ProjectERC;
