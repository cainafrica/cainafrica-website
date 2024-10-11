import React, { useState, useEffect, useRef } from 'react'; 
import styled from 'styled-components';
import TopBackground2 from '../images/home/TopBackground2.JPG';
import { TopParaText, PostIframe, PostIframeWrapper } from './StyledComponents.js';
import Toolbar from './Toolbar/Toolbar.js';

const TopImage = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-position: top;
    background-repeat: no-repeat;
    background-image: url(${TopBackground2});
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
        justify-content: space-between;
        height: 96vh;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media (max-width: 768px) {
        height: 50%;
        margin-bottom: 5rem;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StatisticsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

const StatisticBox = styled.div`
    flex: 1 1 30%;
    padding: 1.5rem;
    border-radius: 10px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #ff0000; 
    opacity: 0; 
    transform: translateY(20px); 
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 1rem;
    box-sizing: border-box;

    &.visible {
        opacity: 1;
        transform: translateY(0); 
    }

    @media (max-width: 768px) {
        font-size: 1.6rem; 
        margin: 0.5rem;
        padding: 1rem;
    }
`;

const MediaWrapper = styled.div`
    width: 55%;
    height: 100%;
    margin: 0;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 2rem;
    }
`;

const Counter = ({ end, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 1000;
        const incrementTime = Math.ceil(duration / end);
        const counter = setInterval(() => {
            const newCount = Math.min(start + Math.ceil(end / (duration / incrementTime)), end);
            setCount(newCount);
            start = newCount;

            if (start >= end) clearInterval(counter);
        }, incrementTime);

        return () => clearInterval(counter);
    }, [end, isVisible]);

    return <span style={{ color: '#ff0000' }}>{count}+</span>;
};

const Home = (props) => {
    const statRefs = useRef([]);
    const [countersTriggered, setCountersTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const isVisible = entries.some(entry => entry.isIntersecting);
                if (isVisible && !countersTriggered) {
                    setCountersTriggered(true);
                }
            },
            { threshold: 0.5 }
        );

        statRefs.current.forEach((statBox) => {
            if (statBox) observer.observe(statBox);
        });

        return () => {
            statRefs.current.forEach((statBox) => {
                if (statBox) observer.unobserve(statBox);
            });
        };
    }, [countersTriggered]);

    return (
        <div>
            <TopImage>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopParaText>
                        EMPOWERING UNDERSERVED AFRICANS WITH QUALITY EDUCATION
                    </TopParaText>
                </TextWrapper>
            </TopImage>

            <ContentContainer>
                <StatisticsContainer>
                    <StatisticBox ref={(el) => statRefs.current[0] = el} className={countersTriggered ? 'visible' : ''}>
                        Beneficiaries <br />
                        <Counter end={10000} isVisible={countersTriggered} />
                    </StatisticBox>
                    <StatisticBox ref={(el) => statRefs.current[1] = el} className={countersTriggered ? 'visible' : ''}>
                        Volunteer Hours <br />
                        <Counter end={10000} isVisible={countersTriggered} />
                    </StatisticBox>
                    <StatisticBox ref={(el) => statRefs.current[2] = el} className={countersTriggered ? 'visible' : ''}>
                        Projects <br />
                        <Counter end={13} isVisible={countersTriggered} />
                    </StatisticBox>
                    <StatisticBox ref={(el) => statRefs.current[3] = el} className={countersTriggered ? 'visible' : ''}>
                        Communities <br />
                        <Counter end={7} isVisible={countersTriggered} />
                    </StatisticBox>
                    <StatisticBox ref={(el) => statRefs.current[4] = el} className={countersTriggered ? 'visible' : ''}>
                        Satisfaction <br />
                        <Counter end={98} isVisible={countersTriggered} />
                    </StatisticBox>
                </StatisticsContainer>

                <MediaWrapper>
                    <PostIframeWrapper>
                        <PostIframe
                          src="https://www.youtube.com/embed/udveCSO-6ys?si=_5QkZkblv1CJBXOQ"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen >
                        </PostIframe>
                    </PostIframeWrapper>
                </MediaWrapper>
            </ContentContainer>
        </div>
    );
};

export default Home;
