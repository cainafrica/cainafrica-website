import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage, TextWrapper, TopParaText, ExecutiveMother, FlipContainer, HeadingTwo, Eric, Moyo, Position, Bio} from './StyledComponents.js';
import TeamCover from '../images/Our Team/TeamBanner.jpg';

const MeetTheTeam = (props) => {

    return(
        <>
            <TopImage style={{backgroundImage: `url(${TeamCover})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>“REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO</TopParaText>
                </TextWrapper>
            </TopImage>

            <ExecutiveMother>
                <HeadingTwo>Founding Members</HeadingTwo>
                <FlipContainer> 

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Eric> </Eric> 
                            <Position>
                            Eric Asagba
                                {/* <br/> */}
                                {/* <i>Trustee</i> */}
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Eric Asagba is a distinguished Strategic Business Development Executive with over a decade of experience spanning the energy, SaaS, fintech, and research sectors. Renowned for driving sustainable growth, he has successfully managed multi-million-dollar portfolios, spearheaded market expansion initiatives, and delivered transformative solutions that create long-term value.
                            <br /><br />
                            He holds a Postgraduate Certificate in Energy Management, a GIS Certificate, and a B.Sc. in Geography. In addition, he is a Certified Energy Manager (CEM) and a Project Management Professional (PMP), credentials that reflect his strong technical foundation and commitment to excellence.
                            <br /><br />
                            Passionate about sustainability and innovation, Eric brings a rare blend of strategic foresight and hands-on execution to the CAIN Africa Board, where his expertise helps shape impactful initiatives that empower communities and foster sustainable development across the continent.
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

                            <Moyo> </Moyo> 
                            <Position>
                            Moyosoreoluwa Orekoya
                                {/* <br/> */}
                                {/* <i>Trustee</i> */}
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                         Moyo is a seasoned project manager and product management consultant with a remarkable track record of turning complex ideas into market-ready solutions that drive measurable growth in dynamic technology environments. He has successfully led cross-functional teams, launched high-impact products, and harnessed advanced business analytics to optimize operations and scale innovation.
                         <br /><br />
                         He holds an MBA from the University of Chicago Booth School of Business, where he specialized in Analytic Finance, Strategy, and Operations. Combining academic rigor with hands-on execution, Moyo has built an exceptional career spanning global firms such as McKinsey & Company and Passport.
                         <br /><br />
                         Today, he serves as the CEO of <b>Shepherd</b>, a fast-rising edtech startup backed by Y Combinator, which is redefining learning with its all-in-one AI-powered co-pilot for students. Under his leadership, Shepherd is rapidly gaining recognition as a transformative force in education technology.
                         <br /><br />
                         Moyo’s deep expertise in technology, edtech, and strategic execution brings invaluable insight to the work we do at CAIN. His vision and leadership help us leverage innovation and strategy to empower underprivileged African children with access to quality education.
                            </Bio>

                        </BackSide>
                    </Flippy>

                </FlipContainer>
                
            </ExecutiveMother>

        </>
    )
}

export default MeetTheTeam;