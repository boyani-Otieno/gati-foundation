import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./team.css";

import donate from "../../../assets/images/customer/donate.jpg";
import mentor from "../../../assets/images/customer/mentor.jpeg";
import child from "../../../assets/images/customer/girl-child.jpeg";

import { IoArrowForward } from "react-icons/io5";


function Team(){

useEffect(()=>{

AOS.init({
duration:1200,
once:true
});

},[]);



const programs=[

{
image:donate,
title:"Empowering Through Support",
text:"Your contribution helps provide essential supplies, health support, and opportunities that restore dignity and hope."
},


{
image:mentor,
title:"Protecting & Mentoring Girls",
text:"We walk alongside girls affected by harmful practices, providing mentorship, safety, education, and leadership."
},


{
image:child,
title:"Building A Better Future",
text:"Together with communities, we challenge harmful traditions and create pathways for equality and opportunity."
}

];



return(

<section className="mission-section">


<div className="mission-title">

<h2>
Creating Change That Lasts
</h2>

<p>
Our work focuses on protecting girls, empowering women,
and strengthening communities through sustainable action.
</p>

</div>




<div className="mission-grid">


{programs.map((item,index)=>(


<div 
className="mission-card"
key={index}
data-aos="fade-up"
>



<img 
src={item.image}
alt={item.title}
/>



<div className="mission-overlay">


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>



<a href="/contact">

Learn More 
<IoArrowForward/>

</a>


</div>


</div>


))}



</div>


</section>


)

}


export default Team;