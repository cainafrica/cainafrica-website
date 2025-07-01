import React from 'react';
import {TopImage, TextWrapper, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage, PostIframeWrapper} from './StyledComponents.js';
// import LibraryInitiative from '../images/Library/Lib1.jpg';
import LibraryInitiative2 from '../images/Library/Lib5.jpg';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projects.jpg';

const ProjectLibrary = (props) => {


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
                    <PostHeader>The CAIN Library Initiative</PostHeader>
                    <PostParagraph>
                        A library is an invaluable resource for students, offering access to a vast array of information and educational materials essential for research, study, and completing assignments. However, many underprivileged students lack access to libraries, as their schools often do not have such facilities, and their homes are typically not conducive to learning. Many students live in crowded conditions, sharing a single room with their families, which leads to constant noise and distractions, severely hindering any chance of self-learning.
                        <br /><br />
                        Understanding the critical role a library plays in a student's educational journey, we established a library at our Educational Resource Center. This facility provides a conducive environment for learning and is well-stocked with a diverse collection of books and educational texts, enabling students to conduct research and study effectively.
                        <br /><br />
                        Since its inception, more than 298 individuals, including students from higher institutions and local community members, have registered to use our library. The response has been overwhelmingly positive, with many expressing their gratitude for the access to educational resources they previously lacked.
                        <br /><br />
                        To maintain and expand our library's collection, we rely on donations of books and financial contributions from individuals and organizations. In 2022, Masobe Books generously donated books to our library, significantly enhancing the variety of materials available to our students. Additionally, this year (2024), the Jeremiah Foundation contributed 85 books, further enriching our collection.
                        <br /><br />
                        Our mission is to provide underprivileged students with the educational resources necessary for their academic growth and success. By creating a supportive learning environment, we aim to bridge the educational gap and offer these students a fighting chance for a better future.
                        <br /><br />
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <PostIframeWrapper>
                        <div class="pr-impact-container">
                            <div class="pr-impact-num pr-impact-ict">
                                <div class="pr-impact-content">
                                    <span id="impact-content-title">298</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Registered Library users, including university students, working professionals, and members of the general public</span>
                                </div>
                                <div class="pr-impact-content">
                                    <span id="impact-content-title">14</span><br></br><span id="impact-content-data-p" clas="ict-impact-data-p">Different genre of books and educational materials available to readers</span>
                                </div>
                            </div>

                            <div class="outcome-data-report pr-data-report">
                                <img src="../assets/images/notification.svg" alt="Notification Bell"></img>
                                <div class="outcome-data-p"><a href="/reports/CAIN 2024 Annual Report.pdf" download="CAIN 2024 Annual Report">Download the CAIN 2024<br></br> Annual Report <b>HERE</b></a></div>
                            </div>

                            <div class="pr-testimonial-content">
                                <div class="pr-testimonial-media testimonial-image pr-lib-media"></div>
                                <div class="pr-testimonial-data">I live in a room apartment with my Daddy and my 4 siblings. Reading at home is very difficult, because we usually don’t have light and it’s not comfortable to read at home. The CAIN Library is where I come to read before going home. <div class="pr-testimonial-footer"><i><strong>Noimot Quadri,  </strong>Beneficiary</i></div></div>
                            </div>
                        </div>
                    </PostIframeWrapper>
                    
                        <SingleImage>
                            <PostImage className="lib-s-image" src={`${LibraryInitiative2}`}/>
                            <i style={{padding: '1rem 0'}}>Group of students reading in the library.</i>
                        </SingleImage>
                    
                    {/* <SingleImage>
                        <PostImage src={`${LibraryInitiative}`} />
                        <i style={{padding: '1rem 0'}}>Group of students reading in the library.</i>
                    </SingleImage> */}
                    
                 

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    );
};

export default ProjectLibrary;
