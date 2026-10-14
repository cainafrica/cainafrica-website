
import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import useDonationCurrency from "./DonateScript.js";

const DonateParent = (props) => {
  const { isNGN, toggleCurrency, price, conversion } = useDonationCurrency();

  return (
    <div>
      <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
      {props.sideDrawer}

      <section className="hero" aria-labelledby="impact-heading">
        <img
          className="hero__photo"
          src="assets/hero-students.jpg"
          alt="Students learning together at a table"
        />
        <div className="page-container hero__inner">
          <div className="hero__copy">
            <p className="section-label section-label--red">Your impact</p>
            <h1 id="impact-heading">
              <span className="text-red">Your Gift</span> = Quality education, digital skills, and life-changing opportunities for underserved students.
            </h1>
            <p className="hero__description">
              From Alimosho — Lagos' largest local government area — CAIN equips underserved young people with the education, digital skills, mentorship, and career support they need to break free from poverty.
            </p>
            <p className="hero__statement">
              Every gift — no matter the size — makes that possible.
            </p>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="CAIN's community impact">
        <div className="page-container stats__grid">
          <div className="stat">
            <p className="stat__number">14,000+</p>
            <p className="stat__description">
              Lives Impacted Across Several<br className="desktop-break" /> Communities Since 2013
            </p>
          </div>
          <div className="stat">
            <p className="stat__number">7+</p>
            <p className="stat__description">
              Free Programs — From<br className="desktop-break" /> Academic Tutorials and Digital<br className="desktop-break" /> Skills Training to Mentorship<br className="desktop-break" /> and Scholarships
            </p>
          </div>
          <div className="stat">
            <p className="stat__number">13+</p>
            <p className="stat__description">
              Years of Consistent,<br className="desktop-break" /> Community-Driven Work in the<br className="desktop-break" /> Heart of Underserved Nigerian<br className="desktop-break" /> Communities
            </p>
          </div>
        </div>
      </section>

      <section className="gifts" id="choose-gift" aria-labelledby="gifts-heading">
        <div className="page-container">
          <div className="gifts__top">
            <div className="gifts__intro">
              <p className="section-label section-label--red">Choose your gift</p>
              <h2 id="gifts-heading">
                PICK YOUR GIFT.<br />
                <span className="text-red">OWN THE IMPACT.</span>
              </h2>
              <p>
                Every gift below maps directly to a student's experience at CAIN. Choose what works for you — and know exactly what it does for them.
              </p>
            </div>

            <div className="currency" aria-label="Choose donation currency">
              <span
                className={`currency__label ${!isNGN ? "currency__label--active" : ""}`}
                id="usd-label"
              >
                USD $
              </span>
              <button
                type="button"
                className="currency__switch"
                id="currency-switch"
                role="switch"
                aria-checked={isNGN}
                aria-label={isNGN ? "Show amounts in US dollars" : "Show amounts in Nigerian naira"}
                onClick={toggleCurrency}
              >
                <span className="currency__knob" aria-hidden="true"></span>
              </button>
              <span
                className={`currency__label ${isNGN ? "currency__label--active" : ""}`}
                id="ngn-label"
              >
                NGN ₦
              </span>
            </div>
          </div>

          <div className="gift-grid" role="group" aria-label="Monthly donation amounts">
            <button type="button" className="gift-card" data-usd="20" aria-pressed="false">
              <span className="gift-card__price">{price(20)}</span>
              <span className="gift-card__conversion">{conversion(20)}</span>
              <span className="gift-card__rule" aria-hidden="true"></span>
              <span className="gift-card__name">HELP SUPPORT A STUDENT</span>
              <span className="gift-card__details">
                You become part of the infrastructure that keeps a student learning — this covers academic tutorials by expert tutors that would otherwise be out of reach.
              </span>
            </button>

            <button type="button" className="gift-card gift-card--featured" data-usd="45" aria-pressed="true">
              <span className="gift-card__badge">★ MOST POPULAR</span>
              <span className="gift-card__price">{price(45)}</span>
              <span className="gift-card__conversion">{conversion(45)}</span>
              <span className="gift-card__rule" aria-hidden="true"></span>
              <span className="gift-card__name">SPONSOR ONE STUDENT</span>
              <span className="gift-card__details">
                One student. One full year. You are directly behind their expert-led tutorials, their digital skills training, their mentorship, and their progress. This is what it means to truly champion someone.
              </span>
            </button>

            <button type="button" className="gift-card" data-usd="90" aria-pressed="false">
              <span className="gift-card__price">{price(90)}</span>
              <span className="gift-card__conversion">{conversion(90)}</span>
              <span className="gift-card__rule" aria-hidden="true"></span>
              <span className="gift-card__name">SPONSOR TWO STUDENTS</span>
              <span className="gift-card__details">
                Two distinct stories, two transformed futures—unlocked by the single decision you chose to make this month.
              </span>
            </button>

            <button type="button" className="gift-card" data-usd="225" aria-pressed="false">
              <span className="gift-card__price">{price(225)}</span>
              <span className="gift-card__conversion">{conversion(225)}</span>
              <span className="gift-card__rule" aria-hidden="true"></span>
              <span className="gift-card__name">SPONSOR FIVE STUDENTS</span>
              <span className="gift-card__details">
                Five students. Five lives changed! At this level, you are not just giving—you are expanding possibilities, transforming families, and reshaping entire communities.
              </span>
            </button>

            <button type="button" className="gift-card gift-card--custom" data-usd="custom" aria-pressed="false">
              <span className="gift-card__price">Custom</span>
              <span className="gift-card__conversion">&nbsp;</span>
              <span className="gift-card__rule" aria-hidden="true"></span>
              <span className="gift-card__name">GIVE ANY AMOUNT</span>
              <span className="gift-card__details">
                Every amount does something real. Give what feels right — the student on the receiving end will not know the difference in size, only the difference you made.
              </span>
            </button>
          </div>

          <p className="visually-hidden" id="gift-selection-status" role="status" aria-live="polite">
            The $45 monthly gift is selected.
          </p>
        </div>
      </section>

      <section className="circle" id="monthly-giving" aria-labelledby="circle-heading">
        <div className="page-container">
          <p className="section-label section-label--red">Monthly giving</p>
          <div className="circle__top">
            <div className="circle__copy">
              <h2 id="circle-heading">
                JOIN THE<br />
                <span className="text-red">120 FUTURES CIRCLE.</span>
              </h2>
              <p>
                The 120 Futures Circle is an exclusive community of monthly donors—champions who believe that every underserved young person deserves the tools, skills, and support to unlock their potential, thrive, lead, and shape a brighter future.
              </p>
              <p>
                Your recurring gift helps provide <strong>120 underserved students</strong> each year with:
              </p>
            </div>
            <div className="circle__actions">
              <a className="action-button action-button--red" href="#choose-gift" id="join-circle">
                JOIN THE CIRCLE <span aria-hidden="true">→</span>
              </a>
              <a className="action-button action-button--outline" href="#choose-gift" id="give-once">
                GIVE ONE TIME
              </a>
            </div>
          </div>
          <div className="benefits" aria-label="What your donations support">
            <div className="benefit">
              Expert-Led Tutoring in Mathematics and English to strengthen academic foundations
            </div>
            <div className="benefit">
              Digital Skills Training with direct access to computers and high-speed internet to prepare students for the future of work
            </div>
            <div className="benefit">
              A Conducive Learning Environment featuring a well-stocked library and modern digital lab
            </div>
            <div className="benefit">
              Career Mentorship &amp; Guidance to help students turn their dreams into real-world opportunities
            </div>
          </div>
        </div>
      </section>

      <section id="giving">
        <div className="container section-container">
          <div className="section-items">
            <h1 className="section-heading giving-title" id="section-heading">
              Ways to Give
            </h1>
            <div className="first-row row-items">
              <div className="first-row-first-item row-item">
                <div className="item-image benevity"></div>
                <div className="item-content">
                  <span className="item-heading">
                    Donate through Benevity
                  </span>
                  <p id="content-text">
                    Match your donation by donating through your employer. Find "Catering to Africans In Need" in your Employer's Workplace Giving and Matching Program powered by Benevity Inc.
                  </p>
                  <a href="https://benevity.com/" target="_blank" rel="noopener noreferrer">
                    <button id="button">Find Us</button>
                  </a>
                </div>
              </div>

              <div className="first-row-second-item row-item">
                <div className="item-image paypal"></div>
                <div className="item-content">
                  <span className="item-heading">
                    Donate through PayPal
                  </span>
                  <p id="content-text">
                    Please click the button below to donate. You will be linked directly to our PayPal account.
                  </p>
                  <a
                    href="https://www.paypal.com/donate?hosted_button_id=SGG2UVLMRTH56"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button id="button">Donate Here</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="second-row row-items">
              <div className="second-row-first-item row-item">
                <div className="item-image transfer"></div>
                <div className="item-content">
                  <span className="item-heading">
                    Bank Transfer (Nigeria)
                  </span>
                  <p id="content-text">
                    Donate into our Nigerian Bank Account by transferring directly into our Naira account.
                  </p>
                  <p>
                    <b>Account Name</b><br />
                    <span>CAIN Educatonal and Medical Foundation</span>
                  </p>
                  <p>
                    <b>Account Number</b><br />
                    <span>1019225521</span>
                  </p>
                  <p>
                    <b>Bank Name</b><br />
                    <span>United Bank for Africa (UBA)</span>
                  </p>
                </div>
              </div>

              <div className="second-row-second-item row-item">
                <div className="item-image funds"></div>
                <div className="item-content">
                  <span className="item-heading">
                    Become a Fundraiser
                  </span>
                  <p id="content-text">
                    Whether at your workplace, in social groups, or through personal celebrations, every dollar raised moves us closer to equipping young minds with the tools for a brighter, tech-enabled future. Ready to inspire change?
                  </p>
                  <p id="email-text">
                    Send us an email at <a href="mailto:info@cainafrica.org">info@cainafrica.org</a> to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="third-row row-items">
              <div className="third-row-first-item row-item">
                <div className="item-image gift-will"></div>
                <div className="item-content">
                  <span className="item-heading">
                    Leave us a gift in your will
                  </span>
                  <p>
                    <b>U.S.A.: Catering to Africans In Need</b><br />
                    <b>Nigeria: CAIN Educational Foundation</b>
                  </p>
                  <p id="content-text">
                    You can create a lasting legacy by including a gift in your will to support our mission. This powerful gesture ensures that, even long after you are gone, you can continue to impact lives, empowering underprivileged African students with the education and digital skills they need to build brighter futures.
                  </p>
                  <p style={{ color: "#ff0000" }}>
                    Be remembered for changing lives and creating opportunities that endure.
                  </p>
                </div>
              </div>

              <div className="third-row-second-item row-item">
                <div className="item-image legacy"></div>
                <div className="item-content">
                  <span className="item-heading">
                    Legacy Giving
                  </span>
                  <p id="content-text">
                    Honor a loved one—or your own legacy—by sponsoring a program or project named in their/your honor. This meaningful gift will create a lasting impact, providing underprivileged African students with the education and digital skills they need to thrive. By naming a program after you/them, your/their legacy will live on.
                  </p>
                  <p id="email-text">
                    Send us an email at <a href="mailto:info@cainafrica.org">info@cainafrica.org</a> to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="donate-button">
          <button className="donate-footer-btn" type="submit">
            <a
              href="https://www.paypal.com/donate?hosted_button_id=SGG2UVLMRTH56"
              target="_blank"
              rel="noopener noreferrer"
            >
              donate today
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default DonateParent;