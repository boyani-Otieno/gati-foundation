import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Projects done' subtitle=' Our recent projects empower girls through mentorship, advocacy, and dignity support, creating opportunities for them to thrive in their community' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
