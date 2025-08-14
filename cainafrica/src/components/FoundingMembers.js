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
                                <br/>
                                <i>Trustee</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            
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
                                <br/>
                                <i>Trustee</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#ff0000', overflow: 'auto'}}>

                            <Bio>
                            Moyo is a brilliant project manager and product management consultant with a proven track record of transforming complex ideas into market-ready solutions and driving measurable growth in fast-paced technology environments. He has led cross-functional teams, delivered high-impact products, and applied sharp business analytics to optimize operations and scale innovation. <br></br><br></br>
                            A graduate of The University of Chicago Booth School of Business with an MBA concentrated in Analytic Finance, Strategy, and Operations, Moyo brings both academic rigor and real-world execution to the table. He is now seeking full-time opportunities in corporate strategy, market expansion, new market entry, mergers and acquisitions, and risk strategy, where he can combine his analytical acumen, strategic vision, and execution excellence to help organizations grow and compete at the highest level.
                            </Bio>

                        </BackSide>
                    </Flippy>

                </FlipContainer>
                
            </ExecutiveMother>

        </>
    )
}

export default MeetTheTeam;