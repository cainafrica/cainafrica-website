import React from 'react';
/*import { Link } from 'react-router-dom';*/
/*import styled from 'styled-components';*/
import Toolbar from './Toolbar/Toolbar.js';
import "aos/dist/aos.css";
/*import { OverallWrapper } from './StyledComponents.js';*/

const Home = (props) => {
       return(
        <div>
            
            <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
            {props.sideDrawer}

            <section className="hero">
                <div data-aos="fade-up" className="hero-content">
                    <div className="hero-desc"><span className="hero-title">DIGITALLY HER</span><span className="hero-subtitle">Empowering Underserved Young Nigerian Women With Digital Skills And Opportunities To Break From Poverty</span></div>
                </div>
            </section>

            <div className="container">
                <section className="cards-wrap dh-main-section">
                    <h2 className="card-heading"><i>Where do you belong on this page?</i></h2>
                    <div className="cards">
                        <div className="card app-card">
                            <h3 className="card-title">i want to apply</h3>
                            <p>You're 16–30, ready to build a career in tech, and want in on the next Digitally 
                                HER cohort.
                            </p>
                            <div className="card-link app-link">
                                <a href="https://bit.ly/digitallyher" target="_blank" rel="noopener noreferrer">
                                    <span>See eligibility &amp; apply</span>
                                    <span><i className="fa-solid fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="card give-card">
                            <h3 className="card-title">i want to give</h3>
                            <p>You want to fund a Fellow's laptop, training, or mentorship — as a 
                            monthly donor, one-time donor, or corporate partner.
                            </p>
                            <div className="card-link give-link">
                                <a href="#support" rel="noopener noreferrer">
                                    <span>See ways to give</span>
                                    <span><i className="fa-solid fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="dh-main-section">
                    <section className="problem-section dh-section">
                        <div className="dh-section-title">the problem</div>
                        <div className="dh-section-text">Despite making up nearly half of Nigeria’s population, women remain overwhelmingly excluded from the digital economy that now contributes 18% of Nigeria’s GDP. Only 22% of STEM graduates in the country are women, and women make up 60% of Nigeria’s poorest citizens, leaving millions of young underserved Nigerian women locked out of the tech-driven opportunities shaping the nation’s future. In underserved communities, most girls have never operated a computer, have no access to laptops or internet, and have no pathway to learn digital skills, creating a deep systemic gap that limits their ability to thrive, secure meaningful employment, or break free from generational poverty.</div>
                    </section>

                    <section className="dh-stat-section dh-section">
                        <div data-aos="fade-right" className="dh-stat"><span className="dh-stat-heading">60%</span><span className="dh-stat-subtext">Of Nigeria’s poorest are women</span></div>
                        <div data-aos="fade-down" className="dh-stat"><span className="dh-stat-heading">WHILE 18%</span><span className="dh-stat-subtext">Of Nigeria’s GDP comes from the digital economy</span></div>
                        <div data-aos="fade-left" className="dh-stat"><span className="dh-stat-heading">ONLY 22%</span><span className="dh-stat-subtext">Of STEM Graduates in Nigeria are Women. </span></div>
                    </section>

                    <section className="dh-img-carousel dh-section">
                        <div data-aos="zoom-in" className="dh-card dh-cr-img1"><img src="../assets/images/DigitallyHer/Img-1.png" alt="Students in the ICT Room"></img></div>
                        <div data-aos="zoom-in" className="dh-card dh-cr-img2"><img src="../assets/images/DigitallyHer/Img-2.png" alt="Student with a Guest at the Educational Center"></img></div>
                        <div data-aos="zoom-in" className="dh-card dh-cr-img3"><img src="../assets/images/DigitallyHer/Img-3.png" alt="Student coding"></img></div>
                    </section>

                    <section className="sol-section dh-section">
                        <div className="dh-section-title">our solution - digitally her</div>
                        <div className="dh-section-text"><b>Digitally HER is a 12-month,</b> fully funded fellowship that <b>equips 100 underserved young women (ages 16–30)</b> every year with lucrative digital skills, tools, and opportunities to break free from poverty. This is more than training — it is a pathway to economic mobility, designed to help women build sustainable incomes, support their families, and lift their communities.</div>
                    </section>

                    <section className="benefits-section dh-section">
                        <div className="dh-section-title">what participants receive for free</div>
                        <div className="dh-section-text-wrap">
                            <div className="dh-section-text benefits-text">
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
                        <div className="dh-child-txt">This combination ensures participants don’t just learn tech — they earn from it.</div>
                    </section>

                    <section className="dh-resources dh-section">
                        <div className="resc-card card-1">
                            <div className="resc-card-img">
                                <img src="../assets/images/DigitallyHer/icon-1.svg" alt=""></img>
                            </div>
                            <div className="resc-text">
                                <span className="resc-title">program duration</span>
                                <span className="resc-subtitle">12 Months of continuous training</span>
                            </div>
                        </div>

                        <div className="resc-card card-2">
                            <div className="resc-card-img">
                                <img src="../assets/images/DigitallyHer/icon-2.svg" alt=""></img>
                            </div>
                            <div className="resc-text">
                                <span className="resc-title">beneficiaries</span>
                                <span className="resc-subtitle">Young underserved Nigerian women</span>
                            </div>
                        </div>

                        <div className="resc-card card-3">
                            <div className="resc-card-img">
                                <img src="../assets/images/DigitallyHer/icon-3.svg" alt=""></img>
                            </div>
                            <div className="resc-text">
                                <span className="resc-title">age range</span>
                                <span className="resc-subtitle">Between the age of 16 and 30</span>
                            </div>
                        </div>

                        <div className="resc-card card-4">
                            <div className="resc-card-img">
                                <img src="../assets/images/DigitallyHer/icon-4.svg" alt=""></img>
                            </div>
                            <div className="resc-text">
                                <span className="resc-title">cost</span>
                                <span className="resc-subtitle">$85 Monthly sponsors a woman</span>
                            </div>
                        </div>
                    </section>

                    <section className="dh-plan dh-section">
                        <div className="dh-section-title">how digitally her works - (12-month structure)</div>
                        <div className="dh-section-text">
                            <table className="plan-tbl" border="1">
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

                    <section className="dh-img-carousel dh-section">
                        <div data-aos="zoom-in" className="dh-card dh-cr-img1"><img src="../assets/images/DigitallyHer/plan-1.png" alt=""></img></div>
                        <div data-aos="zoom-in" className="dh-card dh-cr-img2"><img src="../assets/images/DigitallyHer/plan-2.png" alt=""></img></div>
                        <div data-aos="zoom-in" className="dh-card dh-cr-img3"><img src="../assets/images/DigitallyHer/plan-3.png" alt=""></img></div>
                    </section>

                    <section className="faq-section dh-section">
                        <div style={{color: "#000"}} className="dh-section-title">The Pay-It-Forward Model</div>
                        <h3><i>No tuition. A commitment instead.</i></h3>
                        <div className="dh-section-text-wrap">
                            <div style={{padding: "1.2rem"}} className="dh-section-text benefits-text">
                                <p className="faq-text">Every Fellow joins the program at no cost. After graduating and securing an income, she makes a Pay-It-Forward Commitment by contributing a total of <strong>₦1,000,000</strong> over a period of up to <strong>two years</strong> to support the next cohort, while also serving as a <strong>mentor</strong>.</p>
                                <p className="faq-subtext"><i>"You're not paying for what you received — you're making it possible for another young, underserved woman to receive it too."</i></p>
                            </div>
                            <div className="card-link give-link faq-link-container">
                                <a href="/digitally-her-faq" target="_blank" rel="noopener noreferrer">
                                    <span>Read the full Pay-It-Forward FAQ</span>
                                    <span style={{color: "red"}}><i className="fa-solid fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="application-section dh-section">
                        <div className="dh-section-title">ready to apply?</div>
                        <p className="application-section-text">Digitally HER selects <b>100 young, underserved Nigerian women</b> every year for a <b>fully funded, 12-month fellowship.</b> We empower them and provide them with the opportunity to build a career in tech and, eventually, help the next woman do the same.</p>
                        <div className="dh-section-text-wrap">
                             <h3 style={{color: "white", margin: "0"}} className="dh-section-title">who can apply?</h3>
                            <div className="dh-section-text benefits-text">
                               <ul>
                                    <li>Female applicants aged 16 to 30 years at the time of application.</li>
                                    <li>Reside in Lagos State, with priority given to applicants from Alimosho Local Government Area (LGA) and surrounding communities.</li>
                                    <li>Come from an underserved or under-resourced community.</li>
                                    <li>Demonstrate a genuine interest in learning digital skills and a commitment to actively participating in the program.</li>
                                </ul>
                            </div>
                            <div className="application-container">
                                <div className="application-info">
                                    <div className="cohort-date">Next cohort applications open: <span className="cohort-break"><strong>May 2026</strong></span></div>
                                    <div className="application-deadline"><i>Application Deadline: <strong>August 2026</strong></i></div>
                                </div>
                                <a href="https://bit.ly/digitallyher" target="_blank" rel="noopener noreferrer">
                                    <span className="application-apply-link"><strong>Apply Now</strong></span>
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="how-it-works dh-section">
                        <div className="dh-section-title">how it works</div>
                        <div className="dh-section-text-wrap">
                            <div className="dh-section-text benefits-text">
                               <ol>
                                    <li>Step 1: Complete the online application.</li>
                                    <li>Step 2: Eligible applicants are scheduled for introductory calls.</li>
                                    <li>Step 3: Shortlisted applicants are invited to an interview.</li>
                                    <li>Step 4: After the interview, applicants submit required documents for verification.</li>
                                    <li>Step 5: Once documents are verified, selected Fellows are officially accepted and onboarded.</li>
                                </ol>
                            </div>
                            <p className="how-it-works-text">
                                <span>For questions about eligibility, the Pay-It-Forward Model, or what to expect? Visit the </span>
                                <span className="how-it-works-break"><a href="/digitally-her-faq" target="_blank" rel="noopener noreferrer"><strong>Digitally HER FAQ</strong><i className="fa-solid fa-arrow-right"></i></a></span>
                            </p>
                        </div>
                    </section>

                    <section className="program-cost dh-section">
                        <div className="dh-section-title">program cost and what it covers</div>
                        <div className="dh-section-text">Supporting one young woman through Digitally HER for an entire year costs <span className="red-text">$1,000 (about $85 per month),</span> and every dollar directly fuels her transformation. This investment provides her with a learning-ready laptop, reliable year-round internet, expert-led training in high-income digital and entrepreneurial skills, personalised mentorship from industry professionals, access to real job and freelance opportunities.</div>
                    </section>

                    <section className="support-section dh-section" id="support">
                        <div className="dh-section-title">how you can get involved</div>
                        <div className="dh-section-text">Digitally HER is powered by people who believe in empowering underserved young women to live better, independent lives. Here’s how you can join us:</div>
                    </section>

                    <section className="donation-section dh-section">
        
                        <div className="donation-grid">

                            <div className="donation-card">
                                <div className="donation-icon-wrapper">
                                    <img src="../assets/images/DigitallyHer/icon1.svg" className="donation-icon" alt="" />
                                </div>

                                <div className="donation-content">
                                    <h3 className="donation-title">BECOME A MONTHLY DONOR</h3>
                                    <p>Your monthly gift — no matter the amount — helps us provide laptops, 
                                    internet, expert tutors, mentors, and opportunities.</p>
                                </div>

                                <a href="https://bit.ly/caindonors" className="btn-red">SIGN UP</a>
                            </div>

                            <div className="donation-card">
                                <div className="donation-icon-wrapper">
                                    <img src="../assets/images/DigitallyHer/icon2.svg" className="donation-icon" alt="" />
                                </div>

                                <div className="donation-content">
                                    <h3 className="donation-title">GIVE A ONE-TIME DONATION</h3>
                                    <p>Every single contribution brings us closer to equipping 100 young women 
                                    with the tools for long-term success.</p>
                                </div>

                                <a href="http://www.cainafrica.org/donate" className="btn-red">DONATE</a>
                            </div>

                            <div className="donation-card">
                                <div className="donation-icon-wrapper">
                                    <img src="../assets/images/DigitallyHer/icon3.svg" className="donation-icon" alt="" />
                                </div>

                                <div className="donation-content">
                                    <h3 className="donation-title">CORPORATE SPONSORSHIP</h3>
                                    <p>You can donate essential gadgets like laptops and software. Sponsor women 
                                    at large. Offer mentorship, internship, and employment opportunities.</p>
                                </div>
                            </div>

                            <div className="donation-card">
                                <div className="donation-icon-wrapper">
                                    <img src="../assets/images/DigitallyHer/icon4.svg" className="donation-icon" alt="" />
                                </div>

                                <div className="donation-content">
                                    <h3 className="donation-title">SPONSOR AT SCALE</h3>
                                    <p>
                                        Sponsor 1 woman — $1,000<br></br>
                                        Sponsor 5 women — $5,000<br></br>
                                        Sponsor 10 women — $10,000
                                    </p>
                                </div>
                            </div>

                            <div className="donation-card">
                                <div className="donation-icon-wrapper">
                                    <img src="../assets/images/DigitallyHer/icon5.svg" className="donation-icon" alt="" />
                                </div>

                                <div className="donation-content">
                                    <h3 className="donation-title">SPREAD THE WORD</h3>
                                    <p>Invite 1–3 friends to support Digitally HER. Share this project with your network. Collective giving fuels collective transformation.</p>
                                </div>
                            </div>

                            <div className="donation-big-box">
                                <div className="donation-icon-wrapper big">
                                    <img src="../assets/images/DigitallyHer/icon6.svg" className="donation-icon" alt="" />
                                </div>

                                <a href="https://bit.ly/caindonors" className="big-btn">SIGN UP AS A MONTHLY DONOR</a>
                                <a href="http://www.cainafrica.org/donate" className="big-btn-outline">GIVE A ONE-TIME GIFT</a>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default Home;