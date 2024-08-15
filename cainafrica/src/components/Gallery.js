import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage, TextWrapper, TopParaText, OuterDiv, KeyDiv, TextBodyWrapper,ButtonLink, PostLink } from './StyledComponents.js';
import GalleryData from './GalleryData'; //Import Object data to loop over.
import projectsCover from '../images/ProjectsData/projectsCover.jpg';

const ProjectImage = styled.img`
    margin:auto;
    border-radius: 0.8rem;
    width: 19rem;
    height: 14rem;
    @media (max-width: 320px) {
        margin: 0rem;
        width: 17rem;
        margin: 1rem auto;
    }
`
export const Card = styled.div`
    margin: auto;
    width: 19rem;
    background-color:white;
    padding: 1rem;
    border: 0.15rem solid #d8aa35;
    border-radius: 1rem;
        @media (max-width: 320px) {
            width: 17rem;
            height: 38rem;
            margin: 1rem auto;
        }
`

const Gallery = (props) => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        All()
    },[])

    let All = () =>{
        setData(GalleryData)
    }   

    let scrollToTop = () =>{
        window.scrollTo({top:500,behavior:'smooth'})
    }

    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
            
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper style={{}}>
                    <TopParaText>“A KIND GESTURE CAN REACH A WOUND THAT ONLY COMPASSION CAN HEAL.” ― STEVE MARABOLI
                    </TopParaText>
                </TextWrapper>
            </TopImage>
            <a style={{backgroundColor:"#d8aa35", color:"white", textDecoration:"none", padding:"2px 6px",fontSize:"12px", fontWeight:"bold",display:"inline-block"}} href="https://unsplash.com/@octadan?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Octavian Dan">
                    <span style={{display:"inline-block",padding:"2px 3px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{height:"12px",width:"auto",position:"relative",verticalAlign:"middle",top:"-2px",fill:"white"}} viewBox="0 0 32 32">
                            <title>unsplash-logo</title>
                            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"/>
                        </svg>
                    </span>
                    <span style={{display:"inline-block",padding:"2px 3px"}}>
                        Photo by: Octavian Dan on Unsplash
                    </span>
                </a>

            
            <OuterDiv>
                {data.map(project => (
                    <KeyDiv key={project.index}>
                        <Card>
                            <ProjectImage src={project.image}></ProjectImage>
                            <TextBodyWrapper>
                                
                                <h4 style={{margin: '1rem 0', height:'3rem'}}>{project.title}</h4>
                                
                                <p style={{margin: '1rem 0'}}>
                                    {project.description}
                                </p> 
                                <PostLink to={`${project.link}`}>
                                    <ButtonLink onClick={scrollToTop} >
                                       View 
                                    </ButtonLink>
                                </PostLink>
                                
                            </TextBodyWrapper>
                        </Card>
                    </KeyDiv>
                ))}
            </OuterDiv>
        </div>
    )
}

export default Gallery;
