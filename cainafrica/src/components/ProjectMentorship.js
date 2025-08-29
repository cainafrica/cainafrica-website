import React from 'react';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, PostIframeWrapper, SingleImage} from './StyledComponents.js';
// import Mentorship_3 from '../images/Mentorship/Mentorship-6.jpg';
import Mentorship_2 from '../images/Mentorship/Mentorship-12.jpg';
// import Unstuck_1 from "../images/Unstuck/Unstuck_1.png"
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projects.jpg';

const ProjectMentorship = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>
            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>The Mentorship Program</PostHeader>
                    <PostParagraph> 
                        In underserved African communities, many students grow up surrounded by the limitations of poverty, lack of exposure, and minimal access to role models who can help shape their vision of what’s possible. At CAIN Africa, we believe mentorship is one of the most powerful tools to bridge this gap, nurturing not only potential but also purpose.
                        <br /><br />
                      The program is personally led by our Founder and CEO, May Asagba, whose hands-on approach has helped inspire confidence and transformation in every student mentored. Since inception, <b>24 students</b> have benefited from tailored one-on-one mentorship, with an outstanding <b>98% satisfaction rate</b>.
                        <br /><br />

                        Through a carefully curated curriculum, mentees are introduced to critical life-shaping concepts such as:
                        <br />
                        <ul>
                            <li><b>Setting SMART goals</b> and creating actionable plans to achieve them</li>
                            <li><b>The importance of relationships and networking</b> for growth</li>
                            <li><b>Navigating influence and peer pressure</b> with self-awareness and discipline</li>
                            <li><b>Going the extra mile</b>—embracing excellence and building a standout personal brand</li>
                        </ul>

                        Each session is designed to open their eyes to new possibilities, build resilience, and prepare them to lead lives filled with purpose, achievement, and impact.
                        <br />
                        <h2>Become a Mentor</h2>
                        You can be part of this powerful transformation. We are calling on professionals, thought leaders, and changemakers who are passionate about youth development to take on one or more mentees. Your experience can shape a future—and change a life.
                        <br /><br />
                        <a style={{color: 'red', textDecoration: 'underline'}} href='https://bit.ly/3XXirs6' target='_blank'>Register here to become a mentor.</a>
                        <br></br><br></br>
                        Together, let’s raise a generation of bold, brilliant, and future-ready African leaders.
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <PostIframeWrapper style={{marginBottom: '5rem'}}>
                        <div class="pr-impact-container">
                            <div class="pr-impact-num pr-impact-ict">
                                <div class="pr-impact-content">
                                    <span id="impact-content-title">24</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Students have Benefitted from the program.</span>
                                </div>
                                <div class="pr-impact-content">
                                    <span id="impact-content-title">98%</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Satisfaction rate among program beneficiaries </span>
                                </div>
                            </div>
                    
                            <div class="outcome-data-report pr-data-report">
                                <img src="../assets/images/notification.svg" alt="Notification Bell"></img>
                                                    <div class="outcome-data-p"><a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024<br></br> Annual Report <b>HERE</b></a></div>
                            </div>
                    
                            <div class="pr-testimonial-content">
                                <div class="pr-testimonial-media testimonial-image pr-mentorship-media"></div>
                                <div class="pr-testimonial-data">The mentorship program taught me to believe in myself and not be limited by my background. I’ve learned to always stay prepared, and when opportunities come, to be bold enough to take the shot and go for the big ones.<div class="pr-testimonial-footer"><i><strong>Olatunbosun Mary-Clara,  </strong>Beneficiary</i></div></div>
                            </div>
                        </div>
                    </PostIframeWrapper>
                    {/* <SingleImage>
                        <PostImage src={`${Mentorship_3}`} />
                        <i style={{padding: '1rem 0'}}>Proposed learning mode.</i>
                    </SingleImage> */}
                    
                    <SingleImage>
                        <PostImage className='mentorship-image' src={`${Mentorship_2}`}/>
                        <i style={{padding: '1rem 0'}}>The First cohort of the Mentorship Program posing with the Founder and CEO as they graduate from the program</i>
                    </SingleImage>

                    {/* <SingleImage>
                        <PostImage src={`${Mentorship_1}`}/>
                        <i style={{padding: '1rem 0'}}>A student learning web design.</i>
                    </SingleImage> */}

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectMentorship;
