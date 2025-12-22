import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Toolbar from './Toolbar/Toolbar.js';
import "aos/dist/aos.css";
import { OverallWrapper } from './StyledComponents.js';

const Home = (props) => {
       return(
        <div>
            
            <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
            {props.sideDrawer}

            <section class="hero">
                <div data-aos="fade-up" class="hero-content">
                    <div class="hero-desc"><span class="hero-title">DIGITALLY HER</span><span class="hero-subtitle">Empowering Underserved Young Nigerian Women With Digital Skills And Opportunities To Break From Poverty</span></div>
                </div>
            </section>

            <div className="dh-main-section">
                <section class="problem-section dh-section">
                    <div class="dh-section-title">the problem</div>
                    <div class="dh-section-text">Despite making up nearly half of Nigeria’s population, women remain overwhelmingly excluded from the digital economy that now contributes 18% of Nigeria’s GDP. Only 22% of STEM graduates in the country are women, and women make up 60% of Nigeria’s poorest citizens, leaving millions of young underserved Nigerian women locked out of the tech-driven opportunities shaping the nation’s future. In underserved communities, most girls have never operated a computer, have no access to laptops or internet, and have no pathway to learn digital skills, creating a deep systemic gap that limits their ability to thrive, secure meaningful employment, or break free from generational poverty.</div>
                </section>

                <section class="dh-stat-section dh-section">
                    <div data-aos="fade-right" class="dh-stat"><span className="dh-stat-heading">60%</span><span class="dh-stat-subtext">Of Nigeria’s poorest are women</span></div>
                    <div data-aos="fade-down" class="dh-stat"><span className="dh-stat-heading">WHILE 18%</span><span class="dh-stat-subtext">Of Nigeria’s GDP comes from the digital economy</span></div>
                    <div data-aos="fade-left" class="dh-stat"><span className="dh-stat-heading">ONLY 22%</span><span class="dh-stat-subtext">Of STEM Graduates in Nigeria are Women. </span></div>
                </section>

                <section class="dh-img-carousel dh-section">
                    <div data-aos="zoom-in" class="dh-card dh-cr-img1"><img src="../assets/images/DigitallyHer/Img-1.png" alt="Students in the ICT Room"></img></div>
                    <div data-aos="zoom-in" class="dh-card dh-cr-img2"><img src="../assets/images/DigitallyHer/Img-2.png" alt="Student with a Guest at the Educational Center"></img></div>
                    <div data-aos="zoom-in" class="dh-card dh-cr-img3"><img src="../assets/images/DigitallyHer/Img-3.png" alt="Student coding"></img></div>
                </section>

                <section class="sol-section dh-section">
                    <div class="dh-section-title">our solution - digitally her</div>
                    <div class="dh-section-text"><b>Digitally HER is a 12-month,</b> fully funded fellowship that <b>equips 100 underserved young women (ages 16–30)</b> every year with lucrative digital skills, tools, and opportunities to break free from poverty. This is more than training — it is a pathway to economic mobility, designed to help women build sustainable incomes, support their families, and lift their communities.</div>
                </section>

                <section class="benefits-section dh-section">
                    <div class="dh-section-title">what participants receive for free</div>
                    <div class="dh-section-text-wrap">
                        <div class="dh-section-text benefits-text">
                            <ul>
                                <li>Access to a laptop and reliable internet access for 12 months</li>
                                <li>Expert training in high-income digital skills</li>
                                <li>Entrepreneurship and business training</li>
                                <li>Digital literacy, AI literacy & financial literacy</li>
                                <li>Mentorship from tech professionals</li>
                                <li>Access to real projects, clients, employers, and income opportunities</li>
                            </ul>
                        </div>
                    </div>
                    <div class="dh-child-txt">This combination ensures participants don’t just learn tech — they earn from it.</div>
                </section>

                <section class="dh-resources dh-section">
                    <div class="resc-card card-1">
                        <div class="resc-card-img">
                            <img src="../assets/images/DigitallyHer/icon-1.svg" alt=""></img>
                        </div>
                        <div class="resc-text">
                            <span class="resc-title">program duration</span>
                            <span class="resc-subtitle">12 Months of continuous training</span>
                        </div>
                    </div>

                    <div class="resc-card card-2">
                        <div class="resc-card-img">
                            <img src="../assets/images/DigitallyHer/icon-2.svg" alt=""></img>
                        </div>
                        <div class="resc-text">
                            <span class="resc-title">beneficiaries</span>
                            <span class="resc-subtitle">Young underserved Nigerian women</span>
                        </div>
                    </div>

                    <div class="resc-card card-3">
                        <div class="resc-card-img">
                            <img src="../assets/images/DigitallyHer/icon-3.svg" alt=""></img>
                        </div>
                        <div class="resc-text">
                            <span class="resc-title">age range</span>
                            <span class="resc-subtitle">Between the age of 16 and 30</span>
                        </div>
                    </div>

                    <div class="resc-card card-4">
                        <div class="resc-card-img">
                            <img src="../assets/images/DigitallyHer/icon-4.svg" alt=""></img>
                        </div>
                        <div class="resc-text">
                            <span class="resc-title">cost</span>
                            <span class="resc-subtitle">$85 Monthly sponsors a woman</span>
                        </div>
                    </div>
                </section>

                <section class="dh-plan dh-section">
                    <div class="dh-section-title">how digitally her works - (12-month structure)</div>
                    <div class="dh-section-text">
                        <table class="plan-tbl" border="1">
                            <thead>
                                <th>phase</th>
                                <th>duration</th>
                                <th>what participants learn and do</th>
                            </thead>

                            <tr>
                                <td>1. Foundations</td>
                                <td>3 months</td>
                                <td>
                                    <ul>
                                        <li>Digital literacy</li>
                                        <li>AI literacy</li>
                                        <li>Women's rights</li>
                                        <li>Financial literacy</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td>2. High-Income Digital Skills & Entrepreneurship</td>
                                <td>6 months</td>
                                <td>
                                    Participants specialize in:
                                    <ul>
                                        <li>Software Development</li>
                                        <li>Data Analysis</li>
                                        <li>UI/UX Design</li>
                                        <li>Digital Marketing</li>
                                        <li>Branding</li>
                                        <li>Business Skills</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td>3. Practical Application & Community Impact</td>
                                <td>3 months</td>
                                <td>
                                    <ul>
                                        <li>Build real portfolios</li>
                                        <li>Assist local small businesses</li>
                                        <li>Launch freelance profiles</li>
                                        <li>Connect fellows for internships, employment, and paid freelance gigs</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </section>

                <section class="dh-img-carousel dh-section">
                    <div data-aos="zoom-in" class="dh-card dh-cr-img1"><img src="../assets/images/DigitallyHer/plan-1.png" alt=""></img></div>
                    <div data-aos="zoom-in" class="dh-card dh-cr-img2"><img src="../assets/images/DigitallyHer/plan-2.png" alt=""></img></div>
                    <div data-aos="zoom-in" class="dh-card dh-cr-img3"><img src="../assets/images/DigitallyHer/plan-3.png" alt=""></img></div>
                </section>

                <section class="program-cost dh-section">
                    <div class="dh-section-title">program cost and what it covers</div>
                    <div class="dh-section-text">Supporting one young woman through Digitally HER for an entire year costs <span class="red-text">$1,000 (about $85 per month),</span> and every dollar directly fuels her transformation. This investment provides her with a learning-ready laptop, reliable year-round internet, expert-led training in high-income digital and entrepreneurial skills, personalised mentorship from industry professionals, access to real job and freelance opportunities.</div>
                </section>

                <section class="support-section dh-section">
                    <div class="dh-section-title">how you can get involved</div>
                    <div class="dh-section-text">Digitally HER is powered by people who believe in empowering underserved young women to live better, independent lives. Here’s how you can join us:</div>
                </section>

                <section class="donation-section dh-section">
    
                    <div class="donation-grid">

                        <div class="donation-card">
                            <div class="donation-icon-wrapper">
                                <img src="../assets/images/DigitallyHer/icon1.svg" class="donation-icon" alt="" />
                            </div>

                            <div class="donation-content">
                                <h3 class="donation-title">BECOME A MONTHLY DONOR</h3>
                                <p>Your monthly gift — no matter the amount — helps us provide laptops, 
                                internet, expert tutors, mentors, and opportunities.</p>
                            </div>

                            <a href="https://bit.ly/caindonors" class="btn-red">SIGN UP</a>
                        </div>

                        <div class="donation-card">
                            <div class="donation-icon-wrapper">
                                <img src="../assets/images/DigitallyHer/icon2.svg" class="donation-icon" alt="" />
                            </div>

                            <div class="donation-content">
                                <h3 class="donation-title">GIVE A ONE-TIME DONATION</h3>
                                <p>Every single contribution brings us closer to equipping 100 young women 
                                with the tools for long-term success.</p>
                            </div>

                            <a href="http://www.cainafrica.org/donate" class="btn-red">DONATE</a>
                        </div>

                        <div class="donation-card">
                            <div class="donation-icon-wrapper">
                                <img src="../assets/images/DigitallyHer/icon3.svg" class="donation-icon" alt="" />
                            </div>

                            <div class="donation-content">
                                <h3 class="donation-title">CORPORATE SPONSORSHIP</h3>
                                <p>You can donate essential gadgets like laptops and software. Sponsor women 
                                at large. Offer mentorship, internship, and employment opportunities.</p>
                            </div>
                        </div>

                        <div class="donation-card">
                            <div class="donation-icon-wrapper">
                                <img src="../assets/images/DigitallyHer/icon4.svg" class="donation-icon" alt="" />
                            </div>

                            <div class="donation-content">
                                <h3 class="donation-title">SPONSOR AT SCALE</h3>
                                <p>
                                    Sponsor 1 woman — $1,000<br></br>
                                    Sponsor 5 women — $5,000<br></br>
                                    Sponsor 10 women — $10,000
                                </p>
                            </div>
                        </div>

                        <div class="donation-card">
                            <div class="donation-icon-wrapper">
                                <img src="../assets/images/DigitallyHer/icon5.svg" class="donation-icon" alt="" />
                            </div>

                            <div class="donation-content">
                                <h3 class="donation-title">SPREAD THE WORD</h3>
                                <p>Invite 1–3 friends to support Digitally HER. Share this project with your network. Collective giving fuels collective transformation.</p>
                            </div>
                        </div>

                        <div class="donation-big-box">
                            <div class="donation-icon-wrapper big">
                                <img src="../assets/images/DigitallyHer/icon6.svg" class="donation-icon" alt="" />
                            </div>

                            <a href="https://bit.ly/caindonors" class="big-btn">SIGN UP AS A MONTHLY DONOR</a>
                            <a href="http://www.cainafrica.org/donate" class="big-btn-outline">GIVE A ONE-TIME GIFT</a>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default Home;