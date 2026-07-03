import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IoHeart,
  IoShieldCheckmark,
  IoSparkles,
  IoEarth
} from "react-icons/io5";

import {
  PayPalScriptProvider,
  PayPalButtons
} from "@paypal/react-paypal-js";

import "./donate.css";


const DonationPage = () => {


  const [amount,setAmount] = useState("50");
  const [customAmount,setCustomAmount] = useState("");
  const [frequency,setFrequency] = useState("once");



  const donationTiers = [
    {
      value:"15",
      impact:"Provides a month of sanitary supplies for 3 girls."
    },
    {
      value:"30",
      impact:"Supplies nutritious meals to a vulnerable family for 2 weeks."
    },
    {
      value:"50",
      impact:"Funds rescue shelter accommodation and mentorship for a fleeing girl."
    },
    {
      value:"100",
      impact:"Sponsors medical support and counseling workshops in the community."
    }
  ];



  const currentImpactText =
    donationTiers.find(
      item=>item.value===amount
    )?.impact ||
    "Directly funds emergency rescues, education, and community resilience in Kuria.";



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
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
>

<span className="badge">
Transform Lives in Kuria, Kenya
</span>


<h1>
Her Legacy. Their Future.
</h1>


</motion.div>


</div>

</header>




<div className="donate-container main-grid">



<motion.div
className="story-panel"
>


<h2>
Where Your Money Goes
</h2>


<p className="lead-p">

We operate directly on the ground. Your contribution supports
protection, education, empowerment and community transformation.

</p>




<div className="impact-cards">


<div className="i-card">
<IoHeart className="i-icon color-orange"/>
<div>
<h3>
Rescue & Protection
</h3>
<p>
Safe spaces and support for vulnerable girls.
</p>
</div>
</div>



<div className="i-card">
<IoSparkles className="i-icon color-blue"/>
<div>
<h3>
Education & Empowerment
</h3>
<p>
Building confidence and leadership opportunities.
</p>
</div>
</div>




<div className="i-card">
<IoEarth className="i-icon color-green"/>
<div>
<h3>
Community Growth
</h3>
<p>
Helping families create sustainable futures.
</p>
</div>
</div>
</div>
<div className="trust-footer">

<IoShieldCheckmark className="trust-icon"/>

<p>
<strong>
Secure PayPal Donation:
</strong>
 Your payment is protected by PayPal encryption.
</p>


</div>


</motion.div>







<motion.div
className="form-panel"
>


<div className="donate-form">



<div className="frequency-toggle">


<button
className={frequency==="once"?"active":""}
onClick={()=>setFrequency("once")}
>
Give Once
</button>


<button
className={frequency==="monthly"?"active":""}
onClick={()=>setFrequency("monthly")}
>
Monthly Support
</button>


</div>





<label className="section-label">

Select Donation Amount (USD)

</label>





<div className="amount-grid">


{donationTiers.map(tier=>(


<button

key={tier.value}

className={
amount===tier.value && !customAmount
?
"amount-btn selected"
:
"amount-btn"
}


onClick={()=>{

setAmount(tier.value)
setCustomAmount("")

}}


>

${tier.value}

</button>


))}


</div>







<div className="custom-input-wrapper">


<span>
$
</span>


<input

type="number"

placeholder="Custom amount"

value={customAmount}

onChange={(e)=>{

setCustomAmount(e.target.value)
setAmount(e.target.value)
}}
min="5"
/>
</div>
<div className="live-impact-box">

<p>

<strong>
Your Impact:
</strong>

{currentImpactText}

</p>

</div>
<div className="paypal-button-wrapper">
<PayPalButtons
style={{
layout:"vertical",
color:"gold",
shape:"pill"
}}
createOrder={(data,actions)=>{
return actions.order.create({
purchase_units:[
{
amount:{
value:amount
},
description:
frequency==="monthly"
?
"Monthly donation support"
:
"Community donation"}]})}}
onApprove={(data,actions)=>{
return actions.order.capture()
.then(()=>{

alert(
"Thank you for supporting our mission ❤️")})}}/>
</div>
<p className="secure-text">
🔒 PayPal Secure Checkout
</p>
</div>
</motion.div>





</div>


</div>


</PayPalScriptProvider>


  )

}


export default DonationPage;