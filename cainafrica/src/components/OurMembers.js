import React from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage,TextWrapper, TopHeaderText, TopParaText, MemberMother, FlipContainerMember, HeadingTwo, Position, Bio, CEO, Joseph, Chinedu, Abisoye, Gbolahan, Obilana, Princess, Bamidele, Abiodun} from './StyledComponents.js';
import Toolbar from './Toolbar/Toolbar.js';
import TeamCover from '../images/Our Team/TeamBanner.jpg';

function OurMembers(props) {

    return(
        <>
            <TopImage style={{backgroundImage: `url(${TeamCover})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>STAFF</TopHeaderText>
                    <TopParaText>“REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO</TopParaText>
                </TextWrapper>
            </TopImage>

            <MemberMother>
                <HeadingTwo>Staff</HeadingTwo>
                <FlipContainerMember>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <CEO> </CEO> 
                            <Position>
                                May Oghenerukeme Asagba
                                <br/>
                                <i>Chief Executive Officer</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            May is a dynamic social impact leader with a decade-long track record of implementing transformative programs and empowering young change-makers to drive development in underserved African communities.<br/> <br/>At just 21 years old, May founded Catering to Africans In Need (CAIN), a nonprofit organization. As the Founder and CEO of CAIN, she established a FREE multi-purpose educational center in the largest community in Lagos, Nigeria, benefiting over 10,000 individuals. Furthermore, she collaborated with strategic partners to pioneer the establishment of the first school and health clinic in a remote village in central Nigeria, ensuring access to quality education and healthcare.<br/> <br/> May's commitment to service extends beyond her homeland, Nigeria. She previously served as the International Director of Ligandcorp, a startup focused on providing innovative medical devices for developing nations. Additionally, she has contributed her management expertise to aid startups in moving from ideation to implementation while optimizing operational efficiency and effective marketing strategies. As a policy analyst, May conducted extensive research and stakeholder interviews, including with the Ministry of Health and the United Nations, to inform policy decisions in Zambia. <br/> <br/> As a prominent Youth Activist, May brings a wealth of expertise to address educational challenges in underserved communities. Her grassroots activism has garnered international recognition. She has shared her insights at international summits and high-profile consultations with organizations like UNESCO. She has also given a TEDx talk and been featured on BBC, Channels TV, and Business Day.<br/> <br/> May is a distinguished alumna of Cornell University, an Ivy League institution in the U.S., where she graduated with honors in Human Biology, Health, and Society, with a minor in Global Health. She furthered her academic pursuits at Case Western Reserve University, graduating summa cum laude with a master’s degree in Medical Physiology.<br/> <br/>May's research endeavors have yielded impactful publications, including contributions to Elsevier and the Southern African Institute for Policy Analysis and Research. Her professional achievements have earned her global recognition, including selection by UNESCO as a SDG4 Youth Leader and acknowledgment as a 2023 Young Global Changer and one of the top 20 change-makers in Nigeria in 2024.<br/> <br/>May's career spans 10+ transformative programs impacting 100K+ individuals across 10 African communities. She is truly a driving force for positive change!
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

                            <Chinedu> </Chinedu> 
                            <Position>
                                Chinedu Isagbah
                                <br/>
                                <i>Programs Manager</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Chinedu is a highly accomplished lawyer and development expert specializing in Education and Governance. With over a decade of experience driving social impact projects across two continents, he has made significant strides in the development sector.
                            <br/> <br/> Chinedu has a proven track record in Project Management, Critical Policy Formulation, and Monitoring & Evaluation within the development space. As a polymath, he frequently speaks at local and global events on a wide range of issues. <br/> <br/> He is an alumnus of prestigious programs including the Social Justice Academy, the Auschwitz Institute for the Prevention of Genocide and Mass Atrocities, and the CISCO Academy. Chinedu has also served as a THEIRWORLD Global Youth Ambassador, advocating for Early Childhood Education in Nigeria and beyond. His passion for education led him to found EDU-CONVO AFRICA (Education Conversations Africa), creating safe spaces for conversations, innovations, and sustainable solutions around SDG 4.<br/> <br/> As the Programs Manager at CAIN Africa, Chinedu champions educational transformation in underserved communities. He is responsible for designing, planning, implementing, monitoring, and evaluating transformative educational programs. His research interests span across cybersecurity, data analytics, and internet governance, further crystallized by a Research Fellowship in Internet Governance at the Nigerian School of Internet Governance. <br/> <br/> Chinedu's dedication to education and his multifaceted expertise make him an invaluable asset to CAIN Africa and the broader development community.
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

                            <Gbolahan> </Gbolahan> 
                            <Position>
                                Gbolahan Adamolekun
                                <br/>
                                <i>Communications Manager</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Gbolahan is a Content Creator, Writer, and Communications Manager at CAIN Africa. His passion for storytelling and attention to detail enable him to craft compelling narratives that capture the essence of CAIN Africa's mission. <br/> <br/> Aside from his professional experience, Gbolahan is also an accomplished author, having published his first book, "The Parrot," in his final year of university. His book was recognized by the Ekiti State Ministry of Education, which led to its approval as one of the literary texts for Junior Secondary schools in the state.<br/> <br/> Gbolahan is experienced in traditional and digital media and has led successful communication campaigns that raised awareness and increased engagement with key stakeholders. He has mastered various courses in digital marketing, content creation, and social media management to complement his Bachelor's Degree in Biochemistry, making him well-equipped to excel in the field of communications and content creation. <br/> <br/>Whether it is through written or visual storytelling, Gbolahan is committed to using his skills to create a positive impact in the world.
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

                            <Abisoye> </Abisoye> 
                            <Position>
                                Abisoye Olagbaiye
                                <br/>
                                <i>Administrative Manager</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Abisoye Olagbaiye is a distinguished graduate of the University of Lagos, holding a B.A. degree in History and Strategic Studies. As the Administrative Manager at CAIN Africa, she is dedicated to ensuring the seamless operation of daily activities and maintaining the orderliness, security, and safety of the organization and its programs. <br/> <br/> With a wealth of experience in both the nonprofit and for-profit sectors, Abisoye excels in team management, customer relations, and facility management. She recently participated in the Young Women Leadership Accelerator Programme with LEAP Leadership Institute, where she excelled and was awarded a certificate, fueling her quest for growth and her desire to continue building her leadership skills in her role at CAIN.<br/> <br/> An energetic and hardworking professional, Abisoye is adept at maintaining records and contributing to the growth and development of organizations. She is a great team player who requires minimal supervision, consistently carrying out tasks to enhance organizational objectives. <br/> <br/>Passionate about mentoring younger minds, Abisoye shares her experiences to guide the next generation to thrive and succeed. Her commitment and warm demeanor make her an invaluable asset to CAIN Africa.
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

                            <Joseph> </Joseph> 
                            <Position>
                                Joseph Aremu
                                <br/>
                                <i>Tech Education Lead</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Joseph Aremu holds a Bachelor's degree in Computer Science Education from Tai Solarin University of Education. His passion for education has driven him to various teaching roles, where he empowers junior and senior secondary school students with essential digital skills. With extensive experience in the tech space, Joseph has worked at renowned tech organizations across Nigeria. He was an EdTech Fellow at the Co-Creation Hub, a Technology Support Associate at Tech4Dev, and served as the Chief Operating Officer at Exquitec Education Technology. <br/> <br/> In his current role as the Tech Education Lead at CAIN, Joseph is tasked with creating innovative solutions to address educational inequality in underserved communities while administering digital skills training programs to underprivileged students.<br/> <br/> Joseph is a passionate computer science enthusiast and a results-driven software developer with expertise in HTML, CSS, PHP, and MySQL. He has a proven track record of designing, developing, and maintaining web applications, and his strong skills in system analysis ensure seamless user experiences and robust functionalities. Joseph is adept at troubleshooting, optimizing performance, and implementing security measures. As a collaborative team player with excellent problem-solving abilities, he has a passion for continuous learning and improvement.
                            <br/> <br/>Joseph Aremu's impressive background and unwavering dedication to education and technology make him an invaluable asset to CAIN.
                            </Bio>
                        </BackSide>
                    </Flippy>

                </FlipContainerMember>
            </MemberMother>
        </>
    )
}

export default OurMembers;
