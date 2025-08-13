import React from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage,TextWrapper, TopParaText, MemberMother, FlipContainerMember, HeadingTwo, Position, Bio, Obilana, Princess, Bamidele, Abiodun} from './StyledComponents.js';
import Toolbar from './Toolbar/Toolbar.js';
import TeamCover from '../images/Our Team/TeamBanner.jpg';

function OurMembers(props) {

    return(
        <>
            <TopImage style={{backgroundImage: `url(${TeamCover})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>“REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO</TopParaText>
                </TextWrapper>
            </TopImage>

            <MemberMother>
                <HeadingTwo>Educational Staff</HeadingTwo>
                <FlipContainerMember>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Obilana> </Obilana> 
                            <Position>
                                Obilana Oluwatosin Hannah
                                <br/>
                                <i>Educator</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            With over 12 years of teaching experience, Oluwatosin is a dedicated educator who believes in educating students with love, creating a long-lasting impression and aiding knowledge retention. <br/> <br/> She holds an NCE in Mathematics/Computer Science and is currently studying Mathematics Education at Lagos State University (LASU). Her passion for education and leadership skills are evident in her roles as a Mathematics tutor at CAIN and Headteacher at GreatBuilders Private School. In addition to her teaching career, Oluwatosin is a product designer (UI/UX) and an avid reader and curious learner. 
                            <br/> <br/> She is known for her influential leadership style, leading with confidence and tackling even the most difficult and complex challenges with unwavering perseverance and commitment to success. She is a passionate advocate for effective teaching and good classroom management, reflecting her dedication to the education of young people.
                            </Bio>
                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Bamidele> </Bamidele> 
                            <Position>
                                Bamidele David Oluwafemi
                                <br/>
                                <i>Educator</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Bamidele David Oluwafemi, a native of Kogi State in Nigeria's north-central region, is a dedicated professional English Tutor. He earned his Bachelor's degree in Cyber Security Science from the Federal University of Technology Minna, and driven by his passion for the English language, pursued additional certificates in English from Alison Institution. 
                            <br/> <br/> Currently, Femi serves as the Head of Teachers in the English Department at MARKIN GRACE COLLEGE in Isheri Osun, Lagos State. With over a decade of experience teaching English, he has become a pillar of educational excellence and leadership. <br/> <br/> Femi's commitment to education extends beyond formal settings. As an English Tutor at CAIN, he is devoted to enhancing literacy and fostering a positive attitude toward education in underprivileged African communities. He recognizes the challenge of shifting the perception of education in societies where it is often undervalued. His unwavering dedication to making education accessible to all makes him a valuable asset in the pursuit of quality education for every child. <br/> <br/> Femi's impressive background and steadfast commitment to education underscore his significant contributions to the growth and development of young minds.
                            </Bio>
                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Princess> </Princess> 
                            <Position>
                                Princess Ashibuogwu
                                <br/>
                                <i>Educator</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Princess Ashibuogwu is an award-winning English Language educator whose innovative teaching has transformed learning outcomes for over 100 students in rural Nigerian communities. Recognized as Best Teacher of the Year (2023/2024), she is celebrated for her ability to bridge learning gaps, inspire curiosity, and instill lifelong communication skills in her students.
                            <br/> <br/> With a deep commitment to UN Sustainable Development Goal 4 – Quality Education, Princess designs inclusive learning experiences that meet the needs of underserved learners, ensuring they not only master the English language but also develop confidence, critical thinking, and creativity. Under her guidance, students have achieved remarkable improvements in literacy rates, exam performance, and public speaking abilities—opening doors to higher education and wider career opportunities.<br/> <br/> Her classroom is a hub of innovation, where traditional instruction is enriched with interactive methods, real-life applications, and student-led projects. This approach has sparked measurable academic progress and nurtured resilience among students who often face economic and social barriers to education.
                            <br/> <br/> Beyond the classroom, Princess serves as a mentor and role model, empowering young people—especially girls—to break cycles of limitation and aspire to leadership. Her work continues to demonstrate that quality education is not a privilege, but a right, and she remains dedicated to ensuring every student she teaches is equipped to thrive in an interconnected, competitive world.
                            </Bio>
                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Abiodun> </Abiodun> 
                            <Position>
                                Abiodun Andero
                                <br/>
                                <i>Educator</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Andero Abiodun is a skilled Mathematics Educator, Statistician, and Data Analyst with a deep passion for teaching and imparting knowledge. His educational journey began at Multi-Grace Primary and Secondary School in Alimosho, followed by obtaining his Senior Secondary School Certificate at Millennium Secondary School in Egbeda, Lagos.
                            <br/> <br/> Andero holds a Higher National Diploma in Statistics from the Federal Polytechnic Ado-Ekiti and a Postgraduate Diploma in Education from the National Teachers Institute, affiliated with the University of Ilorin. <br/> <br/> Demonstrating a commitment to societal impact, Andero served as the President of the NDLEA Club in Dutse, Jigawa State.
                            <br/> <br/> Andero has taught Mathematics at various institutions and colleges and has been a Mathematics Tutor at CAIN since 2022, as well as at HoneyLand College in Ipaja, Lagos. His dedication to teaching, coupled with his expertise in Mathematics Education, Statistics, and Data Analysis, makes him an invaluable asset.
                            </Bio>
                        </BackSide>
                    </Flippy>

                </FlipContainerMember>
            </MemberMother>
        </>
    )
}

export default OurMembers;
