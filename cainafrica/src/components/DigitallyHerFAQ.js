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

            <section class="hero">
                <div data-aos="fade-up" class="hero-content faq-hero-content">
                    <div class="hero-desc">
                        <span class="hero-title faq-hero-title">Answers, before you <br></br><span style={{color: "red"}}>apply</span> or <span style={{color: "green"}}>give</span>.</span><span class="hero-subtitle faq-hero-subtitle">Everything you need to know about DigitallyHer, including the Pay-It-Forward Model, eligibility, the application process, and ways to give—all in one place.</span>
                    </div>
                    <div className="hero-btns">
                        <div className="hero-btn fellows-btn">
                            For Applicants and Fellows
                        </div>
                        <div className="hero-btn sponsors-btn">
                            For Donors and Sponsors
                        </div>
                    </div>
                </div>
            </section>

            <div class="dh-main-section faq-main-container">
                <h1>Digitally HER · Frequently Asked Questions</h1>
                <div className="eligibility-container">
                    <h2>For Applicants & Fellows</h2>
                    <div className="eligibility-wrap">
                        <p id='upper-text' style={{color: 'red'}}><i>"You're not paying for what you received — you're making it possible for someone else to receive it too."</i></p>
                        <p id='lower-text' style={{color: 'white'}}>No tuition upfront, no loan afterward. <br></br>Pay-it-forward is a commitment to empowering the next Fellow.</p>
                        <a
                            className="eligibility-wrap-link"
                            href="https://bit.ly/digitallyher" target="_blank" rel="noopener noreferrer">
                            <span>Jump to eligibility</span>
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                <div class="dh-main-section faq-container">

                    <details class="faq-item">
                        <summary class="faq-question">
                            Is there a tuition fee?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                No. There is no tuition fee to join the Digitally HER Fellowship. Every Fellow receives full access to our community learning center, laptops, high-speed internet, expert instructors, mentorship, career support, and entrepreneurship training without paying anything upfront.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            What is the Pay-It-Forward Model?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                It is a commitment to the next generation. After completing the fellowship and securing sustainable income through employment, freelancing, or entrepreneurship, each graduate commits to contributing ₦1,000,000 over up to two years to help train future Fellows and to giving back her time and expertise by mentoring future participants whenever possible.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            Is this a loan?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                No. A loan is money borrowed with the expectation that it's repaid to the lender, often with interest. The Pay-It-Forward Contribution works differently: you're not paying back what you received — you're investing in another young woman's future, the same way donors and supporters invested in yours.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            Why does Digitally HER have a Pay-It-Forward Model?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                It builds a community of women who empower other women. Every graduate becomes both a beneficiary and a contributor.
                                
                                It builds a sustainable program. Delivering a 12-month fellowship at this level of quality takes real investment — this helps Digitally HER keep serving future cohorts without relying solely on grants and donations.
                                
                                It encourages long-term success. The commitment reinforces a culture of continuing to grow, well after the fellowship ends.
                                
                                It creates a culture of giving back. Every Fellow benefits because someone chose to invest in her future. We believe every graduate should have the chance to do the same for someone else.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            Where does my Pay-It-Forward Contribution go?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                Every contribution is reinvested directly into training future Fellows — instructors, training materials, computers, internet, mentorship, and program operations.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            What if I can't contribute right away?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                That's expected and planned for. Every graduate's career journey looks different, so the Pay-It-Forward Commitment is flexible. You have up to two years after graduation to complete your ₦1,000,000 contribution, and you propose a schedule that fits your circumstances. Spread evenly over 24 months, that's about ₦41,667 a month — but you're free to choose a different pace within that window. The goal isn't financial pressure; it's building lifelong contributors.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            Who is eligible to apply?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                Digitally HER is open to underserved young Nigerian women aged 16–30. Must reside in Lagos State. Priority may be given to applicants from Alimosho LGA and surrounding communities.
                            </p>
                        </div>
                    </details>

                    <details class="faq-item">
                        <summary class="faq-question">
                            How do I apply?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                Step 1: Complete the online application
                                
                                Step 2: Eligible applicants are scheduled for introductory calls
                                
                                Step 3: Shortlisted applicants are invited to an interview
                                
                                Step 4: After the interview, applicants submit required documents for verification
                                
                                Step 5: Once documents are verified, selected Fellows are officially accepted and onboarded
                            </p>
                        </div>
                    </details>

                    <details class="faq-item">
                        <summary class="faq-question">
                            What do Fellows receive during the 12 months?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                Access to a laptop and reliable internet, expert-led training in high-income digital skills, entrepreneurship and business training, digital and financial literacy, personalized mentorship from tech professionals, and access to real projects, clients, employers, and income opportunities.
                            </p>
                        </div>
                    </details>

                </div>

                {/***** Second FAQ Section *****/}

                 <h2>For donors and sponsors</h2>

                <div class="faq-container">

                    <details class="faq-item">
                        <summary class="faq-question">
                            How is my donation used?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                Every dollar goes toward equipping a Fellow with access to a laptop, reliable internet, expert-led training, mentorship, and real income opportunities. $1,000 covers one woman's full year in the program — about $85 a month.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            Does the Pay-It-Forward Model mean Digitally HER no longer needs donations?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                No — donor support is still what makes each cohort possible in the first place. A single graduate's Pay-It-Forward Contribution isn't enough on its own to fully fund another woman's training; it isn't designed to replace donor funding, it's designed to ease the burden of it. It works alongside donations to make the program more sustainable for future cohorts, and just as importantly, it builds a sense of responsibility and commitment in every graduate. Every current Fellow is there because a donor, partner, or supporter chose to invest in her, the same way she'll one day help fund and mentor the next Fellow.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            How can I donate?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                <b>Become a monthly donor:</b><br></br><a style={{color: 'red'}} href="https://bit.ly/caindonors">https://bit.ly/caindonors</a>

                                <br></br><br></br>

                                <b>Give a one-time donation —</b>

                                <b>To donate in Naira:</b>
                                <br></br>CAIN Educational and Medical Foundation
                                <br></br>United Bank for Africa (UBA)
                                <br></br>Account Number: 1019225521

                                <br></br><br></br>
                                <b>To donate in other currencies:</b><br></br>
                                <a style={{color: 'red'}} href="https://www.cainafrica.org/#/donate">https://www.cainafrica.org/#/donate</a>
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            Can I sponsor a specific number of women?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                Yes. Sponsor 1 woman for $1,000/year (about $85/month), 5 women for $5,000/year (about $425/month), or 10 women for $10,000/year (about $850/month). Corporate partners can also donate gadgets like laptops or offer mentorship, internships, and employment opportunities directly to Fellows.
                            </p>
                        </div>
                    </details>


                    <details class="faq-item">
                        <summary class="faq-question">
                            Can my company get involved beyond donating money?
                        </summary>

                        <div class="faq-answer">
                            <p>
                                Yes — corporate partners can co-create solutions with us: donating equipment, offering mentorship, providing internships, or creating employment pathways for graduating Fellows. Reach out to info@cainafrica.org to discuss.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
            <div className="faq-enquiry">
                <h1>Still have a question?</h1>
                <p>Reach out to the team directly and we'll get back to you.</p>
                <div className="enquiry-btns">
                    <div className="enq-btn">
                        <a
                            href="mailto:info@cainafrica.org" className="enq-btn enq-email-btn">
                            Email: info@cainafrica.org
                        </a>
                        <a
                            href="/digitally-her" className="enq-btn enq-back-btn">
                            <i className="fa-solid fa-arrow-left"></i> Back to Digitally HER
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;