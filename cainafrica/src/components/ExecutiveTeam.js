import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, ExecutiveMother, FlipContainer, HeadingTwo, President, VP, PublicityChair, Peace, Position, Bio} from './StyledComponents.js';
import TeamHeader2 from '../images/Our Team/TeamHeader2.jpg';

const MeetTheTeam = (props) => {

    return(
        <>
            <TopImage style={{backgroundImage: `url(${TeamHeader2})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>MEET OUR TEAM</TopHeaderText>
                    <TopParaText>“REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO</TopParaText>
                </TextWrapper>
            </TopImage>

            <ExecutiveMother>
                <HeadingTwo>Executive Board</HeadingTwo>
                <FlipContainer> 

                    <Flippy
                        // flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer'}} /// these are optional style, it is not necessary
                        >
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }} >                            
                            
                            <President> </President>
                            
                            <Position>
                                May Oghenerukeme Asagba
                                <br/>
                                <i>Founder/CEO</i>
                            </Position>
                            
                        </FrontSide>
                        <BackSide style={{backgroundColor: '#f4e4ba', overflow: 'auto'}} >
                            
                            <Bio>
                            May is a dynamic social impact leader with a decade-long track record of implementing transformative programs and empowering young change-makers to drive development in underserved African communities. <br/> <br/> At just 21 years old, May founded Catering to Africans In Need (CAIN), a nonprofit organization. As the Founder and CEO of CAIN, she established a FREE multi-purpose educational center in the largest community in Lagos, Nigeria, benefiting over 10,000 individuals. Furthermore, she collaborated with strategic partners to pioneer the establishment of the first school and health clinic in a remote village in central Nigeria, ensuring access to quality education and healthcare.
                            <br/> <br/> May's commitment to service extends beyond her homeland, Nigeria. She previously served as the International Director of Ligandcorp, a startup focused on providing innovative medical devices for developing nations. Additionally, she has contributed her management expertise to aid startups in moving from ideation to implementation while optimizing operational efficiency and effective marketing strategies. As a policy analyst, May conducted extensive research and stakeholder interviews, including with the Ministry of Health and the United Nations, to inform policy decisions in Zambia. <br/> <br/> As a prominent Youth Activist, May brings a wealth of expertise to address educational challenges in underserved communities. Her grassroots activism has garnered international recognition. She has shared her insights at international summits and high-profile consultations with organizations like UNESCO. She has also given a TEDx talk and been featured on BBC, Channels TV, and Business Day. <br></br> May is a distinguished alumna of Cornell University, an Ivy League institution in the U.S., where she graduated with honors in Human Biology, Health, and Society, with a minor in Global Health. She furthered her academic pursuits at Case Western Reserve University, graduating summa cum laude with a master’s degree in Medical Physiology. <br/> <br/> May's career spans 10+ transformative programs impacting 100K+ individuals across 10 African communities. She is truly a driving force for positive change!
                            </Bio>

                        </BackSide>

                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                            
                            <VP> </VP>

                            <Position>
                                Olatomiwa Lasebikan
                                <br/>
                                <i>Vice President</i>
                            </Position>

                        </FrontSide>
                        <BackSide style={{backgroundColor: '#f4e4ba', overflow: 'auto'}}>
                            
                            <Bio>
                                Tomiwa obtained his Bachelor’s degree in Computer Science and Mathematics from Fisk University after which he worked as a Software Engineer at Microsoft. <br/> <br/> He currently leads Product Development in a startup in Nigeria, BuyCoins. Tomiwa recognizes the challenges of healthcare and education - especially among children and the youth - in the building of African economies and talent. He believes in the power of technology and awareness of local context to solve these problems. <br/> <br/> Tomiwa currently serves as our Vice-President and has relentlessly served CAIN since its inception. We are really grateful to have him on board because he is always willing to take on responsibilities even outside his areas of expertise and is indeed the true definition of a servant leader. 
                            </Bio>

                        </BackSide>
                    </Flippy>                  

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <PublicityChair> </PublicityChair> 
                            <Position>
                                Daisy Isibor
                                <br/>
                                <i>Director of Operations</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#f4e4ba', overflow: 'auto'}}>

                            <Bio>
                                Daisy is currently a Software Engineer in the greater Seattle area.<br/> <br/> She is passionate about technology, education and mentoring. She is always in pursuit of ways to enlighten herself and encourages other young people to do the same. Daisy leads our communications and operations in addition to the other hats she wears. <br/> <br/>We are beyond excited to have her on board because she has a knack for getting things done and pushing other members of the team to do so too. For her, professionalism is key and we love the way she infuses that mindset across the board.
                            </Bio>

                        </BackSide>
                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Peace> </Peace> 
                            <Position>
                                Peace Odiase
                                <br/>
                                <i>Director of Fundraising and Global Partnerships</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#f4e4ba', overflow: 'auto'}}>

                            <Bio>
                            At the age of 19, Peace graduated with honors as Valedictorian from the historic Fisk University with a degree in Biology/Biological Sciences. Since then, she has relentlessly pursued her passion for uplifting underserved communities. Featured on NPR, Peace has discussed her vision for alleviating the burdens of underserved communities in Nigeria and Africa through economic development and strategic partnerships. <br/> <br/>Peace currently serves as the Director of Fundraising and Global Partnerships at CAIN and is the CEO and Co-founder of Osaze, a tech startup supporting small-scale fashion designers in Nigeria. In her spare time, she volunteers as the Director of Branding at Salt Wagon Clinic, serving minority populations in Nashville, TN. She has also collaborated with Health Departments to strategize equitable COVID-19 vaccine distribution and has been instrumental in building access to trauma care and life-saving skills in Nigeria. <br/> <br/> An aspiring neurosurgeon and neuroscientist, Peace has over 10 years of experience in medical and computational research. She has expanded her research portfolio in Neuroscience and Microbiology, co-authoring six publications to date. Her work has significantly improved the assessment of patient risk and optimized care in clinical settings, particularly for underserved minority populations burdened by health disparities and comorbidities. <br/> <br/> Peace's dedication to her community and her multifaceted expertise make her a highly accomplished and inspiring leader in the fields of health and community development.
                            </Bio>

                        </BackSide>
                    </Flippy>

                </FlipContainer>
                
            </ExecutiveMother>

        </>
    )
}

export default MeetTheTeam;
