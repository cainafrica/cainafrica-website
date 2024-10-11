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

    &:nth-child(1) { transition-delay: 0s; }
    &:nth-child(2) { transition-delay: 0.2s; }
    &:nth-child(3) { transition-delay: 0.4s; }
    &:nth-child(4) { transition-delay: 0.6s; }
    &:nth-child(5) { transition-delay: 0.8s; }

    @media (max-width: 768px) {
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
        const duration = 2000;
        const incrementTime = Math.ceil(duration / end);
        const counter = setInterval(() => {
            start += 1;
            setCount(prevCount => (prevCount < end ? prevCount + 1 : end));
            if (start >= end) clearInterval(counter);
        }, incrementTime);

        return () => clearInterval(counter);
    }, [end, isVisible]);

    return <span style={{ color: '#ff0000' }}>{count}+</span>;
};

const Home = (props) => {
    const statRefs = useRef([]);
    const [isVisible, setIsVisible] = useState(Array(5).fill(false)); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    console.log(`Box ${index} is intersecting: ${entry.isIntersecting}`);
                    if (entry.isIntersecting) {
                        setIsVisible((prevVisible) => {
                            const updatedVisible = [...prevVisible];
                            updatedVisible[index] = true;
                            return updatedVisible;
                        });
                    }
                });
            },
            { threshold: 0.1 }
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
                <StatisticBox ref={(el) => statRefs.current[0] = el} className={isVisible[0] ? 'visible' : ''}>
                    Beneficiaries <br />
                    <Counter end={10000} isVisible={isVisible[0]} />
                </StatisticBox>
                <StatisticBox ref={(el) => statRefs.current[1] = el} className={isVisible[1] ? 'visible' : ''}>
                    Volunteer Hours <br />
                    <Counter end={10000} isVisible={isVisible[1]} />
                </StatisticBox>
                <StatisticBox ref={(el) => statRefs.current[2] = el} className={isVisible[2] ? 'visible' : ''}>
                    Projects <br />
                    <Counter end={13} isVisible={isVisible[2]} />
                </StatisticBox>
                <StatisticBox ref={(el) => statRefs.current[3] = el} className={isVisible[3] ? 'visible' : ''}>
                    Communities <br />
                    <Counter end={7} isVisible={isVisible[3]} />
                </StatisticBox>
                <StatisticBox ref={(el) => statRefs.current[4] = el} className={isVisible[4] ? 'visible' : ''}>
                    Satisfaction <br />
                    <Counter end={98} isVisible={isVisible[4]} />
                </StatisticBox>
            </StatisticsContainer>
        </div>
    );
};

export default Home;
