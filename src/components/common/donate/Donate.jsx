import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoHeart, IoShieldCheckmark, IoSparkles, IoEarth } from "react-icons/io5";
import "./donate.css";

const DonationPage = () => {
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("once"); // 'once' or 'monthly'

  const donationTiers = [
    { value: "15", impact: "Provides a month of sanitary supplies for 3 girls." },
    { value: "30", impact: "Supplies nutritious meals to a vulnerable family for 2 weeks." },
    { value: "50", impact: "Funds rescue shelter accommodation and mentorship for a fleeing girl." },
    { value: "100", impact: "Sponsors medical support and counseling workshops in the community." },
  ];

  const handleTierSelect = (val) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(e.target.value);
  };

  const currentImpactText = donationTiers.find(t => t.value === amount)?.impact 
    || "Directly funds emergency rescues, education, and community resilience in Kuria.";

  const handleSubmit = (e) => {
    e.preventDefault();
    // PayPal SDK Logic will hook in here later
    alert(`Redirecting to payment gateway for $${amount} (${frequency})...`);
  };

  return (
    <div className="donation-page">
      {/* Hero Banner Section */}
      <header className="donate-hero">
        <div className="donate-hero-overlay"></div>
        <div className="donate-container hero-flex">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <span className="badge">Transform Lives in Kuria, Kenya</span>
            <h1>Be the Sanctuary They Arrive Seeking</h1>
            <p>
              Your generosity provides immediate protection for young girls fleeing FGM, 
              sustains HIV-affected widows, and builds long-term climate resilience. 
              Change a trajectory today.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content Workspace */}
      <div className="donate-container main-grid">
        
        {/* Left Side: Emotional & Trust Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="story-panel"
        >
          <h2>Where Your Money Goes</h2>
          <p className="lead-p">
            We operate directly on the ground. With minimal administrative overhead, 
            virtually every dollar you send goes straight to community transformation.
          </p>

          <div className="impact-cards">
            <div className="i-card">
              <IoHeart className="i-icon color-orange" />
              <div>
                <h3>Rescue & Protection</h3>
                <p>Maintaining safe spaces, legal shelter support, and warm beds for girls escaping childhood cut practices.</p>
              </div>
            </div>

            <div className="i-card">
              <IoSparkles className="i-icon color-blue" />
              <div>
                <h3>Widow Empowerment</h3>
                <p>Providing seed capital, vocational training, and agricultural tools to HIV-affected widows building businesses.</p>
              </div>
            </div>

            <div className="i-card">
              <IoEarth className="i-icon color-green" />
              <div>
                <h3>Climate & Nutrition</h3>
                <p>Distributing emergency nutrition kits and training farmers in sustainable, drought-resistant agricultural techniques.</p>
              </div>
            </div>
          </div>

          <div className="trust-footer">
            <IoShieldCheckmark className="trust-icon" />
            <p><strong>Secure Contribution Platform:</strong> All transactions are encrypted. We will soon process donations seamlessly via PayPal for ultimate buyer protection.</p>
          </div>
        </motion.div>

        {/* Right Side: Interactive Donation Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="form-panel"
        >
          <form onSubmit={handleSubmit} className="donate-form">
            
            {/* Frequency Toggle */}
            <div className="frequency-toggle">
              <button 
                type="button" 
                className={frequency === "once" ? "active" : ""} 
                onClick={() => setFrequency("once")}
              >
                Give Once
              </button>
              <button 
                type="button" 
                className={frequency === "monthly" ? "active" : ""} 
                onClick={() => setFrequency("monthly")}
              >
                Monthly Support
              </button>
            </div>

            {/* Amount Grid Selection */}
            <label className="section-label">Select Donation Amount (USD)</label>
            <div className="amount-grid">
              {donationTiers.map((tier) => (
                <button
                  key={tier.value}
                  type="button"
                  className={`amount-btn ${amount === tier.value && !customAmount ? "selected" : ""}`}
                  onClick={() => handleTierSelect(tier.value)}
                >
                  ${tier.value}
                </button>
              ))}
            </div>

            {/* Custom Input field */}
            <div className="custom-input-wrapper">
              <span className="currency-symbol">$</span>
              <input 
                type="number" 
                placeholder="Enter custom amount" 
                value={customAmount}
                onChange={handleCustomChange}
                className="custom-amount-input"
                min="5"
              />
            </div>

            {/* Live Impact Statement Box */}
            <div className="live-impact-box">
              <p><strong>Your Impact:</strong> {currentImpactText}</p>
            </div>

            {/* Submit / PayPal Placeholder Button */}
            <button type="submit" className="submit-donation-btn">
              Donate ${amount || "0"} {frequency === "monthly" ? "/ Month" : "Now"}
            </button>

            <p className="secure-text">🔒 256-Bit Encrypted Connection</p>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default DonationPage;