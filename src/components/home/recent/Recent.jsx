import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Projects done' subtitle='From grassroots advocacy to direct community support, our recent initiatives focus on delivering immediate relief and long-term empowerment to vulnerable families across the Kuria region.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
