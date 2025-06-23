import React from 'react';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, OverallWrapper, PostWrapper, PostIframe, PostIframeWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import FoodDriveCover from '../images/ProjectsData/FoodDriveCover.png';
import FoodDrive from '../images/ProjectsData/FoodDrive.png';
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
                    <PostHeader>Monthly Food Drive: Feeding the Underprivileged</PostHeader>
                    <PostParagraph>
                        As part of our unwavering commitment to supporting underprivileged communities, we organize a monthly food drive aimed at alleviating hunger among those struggling to make ends meet. Currently, we are partnered with Sandra Duke Catering, a reputable catering service that shares our vision of providing relief to those in need.
                        <br /><br />
                        Since the inception of the program, we have reached more than 515 individuals from 110 families, highlighting the tangible impact of our efforts. Each month, we identify and support multiple individuals facing significant hardships by providing them with carefully selected food items designed to sustain them and alleviate their struggles.
                        <br /><br />
                        We believe everyone should have access to basic necessities like food, and we are dedicated to bridging this gap. Our gratitude extends to Sandra Duke Catering for their support, and we invite other stakeholders, organizations, and individuals to explore our various projects and programs at CAIN, all aimed at empowering the underprivileged and equipping them with the tools for success and a comfortable life.
                        <br /><br />
                        Join us today and help make a difference in the lives of those who need it the most.
                        <br /><br />
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <div class="pr-impact-container">
                        <div class="pr-impact-num pr-impact-ict">
                            <div class="pr-impact-content">
                            <span id="impact-content-title">315</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Individuals from 68 families were supported with food.</span>
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
                            <div class="pr-testimonial-data">“My husband gives me only ₦3,000 each month to take care of myself and our four children. I sell sachet water just to make ends meet. These food items will go a long way in helping us eat and survive.”<div class="pr-testimonial-footer"><i><strong>Mrs Adeyemo,  </strong>Parent & Beneficiary</i></div></div>
                        </div>
                    </div>
                    <PostIframeWrapper>
                        <PostIframe
                            src="https://www.youtube.com/embed/a3g5qOC8Uy0?si=hPIYi4LNjBDnbeRK"
                            title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </PostIframe>
                    </PostIframeWrapper>
                    
                    <SingleImage>
                        <PostImage className="cbp-post-image" src={`${FoodDrive}`}/>
                        <i style={{padding: '1rem 0'}}>Some of the beneficiaries of the monthly food drive.</i>
                    </SingleImage>

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectFD;
