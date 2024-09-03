import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import projectsCover from '../images/ProjectsData/projectsCover.jpg';
import summerImage2 from "../images/Tutorial/DT4.jpg";
import Image1 from "../images/Tutorial/DT1.jpg"


const ProjectSP2017 = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>PROJECTS</TopHeaderText>
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>

            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>CAIN Daily Tutorial Program</PostHeader>
                    <PostParagraph> 
                        The CAIN Daily Tutorial Program is one of our key areas of intervention which aims to help children from low-income families in the Ikotun/Igando area gain access to high-quality educational resources, introduce them to educational enhancement programs, and equip them with the skills they need to be globally competitive.
                        <br/><br/>
                        Our tutors have used a variety of innovative teaching strategies to aid improved comprehension since the program began in August 2017. Students, for example, learned songs to assist them in solving basic math problems such as multiplication and division. 
                        <br/><br/>
                        Our teachers are also personable, and they work hard to ensure that our pupils have a pleasant learning atmosphere. Students now enjoy every bit of their study to the point where even students who despised mathematics now diligently attend our Mathematics classes, and are doing better with numbers than they were before they enrolled at the tutorials.
                        Other disciplines were also taught using a similar innovative way. At the CAIN Educational Resource Center, students are having a great time learning. Etiquette and good manners are also taught, assisting pupils with their intellectual and social growth. We are producing bright and responsible children who will grow up to be leaders of the better tomorrow that we all hope for.
                        <br/><br/>
                        Four highly competent tutors are teaching Mathematics and English to a total of 120 J.S.S.1 to S.S.S.3 students (20 students from each class). Lessons are held every Monday through Friday from 3:45pm to 6 p.m, and on Saturdays, 10am - 12:30pm. In addition, J.S.S.3 and S.S.S.3 pupils receive particular attention in order to appropriately prepare them for external examinations.
                        In addition, J.S.S.3 and S.S.S.3 pupils receive particular attention in order to appropriately prepare them for external examinations.
                        <br/><br/>
                        This program, as well as our other programs, is free to all students. There are no fees for the pupils to participate. Will you join us as a partner? One child at a time, we will work together to create a brighter future.
                        <br/><br/>
                    </PostParagraph>                
                </PostWrapper>

                <MediaWrapper>
                {/* style={{paddingLeft:"1rem"}} */}
                    {/* <PostIframeWrapper>
                        <PostIframe  width="520" height="315" src="https://www.youtube.com/embed/pvpD_hIAqrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                    </PostIframeWrapper> */}
                    <SingleImage>
                        <PostImage src={`${Image1}`} />
                        <i style={{padding: '1rem 0'}}>
                            Students at the tutorial class</i>
                    </SingleImage>
                    <SingleImage>
                        <PostImage src={`${summerImage2}`} />
                        <i style={{ padding: "1rem 0" }}>
                        Students taking instructions from their tutor
                        </i>
                    </SingleImage>
                </MediaWrapper>
            </OverallWrapper>
        </div>
    )
}

export default ProjectSP2017;
