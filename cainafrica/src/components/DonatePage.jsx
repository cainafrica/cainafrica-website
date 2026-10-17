// AFTER
import React, { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  DonatePage – body content only.                                    */
/*  Render it between your existing <Header /> and <Footer />.         */
/* ------------------------------------------------------------------ */

const NGN_RATE = 1500; // 1 USD = ₦1,500 – update or pass in as a prop

const GIFTS = [
  {
    id: "academic",
    usd: 20,
    title: "Academic tutoring",
    body: "Give an underserved student one month of expert-led Mathematics and English tutorials to strengthen foundational skills and improve academic performance.",
  },
  {
    id: "digital",
    usd: 25,
    title: "Digital skills training",
    body: "Equip an underserved student with one month of digital skills training, computer access, and expert instruction to build digital literacy and unlock career opportunities.",
  },
  {
    id: "one",
    usd: 45,
    popular: true,
    title: "Champion a student",
    body: "Give an underserved student one month of academic tutoring, digital skills training, library access, and mentorship to strengthen their foundation for academic success and future economic opportunity.",
  },
  {
    id: "two",
    usd: 90,
    title: "Champion two students",
    body: "Two distinct stories, two transformed futures—unlocked by the single decision you chose to make this month.",
  },
  {
    id: "five",
    usd: 225,
    title: "Champion five students",
    body: "Five students. Five lives changed! At this level, you are not just giving—you are expanding possibilities, transforming families, and reshaping entire communities.",
  },
  {
    id: "custom",
    custom: true,
    title: "Give any amount",
    body: "Every amount does something real. Give what feels right — the student on the receiving end will not know the difference in size, only the difference you made.",
  },
];

const CIRCLE_BENEFITS = [
  { lead: "Expert-Led Tutoring", rest: " in Mathematics and English to strengthen academic foundations" },
  { lead: "Digital Skills Training", rest: " with direct access to computers, high-speed internet, and expert instruction to prepare students for the future of work" },
  { lead: "A Conducive Learning Environment", rest: " featuring a well-stocked library and modern digital lab" },
  { lead: "Career Mentorship & Guidance", rest: " to help students turn their dreams into real-world opportunities" },
];

const STATS = [
  { value: "14,000+", label: "Lives Impacted Across Several Communities Since 2013" },
  { value: "7+", label: "Free Programs — From Academic Tutorials and Digital Skills Training to Mentorship and Scholarships" },
  { value: "13+", label: "Years of Consistent, Community-Driven Work in the Heart of Underserved Nigerian Communities" },
];

/* Simple inline icons so there are no extra asset dependencies */
const GoldIcon = ({ children }) => (
  <svg className="wtg-icon" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="32" fill="#d4af37" />
    <g fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </g>
  </svg>
);

const icons = {
  bank: (
    <GoldIcon>
      <path d="M14 26 32 15l18 11H14Z" />
      <path d="M18 29v15M28 29v15M36 29v15M46 29v15M13 48h38" />
    </GoldIcon>
  ),
  fundraiser: (
    <GoldIcon>
      <circle cx="32" cy="23" r="8" />
      <path d="M32 19v8M29 21.5c0-1.5 6-1.5 6 0s-6 1.5-6 3 6 1.5 6 0" />
      <path d="M14 40l10-4 10 4 16-6M14 48h22" />
    </GoldIcon>
  ),
  will: (
    <GoldIcon>
      <path d="M20 14h24v36H20z" />
      <path d="M26 22h12M26 28h12M26 34h12" />
      <circle cx="28" cy="43" r="3" />
    </GoldIcon>
  ),
  program: (
    <GoldIcon>
      <path d="M32 14 12 24l20 10 20-10-20-10Z" />
      <path d="M20 30v10c0 4 24 4 24 0V30" />
    </GoldIcon>
  ),
};

const formatMoney = (usd, currency) =>
  currency === "USD"
    ? `$${usd.toLocaleString("en-US")}`
    : `₦${Math.round(usd * NGN_RATE).toLocaleString("en-NG")}`;

export default function DonatePage({
  heroImage = "/images/hero-students.jpg", // replace with your own asset
  benevityLogo = "/images/benevity.png",
  paypalLogo = "/images/paypal.png",
  benevityUrl = "#",
  paypalUrl = "#",
  contactEmail = "info@cainafrica.org",
  // Called when a donor chooses a gift / starts checkout.
  // Wire this to your existing payment flow.
  onDonate = ({ amountUsd, currency, recurring }) =>
    console.log("donate", { amountUsd, currency, recurring }),
}) {
  const [currency, setCurrency] = useState("USD");
  const [selected, setSelected] = useState("one");
  const [customAmount, setCustomAmount] = useState("");

  const isNGN = currency === "NGN";

  const handleGift = (gift) => {
    setSelected(gift.id);
    if (!gift.custom) onDonate({ amountUsd: gift.usd, currency, recurring: true });
  };

  const handleCustom = (e) => {
    e.preventDefault();
    const value = Number(customAmount);
    if (value > 0) {
      onDonate({
        amountUsd: isNGN ? value / NGN_RATE : value,
        currency,
        recurring: true,
      });
    }
  };

  const scrollToGifts = () =>
    document.getElementById("choose-gift")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="dp">
      <style>{css}</style>

      {/* ---------------- Hero ---------------- */}
      <section className="dp-hero">
        <div className="dp-hero-text">
          <p className="dp-eyebrow">Your impact</p>
          <h1>
            <span className="red">Your Gift</span> = Quality education, digital skills, and
            life-changing opportunities for underserved students.
          </h1>
          <p className="dp-hero-sub">
            From Alimosho — Lagos' largest local government area — CAIN equips underserved young
            people with the education, digital skills, mentorship, and career support they need to
            break free from poverty.
          </p>
          <p className="dp-hero-strong">Every gift — no matter the size — makes that possible.</p>
          <button type="button" className="btn btn-red btn-pill" onClick={scrollToGifts}>
            Donate Now
          </button>
        </div>
        <div className="dp-hero-img" style={{ backgroundImage: `url(${heroImage})` }} role="img"
             aria-label="CAIN students studying together" />
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="dp-stats" aria-label="CAIN impact in numbers">
        {STATS.map((s) => (
          <div key={s.value}>
            <strong>{s.value}</strong>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ---------------- Pick your gift ---------------- */}
      <section className="dp-gifts" id="choose-gift">
        <div className="dp-gifts-head">
          <div>
            <p className="dp-eyebrow">Choose your gift</p>
            <h2>
              Pick your gift.
              <br />
              <span className="red">Own the impact.</span>
            </h2>
            <p className="dp-lead">
              Every gift below maps directly to a student's experience at CAIN. Choose what works
              for you — and know exactly what it does for them.
            </p>
            <button
              type="button"
              className="btn btn-red btn-pill"
              onClick={() => onDonate({ amountUsd: null, currency, recurring: false })}
            >
              Donate here
            </button>
          </div>

          <div className="dp-currency">
            <span className={!isNGN ? "on" : ""}>USD $</span>
            <button
              type="button"
              role="switch"
              aria-checked={isNGN}
              aria-label="Switch currency between US dollars and Nigerian naira"
              className={`dp-switch ${isNGN ? "is-ngn" : ""}`}
              onClick={() => setCurrency(isNGN ? "USD" : "NGN")}
            >
              <span />
            </button>
            <span className={isNGN ? "on" : ""}>NGN ₦</span>
          </div>
        </div>

        <ul className="dp-cards">
          {GIFTS.map((g) => {
            const active = selected === g.id;
            const secondary = isNGN ? `≈ $${g.usd}` : `≈ ${formatMoney(g.usd, "NGN")}`;
            return (
              <li key={g.id}>
                <button
                  type="button"
                  className={`dp-card ${active ? "is-active" : ""}`}
                  aria-pressed={active}
                  onClick={() => handleGift(g)}
                >
                  {g.popular && <span className="dp-badge">★ Most popular</span>}
                  <span className="dp-price">
                    {g.custom ? "Custom" : `${formatMoney(g.usd, currency)}/mo`}
                  </span>
                  <span className="dp-approx">{g.custom ? "\u00A0" : secondary}</span>
                  <hr />
                  <span className="dp-card-title">{g.title}</span>
                  <span className="dp-card-body">{g.body}</span>
                </button>

                {g.custom && active && (
                  <form className="dp-custom" onSubmit={handleCustom}>
                    <label htmlFor="custom-amount">Amount ({isNGN ? "₦" : "$"} per month)</label>
                    <div>
                      <input
                        id="custom-amount"
                        type="number"
                        min="1"
                        inputMode="decimal"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                      />
                      <button type="submit" className="btn btn-red">Give</button>
                    </div>
                  </form>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* ---------------- 120 Futures Circle ---------------- */}
      <section className="dp-circle">
        <div className="dp-circle-top">
          <div>
            <p className="dp-eyebrow">Monthly giving</p>
            <h2>
              Join the
              <br />
              <span className="red">120 Futures Circle.</span>
            </h2>
            <p className="dp-circle-copy">
              The 120 Futures Circle is an exclusive community of monthly donors— champions who
              believe that every underserved young person deserves the tools, skills, and support
              to unlock their potential, thrive, lead, and shape a brighter future.
            </p>
            <p className="dp-circle-strong">
              Your recurring gift helps provide 120 underserved students each year with:
            </p>
          </div>

          <div className="dp-circle-cta">
            <button type="button" className="btn btn-red btn-wide" onClick={scrollToGifts}>
              Join the circle →
            </button>
            <button
              type="button"
              className="btn btn-outline btn-wide"
              onClick={() => onDonate({ amountUsd: null, currency, recurring: false })}
            >
              Give one time
            </button>
          </div>
        </div>

        <ul className="dp-benefits">
          {CIRCLE_BENEFITS.map((b) => (
            <li key={b.lead}>
              <strong>{b.lead}</strong>
              {b.rest}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- Ways to give ---------------- */}
      <section className="dp-ways">
        <h2 className="red">Ways to give</h2>

        <div className="dp-ways-grid">
          <article>
            <img className="wtg-logo" src={benevityLogo} alt="Benevity" />
            <div className="wtg-card">
              <h3>Donate through Benevity</h3>
              <p>
                Match your donation by donating through your employer. Find "Catering to Africans
                In Need" in your Employer's Workplace Giving and Matching Program powered by
                Benevity Inc.
              </p>
              <a className="btn btn-red" href={benevityUrl} target="_blank" rel="noopener noreferrer">
                Find Us
              </a>
            </div>
          </article>

          <article>
            <img className="wtg-logo" src={paypalLogo} alt="PayPal" />
            <div className="wtg-card">
              <h3>Donate online with PayPal</h3>
              <p>
                Please click the button below to donate. You will be linked directly to our PayPal
                account.
              </p>
              <a className="btn btn-red" href={paypalUrl} target="_blank" rel="noopener noreferrer">
                Donate Here
              </a>
            </div>
          </article>

          <article>
            {icons.bank}
            <div className="wtg-card">
              <h3>Bank Transfer (Nigeria)</h3>
              <p>Donate in Naira by transferring directly into our Nigerian bank account.</p>
              <dl>
                <dt>Account Name</dt>
                <dd>CAIN Educational and Medical Foundation</dd>
                <dt>Account Number</dt>
                <dd>1019225521</dd>
                <dt>Bank Name</dt>
                <dd>United Bank for Africa (UBA)</dd>
              </dl>
            </div>
          </article>

          <article>
            {icons.fundraiser}
            <div className="wtg-card">
              <h3>Become a Fundraiser</h3>
              <p>
                Whether at your workplace, in social groups, or through personal celebrations,
                every dollar raised moves us closer to equipping young minds with the tools for a
                brighter, tech-enabled future. <strong>Ready to inspire change?</strong>
              </p>
              <a className="wtg-mail" href={`mailto:${contactEmail}`}>
                Send us an email at {contactEmail} to get started!
              </a>
            </div>
          </article>

          <article>
            {icons.will}
            <div className="wtg-card">
              <h3>Leave a gift in your will</h3>
              <p>
                Ensure your values live on by including CAIN in your will or estate plan. A gift in
                your will costs nothing today, but guarantees that future generations of African
                students receive the education, mentorship, and technology needed to thrive.
                Members of our CAIN Legacy Circle enjoy lifetime recognition.
              </p>
              <a className="wtg-mail" href={`mailto:${contactEmail}`}>
                Send us an email at {contactEmail} to get started!
              </a>
            </div>
          </article>

          <article>
            {icons.program}
            <div className="wtg-card">
              <h3>Name a program</h3>
              <p>
                Sponsor an educational program in your name—or in honor of a loved one—with a major
                gift <strong>starting at $25,000</strong>, and empower underserved African students
                with the critical tools and digital skills to thrive.
              </p>
              <a className="wtg-mail" href={`mailto:${contactEmail}`}>
                Send us an email at {contactEmail} to get started!
              </a>
            </div>
          </article>
        </div>

        <div className="dp-ways-cta">
          <button type="button" className="btn btn-red" onClick={scrollToGifts}>
            Donate today
          </button>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles (scoped under .dp). Move to a .css / module file if you     */
/*  prefer.                                                            */
/* ------------------------------------------------------------------ */
const css = `
.dp{--red:#f00;--red-ui:#ed2224;--black:#000;--ink:#111;--muted:#777;--gold:#d4af37;
  font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;color:var(--ink);background:#fff;line-height:1.5}
.dp *{box-sizing:border-box}
.dp h1,.dp h2,.dp h3,.dp p,.dp ul,.dp dl,.dp dd{margin:0}
.dp ul{padding:0;list-style:none}
.dp .red{color:var(--red)}
.dp-eyebrow{display:flex;align-items:center;gap:.6rem;color:var(--red);font-size:.75rem;font-weight:700;
  letter-spacing:.14em;text-transform:uppercase;margin-bottom:1.25rem}
.dp-eyebrow::before{content:"";width:1.25rem;height:2px;background:currentColor}
.dp h2{font-size:clamp(2rem,4.5vw,2.9rem);font-weight:800;line-height:1.05;text-transform:uppercase;letter-spacing:-.01em}

.btn{display:inline-block;border:2px solid transparent;border-radius:6px;padding:.8rem 1.4rem;font:inherit;
  font-weight:700;text-decoration:none;cursor:pointer;text-align:center}
.btn-red{background:var(--red-ui);color:#fff}
.btn-red:hover{background:#c91a1c}
.btn-outline{background:transparent;color:#fff;border-color:#fff;border-radius:0;text-transform:uppercase;letter-spacing:.18em}
.btn-outline:hover{background:#fff;color:#000}
.btn-wide{width:100%;text-transform:uppercase;letter-spacing:.18em;border-radius:0}
.dp :focus-visible{outline:3px solid #ffb703;outline-offset:3px}

/* hero */
.dp-hero{display:grid;grid-template-columns:1.05fr 1fr;background:var(--black);color:#fff;min-height:520px}
.dp-hero-text{padding:4.5rem clamp(1.25rem,4vw,3.3rem);align-self:center}
.dp-hero h1{font-size:clamp(1.9rem,3.6vw,2.5rem);line-height:1.2;font-weight:800;max-width:30rem;margin-bottom:2rem}
.dp-hero-sub{max-width:32rem;font-size:.95rem;margin-bottom:1.5rem}
.dp-hero-strong{font-weight:700;font-size:1.1rem;margin-bottom:2rem}
.btn-pill{border-radius:2rem;padding:.8rem 1.6rem;font-size:1.05rem}
.dp-lead+.btn-pill{margin-top:1.5rem}
.dp-hero-img{background-size:cover;background-position:center;min-height:320px;
  -webkit-mask-image:linear-gradient(to right,transparent,#000 35%);mask-image:linear-gradient(to right,transparent,#000 35%)}

/* stats */
.dp-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;background:var(--red);color:#fff;
  padding:2.5rem clamp(1.25rem,4vw,3.3rem)}
.dp-stats strong{display:block;font-size:clamp(2.6rem,5vw,3.6rem);line-height:1.1;font-weight:800}
.dp-stats p{font-size:1.15rem;font-weight:700;line-height:1.3;margin-top:.6rem}

/* gifts */
.dp-gifts{padding:2.5rem clamp(1.25rem,4vw,3.3rem) 3.5rem}
.dp-gifts-head{display:flex;justify-content:space-between;gap:2rem;flex-wrap:wrap;margin-bottom:3rem}
.dp-lead{max-width:36rem;margin-top:1.5rem}
.dp-currency{display:flex;align-items:center;gap:.8rem;font-size:.95rem;color:var(--muted);align-self:flex-start}
.dp-currency .on{color:var(--ink);font-weight:600}
.dp-switch{width:3.4rem;height:2.2rem;border-radius:2rem;border:0;background:var(--red);padding:.25rem;cursor:pointer;display:flex}
.dp-switch span{width:1.7rem;height:1.7rem;border-radius:50%;background:#fff;transition:transform .2s}
.dp-switch.is-ngn span{transform:translateX(1.2rem)}

.dp-cards{display:grid;grid-template-columns:repeat(6,1fr);gap:.9rem;align-items:start}
.dp-card{position:relative;display:flex;flex-direction:column;width:100%;text-align:left;font:inherit;color:inherit;
  background:#fff;border:1px solid #ddd;border-radius:10px;padding:1rem;cursor:pointer;min-height:13.5rem}
.dp-card:hover{border-color:#999}
.dp-price{font-size:1.4rem;font-weight:800}
.dp-approx{font-size:.8rem;color:var(--muted);margin:.3rem 0 .6rem}
.dp-card hr{width:1.2rem;border:0;border-top:1px solid #bbb;margin:.2rem 0 1rem}
.dp-card-title{font-size:.7rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--red);margin-bottom:.6rem}
.dp-card-body{font-size:.78rem;line-height:1.45}
.dp-card.is-active{background:var(--red);border-color:var(--black);color:#fff}
.dp-card.is-active .dp-approx{color:#ffd0d0}
.dp-card.is-active hr{border-color:#fff}
.dp-card.is-active .dp-card-title{color:#fff}
.dp-badge{position:absolute;top:-.7rem;left:50%;transform:translateX(-50%);background:#000;color:#fff;
  font-size:.6rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;padding:.3rem .8rem;border-radius:1rem;white-space:nowrap}
.dp-custom{margin-top:.75rem}
.dp-custom label{display:block;font-size:.8rem;font-weight:600;margin-bottom:.4rem}
.dp-custom div{display:flex;gap:.5rem}
.dp-custom input{flex:1;min-width:0;padding:.65rem;border:1px solid #bbb;border-radius:6px;font:inherit}
.dp-custom .btn{padding:.65rem 1rem}

/* circle */
.dp-circle{background:var(--black);color:#fff;padding:3.5rem clamp(1.25rem,4vw,3.3rem)}
.dp-circle-top{display:flex;justify-content:space-between;gap:3rem;flex-wrap:wrap;align-items:flex-end;margin-bottom:3rem}
.dp-circle-top>div:first-child{flex:1 1 32rem;max-width:42rem}
.dp-circle-copy{font-size:1.1rem;line-height:1.6;margin:2rem 0 1.5rem}
.dp-circle-strong{font-weight:700;font-size:1.1rem;max-width:32rem}
.dp-circle-cta{flex:0 0 18rem;display:grid;gap:1.5rem;width:100%;max-width:18rem}
.dp-benefits{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
.dp-benefits li{border:1px solid #fff;padding:1.4rem 1rem;text-align:center;font-size:1.05rem;line-height:1.4}

/* ways to give */
.dp-ways{padding:4rem clamp(1.25rem,6vw,8.5rem) 4rem}
.dp-ways h2{font-size:clamp(2.2rem,5vw,3.2rem);color:var(--red-ui);margin-bottom:3rem}
.dp-ways-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:3.5rem 3rem}
.wtg-icon,.wtg-logo{display:block;height:5rem;width:auto;margin-bottom:1.5rem}
.wtg-card{border:1px solid #222;border-radius:24px;padding:1.4rem 1.2rem 1.6rem;height:calc(100% - 6.5rem)}
.wtg-card h3{font-size:1.5rem;font-weight:700;margin-bottom:1.3rem}
.wtg-card p{margin-bottom:1.5rem;max-width:22rem}
.wtg-card dl{display:grid;gap:.1rem}
.wtg-card dt{font-weight:700;margin-top:.9rem}
.wtg-mail{color:var(--red-ui);font-weight:700;font-size:1.1rem;text-decoration:none;display:block}
.dp-ways-cta{display:flex;justify-content:center;margin-top:4rem}

/* responsive */
@media (max-width:1100px){
  .dp-cards{grid-template-columns:repeat(3,1fr)}
  .dp-benefits{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:800px){
  .dp-hero{grid-template-columns:1fr}
  .dp-hero-img{order:-1;min-height:260px;-webkit-mask-image:linear-gradient(to bottom,#000 60%,transparent);mask-image:linear-gradient(to bottom,#000 60%,transparent)}
  .dp-hero-text{padding-top:1rem}
  .dp-stats{grid-template-columns:1fr}
  .dp-ways-grid{grid-template-columns:1fr}
  .wtg-card{height:auto}
}
@media (max-width:600px){
  .dp-cards,.dp-benefits{grid-template-columns:1fr}
  .dp-circle-cta{max-width:none}
}
@media (prefers-reduced-motion:reduce){.dp-switch span{transition:none}}
`;
