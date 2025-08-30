import React from 'react';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostIframe, PostIframeWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import ICT4U1 from '../images/ICT4U/ICT4U_1.jpeg';
import ICT4U from '../images/ProjectsData/ICT4U.jpg';
import ICT43 from '../images/ICT4U/ICT4U_3.jpeg';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projects.jpg';

const ProjectICT = (props) => {


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
                    <PostHeader>ICT4U (ICT for Underserved Students)</PostHeader>
                    <PostParagraph>
                        The International Finance Corporation projects that by 2030, over <strong>230 million jobs in Sub-Saharan Africa will require digital skills.</strong> Yet, according to the UNDP, <strong>90% of African children graduate without basic digital competencies,</strong> while MIF reports that <strong>89% lack access to computers.</strong> With only half of African countries including computer skills in their curriculum, the result is a rapidly widening digital divide.
                        <br /><br />
                        For Africa, this gap is not just a statistic; it is a critical barrier to <strong>economic mobility and global workforce readiness,</strong> especially for underprivileged African youths trapped in poverty.
                        <br />
                        <br />
                        <strong style={{color: "red", fontSize: "1.5rem"}}>Our Response</strong>
                        <br />
                        The ICT4U (ICT for Underserved Students) Program is CAIN Africa’s bold response to this urgent challenge. We equip underserved youth, aged 10–18, in the Alimosho community of Lagos, with <strong>future-proof digital literacy and high-demand technical skills.</strong> Our goal is simple but powerful: to ensure that <strong>background never determines potential.</strong>  
                        <br /><br />
                        Our Digital Skills Lab is located in the <strong>CAIN Educational Resource Centre.</strong> The Lab offers a safe space with solar-powered surveillance system, high-speed internet, and modern digital tools. Students gain access to structured training, mentorship, and the resources they need to thrive in an increasingly digital world.
                        <br /><br />
                        <strong style={{color: "red", fontSize: "1.5rem"}}>Current Progress</strong>
                        <br/>
                        Thanks to the generous support of partners, including <b>Google and Microsoft employees and The M. Kukoyi Foundation</b>, we have raised over <b>$24,000</b> to establish and run the <b>ICT4U Program</b>. These funds have been strategically invested in setting up a modern ICT training hub at the <b>CAIN Educational Resource Centre</b>, providing students with a safe, secure, and fully equipped learning environment.
                        <br /><br />
                        Our investments to date include:
                        <ul>
                            <li><strong>17 workstation spaces</strong> (16 for students, 1 for instructor).</li>
                            <li><strong>7 laptops:</strong> 4 HP Victus (16GB/512GB, NVIDIA Core i5) and 3 HP ProBook 440 G10.</li>
                            <li><strong>7 JBL noise-cancelling headphones</strong> for immersive learning.</li>
                            <li><strong>1 MTN 5G router</strong> for high-speed connectivity.</li>
                            <li><strong>58” Smart television, movable whiteboard holder,</strong> and <strong>TV guard</strong> for instruction.</li>
                            <li><strong>Inverter system with 4 solar panels, Tubular Orbit 220ah battery, charge controller, and rack</strong> ensuring steady power.</li>
                            <li><strong>Fire and safety systems:</strong> 3 DCP fire extinguishers, 1 CO2 extinguisher, 2 fireball extinguishers, 7 smoke detectors, and an emergency exit door.</li>
                            <li><strong>24-channel CCTV monitoring system</strong> for 24/7 safety.</li>
                            <li><strong>1 digital fireproof cabinet</strong> with secure compartments.</li>
                            <li><strong>Hiring of ICT Instructor, Cleaner, and Security Guard</strong> to ensure program delivery, maintenance, and security.</li>
                        </ul>
                        <strong style={{color: "red", fontSize: "1.5rem"}}>What We’ve Achieved With This Investment</strong>
                        <br />
                        Even with limited capacity, the impact has been remarkable:
                        <ul>
                            <li><strong>33 students trained</strong> in digital literacy so far.</li>
                            <li><strong>3 advanced into specialized tech training.</strong></li>
                            <li><strong>1 student secured full-time employment.</strong></li>
                            <li><strong>1 student accepted into the Microsoft-backed Women Techsters Fellowship.</strong></li>
                            <li><strong>100+ students used the lab</strong> for study, job applications, and interviews.</li>
                        </ul>
                        With just <strong>7 laptops</strong> and limited resources, we are already transforming lives — and with full expansion, the possibilities are even greater.
                        <br /><br />
                        <strong style={{color: "red", fontSize: "1.5rem"}}>Expansion Plan</strong>
                        <br />
                       Our vision is to scale the <b>ICT4U Program</b> by expanding the digital lab to include 21 laptops and headsets, enabling us to train and empower over 500 students each year through both short-term (3-month) and long-term (12-month) tracks.
                        <br /><br />
                        To achieve this, we need to complete the furnishing of the ICT4U Lab with the following:
                        <ul>
                            <li><strong>14 additional laptops & headsets</strong> (to bring total to 21).</li>
                            <li><strong>Starlink Internet</strong> for steady high-speed broadband.</li>
                            <li><strong>Solar power upgrade</strong> to ensure uninterrupted power supply.</li>
                            <li><strong>Central CAIN Server</strong> for secure storage, backup, and network management.</li>
                            <li><strong>Learning management systems & EdTech applications</strong> to enhance teaching efficiency.</li>
                        </ul>
                        <strong style={{color: "red", fontSize: "1.5rem"}}>The Cost of Transformation</strong>
                        <br />
                        The total cost to fully scale the ICT4U Program, expand the digital lab’s capacity, and reach over 500 underserved youth annually is <b>$40,000.</b>
                        <br />
                        Here’s what your support can do:
                        <ul>
                            <li><strong>$28</strong> → Sponsors <b>one student for a month</b> of digital training, mentorship, and access to premium learning resources.</li>
                            <li><strong>$330</strong> → Sponsors <b>one student for a year</b> of digital training, mentorship, and access to premium learning resources.</li>
                            <li><strong>$40,000</strong> → Powers the <b>entire expansion</b>, ensuring <b>500+</b> underserved <b>students</b> gain life-changing access <b>every year</b>.</li>
                        </ul>
                        <strong style={{color: "red", fontSize: "1.5rem"}}>Why It Matters</strong>
                        <br />
                        Behind the numbers are real lives:
                        <ul>
                            <li>Elizabeth, a high school dropout, went <b>from zero digital knowledge to confidently coding websites in 3 months.</b></li>
                            <li>Ijeoma, who touched a computer for the first time at our Lab, is now <b>training as a front end developer at a Microsoft-backed fellowship for women.</b></li>
                            <li>Joseph, once without a laptop or quiet study space, is now a <b>Chartered HR professional working full-time at Coronation Assurance.</b></li>
                        </ul>
                        These stories remind us that access changes everything. With your partnership, ICT4U Program will continue unlocking brilliance in overlooked places and give underprivileged students the tools to escape poverty and lead successful lives.
                        <div class="donate-button">
                            <button class="donate-footer-btn" type="submit">
                                <a href="https://www.cainafrica.org/donate" target="_blank" rel="noopener noreferrer">donate</a>
                            </button>
                        </div>
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <PostIframeWrapper style={{marginBottom: '5rem'}}>
                        <div class="pr-impact-container">
                            <div class="pr-impact-num pr-impact-ict">
                                <div class="pr-impact-content">
                                    <span id="impact-content-title">33</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Students empowered through the ICT4U Program.</span>
                                </div>
                                <div class="pr-impact-content">
                                    <span id="impact-content-title">62%</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Average increase in computer knowledge and proficiency.</span>
                                </div>
                            </div>

                            <div class="outcome-data-report pr-data-report">
                                <img src="../assets/images/notification.svg" alt="Notification Bell"></img>
                                <div class="outcome-data-p"><a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024<br></br> Annual Report <b>HERE</b></a></div>
                            </div>

                            <div class="pr-testimonial-content">
                                <div class="pr-testimonial-media testimonial-image pr-ict-media"></div>
                                <div class="pr-testimonial-data">3 months ago, I couldn’t even turn on a computer, I can’t explain how I am now writing codes and designing websites, it still feels like a dream.<div class="pr-testimonial-footer"><i><strong>Elizabeth Adepoju,  </strong>Beneficiary</i></div></div>
                            </div>
                        </div>
                    </PostIframeWrapper>

                    <PostIframeWrapper>
                        <PostIframe
                        src="https://www.youtube.com/embed/bzFdTN9LXNM?si=ctjOqQHqF-eS3ibD"
                        title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </PostIframe>
                    </PostIframeWrapper>
                    <SingleImage>
                        <PostImage className="ict-post-image" src={`${ICT4U1}`} />
                        <i style={{padding: '1rem 0'}}>Peer mentorship</i>
                    </SingleImage>
                    
                    <SingleImage>
                        <PostImage src={`${ICT4U}`}/>
                        <i style={{padding: '1rem 0'}}>Our laptops for classes.</i>
                    </SingleImage>

                    <SingleImage>
                        <PostImage src={`${ICT43}`}/>
                        <i style={{padding: '1rem 0'}}>Students learning in one of the ICT4U classes.</i>
                    </SingleImage>

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectICT;
