import React, { useState, useEffect, useRef } from 'react'; 
import styled from 'styled-components';
import TopBackground2 from '../images/home/TopBackground2.JPG';
import { TopParaText } from './StyledComponents.js';
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

const StatisticsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-top: 2rem;

    & > div {
        flex: 1 1 25%; 
        max-width: 25%;
        margin: 1rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        & > div {
            flex: 1 1 100%;
            max-width: 90%;
        }
    }
`;

const StatisticBox = styled.div`
    padding: 1.5rem;
    border-radius: 10px;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    color: #ff0000; 
    opacity: 0; 
    transform: translateY(20px); 
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    background-color: rgba(255, 255, 255, 0.8); /* Temporary background */

    &.visible {
        opacity: 1;
        transform: translateY(0); 
    }

    @media (max-width: 768px) {
        margin-bottom: 1rem;
        font-size: 1.6rem; 
    }
`;

const Counter = ({ end, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0); 
            return;
        }

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
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const isAnyVisible = entries.some(entry => entry.isIntersecting);
                if (isAnyVisible) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 1 }
        );

        statRefs.current.forEach((statBox) => {
            if (statBox) observer.observe(statBox);
        });

        return () => {
            statRefs.current.forEach((statBox) => {
                if (statBox) observer.unobserve(statBox);
            });
        };
    }, []);

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

            <StatisticsContainer>
                <StatisticBox ref={(el) => statRefs.current[0] = el} className={isVisible ? 'visible' : ''}>
                    Beneficiaries <br />
                    <Counter end={10000} isVisible={isVisible} />
                </StatisticBox>
                <StatisticBox ref={(el) => statRefs.current[1] = el} className={isVisible ? 'visible' : ''}>
                    Volunteer Hours <br />
                    <Counter end={10000} isVisible={isVisible} />
                </StatisticBox>
                <StatisticBox ref={(el) => statRefs.current[2] = el} className={isVisible ? 'visible' : ''}>
                    Projects <br />
                    <Counter end={13} isVisible={isVisible} />
                </StatisticBox>
                <StatisticBox ref={(el) => statRefs.current[3] = el} className={isVisible ? 'visible' : ''}>
                    Communities <br />
                    <Counter end={7} isVisible={isVisible} />
                </StatisticBox>
                <StatisticBox ref={(el) => statRefs.current[4] = el} className={isVisible ? 'visible' : ''}>
                    Satisfaction <br />
                    <Counter end={98} isVisible={isVisible} />
                </StatisticBox>
            </StatisticsContainer>
        </div>
    );
};

export default Home;
