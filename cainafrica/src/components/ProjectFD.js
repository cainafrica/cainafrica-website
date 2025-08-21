import React from 'react';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostIframe, PostIframeWrapper, PostHeader, PostParagraph, MediaWrapper} from './StyledComponents.js';
// import FoodDriveCover from '../images/ProjectsData/FoodDriveCover.png';
// import FoodDrive from '../images/ProjectsData/FoodDrive.png';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projects.jpg';

const ProjectFD = (props) => {


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
                    <PostHeader><a className="program-titles"  href='https://www.thisdaylive.com/2025/01/06/christmas-relief-for-267-people-cain-africa-distributes-food-packages-to-50-families/' target='_blank'>Monthly Food Drive: Feeding Underprivileged Families</a></PostHeader>
                    <PostParagraph>
                        At CAIN Africa, our mission is clear, <b>to make quality education and digital skills empowerment accessible to underprivileged African children.</b> But over time, we've come to understand a deeper truth: education does not happen in isolation.
                        <br /><br />
                        Children cannot focus in classrooms when hunger is louder than the teacher’s voice. They cannot pursue excellence when their families are struggling to meet their most basic needs.
                        <br /><br />
                       This is why we launched our <b>Monthly Food Drive</b>, which is a vital intervention that supports families in need with essential food supplies, helping to create the kind of stable home environment that makes learning possible.
                        <br /><br />
                        Since inception, the program has reached over <b>416 individuals from 113 families</b>, giving them more than just food; it gives their children a better shot at staying in school, focusing in class, and thriving academically. With each edition of the program, we’re helping bridge the gap between poverty and opportunity.
                        <br /><br />
                        We are grateful to <b>Sandra Duke Catering</b> for their partnership in making this possible, and we continue to call on more donors and stakeholders to join us in this crucial work.
                        <br></br><br></br>
                        <strong>Children shouldn’t learn on an empty stomach</strong>
                        <br /><br />
                        <b>$20/year</b> – Provides nutritious food support to a struggling family, easing the weight of hunger and giving the children the strength to focus on school and not where their next meal is comiung from. <br /><i>(Use the remark: <b>CAINLibraryMonthly</b> when donating).</i>
                        <br /><br />
                        <b>$240/year</b> – Sponsors food support for 12 underprivileged families, ensuring their children are not left hungry but have the strength, and dignity to keep learning and dreaming. <br /><i>(Use the remark: <b>CAINLibraryMonthly</b> when donating).</i>
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <div class="pr-impact-container">
                        <div class="pr-impact-num pr-impact-ict">
                            <div class="pr-impact-content">
                            <span id="impact-content-title">416</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Individuals from 113 families were supported with food.</span>
                            </div>
                            <div class="pr-impact-content">
                            <span id="impact-content-title">10</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Editions of the Food Drive has been held since inception.</span>
                            </div>
                        </div>

                        <div class="outcome-data-report pr-data-report">
                            <img src="../assets/images/notification.svg" alt="Notification Bell"></img>
                            <div class="outcome-data-p"><a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024<br></br> Annual Report <b>HERE</b></a></div>
                        </div>

                        <div class="pr-testimonial-content">
                            <div class="pr-testimonial-media testimonial-image pr-fd-media"></div>
                            <div class="pr-testimonial-data">“My husband gives me only ₦3,000 ($1.95) each month to take care of myself and our four children. I sell sachet water just to make ends meet. These food items will go a long way in helping us eat and survive.”<div class="pr-testimonial-footer"><i><strong>Mrs. Adeyemo,  </strong>Parent & Beneficiary</i></div></div>
                        </div>
                    </div>
                    <PostIframeWrapper>
                        <PostIframe
                            src="https://www.youtube.com/embed/a3g5qOC8Uy0?si=hPIYi4LNjBDnbeRK"
                            title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </PostIframe>
                    </PostIframeWrapper>
                    
                    {/* <SingleImage>
                        <PostImage className="cbp-post-image" src={`${FoodDrive}`}/>
                        <i style={{padding: '1rem 0'}}>Some of the beneficiaries of the monthly food drive.</i>
                    </SingleImage> */}

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectFD;
