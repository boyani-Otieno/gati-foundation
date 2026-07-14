import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IoHeart,
  IoShieldCheckmark,
  IoSparkles,
  IoEarth,
  IoSchool,
  IoPeople,
  IoLeaf,
  IoWoman
} from "react-icons/io5";

import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

import "./donate.css";

const DonationPage = () => {

  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("once");

  const donationTiers = [
    {
      value: "15",
      impact:
        "Helps provide dignity supplies and mentorship resources that keep a girl in school."
    },
    {
      value: "30",
      impact:
        "Supports community dialogues that help protect girls from FGM and child marriage."
    },
    {
      value: "50",
      impact:
        "Funds mentorship, career guidance and educational support for vulnerable girls."
    },
    {
      value: "100",
      impact:
        "Strengthens community programmes that empower women and create lasting change."
    }
  ];

  const currentImpactText =
    donationTiers.find((item) => item.value === amount)?.impact ||
    "Every contribution directly strengthens programmes that empower girls, women and communities across Kuria.";

  return (

<PayPalScriptProvider
options={{
"client-id":"YOUR_PAYPAL_CLIENT_ID",
currency:"USD"
}}
>

<div className="donation-page">

<header className="donate-hero">

<div className="donate-hero-overlay"></div>

<div className="donate-container hero-flex">

<motion.div

className="hero-text"

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

transition={{duration:.8}}

>

<span className="badge">

SUPPORT GIRLS. STRENGTHEN COMMUNITIES.

</span>

<h1>

Your Gift Creates
<br />
Lasting Change

</h1>

<p>

Every contribution helps girls and young women in Kuria overcome harmful cultural practices, remain in school, build safer futures and create lasting opportunities for themselves and their communities.

</p>

</motion.div>

</div>

</header>

<div className="donate-container main-grid">

<motion.div

className="story-panel"

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.7}}

>

<h2>

Where Your Support Creates Lasting Change

</h2>

<p className="lead-p">

Your contribution creates lasting opportunities for girls and young women in Kuria, where recurring conflict, harmful cultural practices and systemic gender inequality continue to limit opportunity. Every donation helps create safer communities, expand educational opportunities and empower young women and girls to build stronger future.

</p>

<div className="impact-cards">

<div className="i-card">

<IoShieldCheckmark className="i-icon gold"/>

<div>

<h3>

Protecting Girls from FGM

</h3>

<p>

Supporting community dialogues, girl-centred mentorship and home visits that help protect girls from Female Genital Mutilation.

</p>

</div>

</div>

<div className="i-card">

<IoHeart className="i-icon red"/>

<div>

<h3>

Preventing Child Marriage

</h3>

<p>

Helping girls remain in school through mentorship, dignity support, career guidance and community engagement.

</p>

</div>

</div>

<div className="i-card">

<IoSparkles className="i-icon blue"/>

<div>

<h3>

Reducing Teenage Pregnancy

</h3>

<p>

Providing age-appropriate reproductive health education, trusted mentorship and life guidance.

</p>

</div>

</div>

<div className="i-card">

<IoSchool className="i-icon green"/>

<div>

<h3>

Keeping Girls in School

</h3>

<p>

Providing dignity supplies, educational resources, mentorship and family engagement that remove barriers to learning.

</p>

</div>

</div>

<div className="i-card">

<IoWoman className="i-icon orange"/>

<div>

<h3>

Advancing Women's Safety

</h3>

<p>

Supporting grassroots initiatives that strengthen confidence, independence and informed decision-making.

</p>

</div>

</div>

<div className="i-card">

<IoPeople className="i-icon purple"/>

<div>

<h3>

Rebuilding Livelihoods

</h3>

<p>

Helping widows and vulnerable women strengthen livelihoods through practical skills and sustainable income opportunities.

</p>

</div>

</div>

<div className="i-card">

<IoLeaf className="i-icon green"/>

<div>

<h3>

Climate & Food Security

</h3>

<p>

Supporting women-led households with climate-smart agriculture, nutrition and resilient livelihood practices.

</p>

</div>

</div>

<div className="i-card">

<IoEarth className="i-icon gold"/>

<div>

<h3>

Building Stronger Communities

</h3>

<p>

Every contribution strengthens local leadership, community resilience and lasting opportunities for girls and women.

</p>

</div>

</div>

</div>
</motion.div>

<motion.div
  className="form-panel"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>

  <div className="donate-form">

    <span className="form-tag">
      MAKE A DONATION
    </span>

    <h2>
      Invest in a Girl's Future
    </h2>

    <p className="form-intro">
      Choose a one-time or monthly contribution. Every gift helps create
      safer communities, stronger futures, and lasting opportunities for
      girls and young women.
    </p>

    <div className="frequency-toggle">

      <button
        className={frequency === "once" ? "active" : ""}
        onClick={() => setFrequency("once")}
      >
        Give Once
      </button>

      <button
        className={frequency === "monthly" ? "active" : ""}
        onClick={() => setFrequency("monthly")}
      >
        Monthly Giving
      </button>

    </div>

    <label className="section-label">

      Select Donation Amount (USD)

    </label>

    <div className="amount-grid">

      {donationTiers.map((tier) => (

        <button
          key={tier.value}
          className={
            amount === tier.value && !customAmount
              ? "amount-btn selected"
              : "amount-btn"
          }
          onClick={() => {
            setAmount(tier.value);
            setCustomAmount("");
          }}
        >
          ${tier.value}
        </button>

      ))}

    </div>

    <div className="custom-input-wrapper">

      <span>$</span>

      <input
        type="number"
        placeholder="Enter another amount"
        value={customAmount}
        min="5"
        onChange={(e) => {
          setCustomAmount(e.target.value);
          setAmount(e.target.value);
        }}
      />

    </div>

    <div className="live-impact-box">

      <h4>Your Gift Today</h4>

      <p>{currentImpactText}</p>

    </div>

    <div className="paypal-button-wrapper">

      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          shape: "pill",
          label: "donate"
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
                description:
                  frequency === "monthly"
                    ? "Monthly support for GATI Foundation"
                    : "Donation to GATI Foundation",
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(() => {
            alert(
              "Thank you for supporting girls and young women in Kuria. Your generosity is creating lasting change."
            );
          });
        }}
      />

    </div>

    <p className="secure-text">

      🔒 Secure payment powered by PayPal

    </p>

  </div>

</motion.div>

</div>

<section className="commitment-section">

  <div className="donate-container">

    <div className="commitment-box">

      <IoShieldCheckmark className="commitment-icon" />

      <h2>
        Our Commitment to Your Impact
      </h2>

      <p>

        Every contribution is carefully directed to where it can create
        the greatest difference. Guided by deep local knowledge,
        trusted community relationships, and responsible stewardship,
        we ensure your generosity helps girls and young women build
        safer, stronger, and more independent futures.

      </p>

      <p>

        Together, we are protecting girls, expanding educational
        opportunities, strengthening women, and building resilient
        communities across Kuria.

      </p>

    </div>

  </div>

</section>

</div>

</PayPalScriptProvider>

  );
};

export default DonationPage;