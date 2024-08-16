import React from 'react';
import styled from 'styled-components';
import {TopImage, TextWrapper, TopParaText} from './StyledComponents.js';
import Toolbar from './Toolbar/Toolbar.js';
import TeamHeader2 from '../images/Our Team/TeamHeader2.jpg';

const FormWrapper = styled.div`
    diplay:flex;
    flex-direction:column;
    flex-wrap:wrap;
    text-align:center;
    margin: 2rem auto;
`
export const Iframe = styled.iframe`
    width: 40%;
    height: 190rem;
    border: 2rem solid white;
        @media (max-width: 768px) {
            width:90%;
            border: 0.1rem solid white;
        }
`

const Volunteer = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${TeamHeader2})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>“REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO</TopParaText>
                </TextWrapper>                
            </TopImage>

            <FormWrapper>
                <Iframe src="https://docs.google.com/forms/d/e/1FAIpQLSetk4lNzfckBgTAZ-CFWlp3250QGaZ9L7oN76Wpai-XlU3_JQ/viewform" style={{width: "95%"}} />
                
            </FormWrapper>

        </div>
    )
}

export default Volunteer;

