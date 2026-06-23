import React from "react"
import Heading from "../../common/Heading"
import styles from "./Location.module.css"

const Location = () => {

  const promises = [
    {
      title: "Safety",
      text: "Every girl deserves protection from harmful cultural practices, violence, and discrimination."
    },
    {
      title: "Education",
      text: "We believe education is the most powerful tool for breaking cycles of poverty and inequality."
    },
    {
      title: "Leadership",
      text: "Girls should be empowered to become confident leaders and changemakers within their communities."
    },
    {
      title: "Opportunity",
      text: "Every young woman deserves equal access to opportunities that allow her talents and dreams to flourish."
    }
  ]


  const impactData = [
    {
      number: "500+",
      title: "Girls Reached"
    },
    {
      number: "10+",
      title: "Families Supported"
    },
    {
      number: "50+",
      title: "Leadership Trainings"
    },
    {
      number: "5+",
      title: "Community Forums"
    }
  ]


  return (

    <section className={styles.girlsPromiseSection}>

      <div className={styles.girlsPromiseContainer}>


        <Heading
          title="Our Promise To Every Girl"
          subtitle="Every girl deserves the freedom to dream, learn, lead, and thrive without limitations."
        />



        <div className={styles.girlsPromiseGrid}>


          {promises.map((item,index)=>(

            <div 
              className={styles.girlsPromiseCard}
              key={index}
            >

              <div className={styles.girlsPromiseIcon}>
                ✓
              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.text}
              </p>


            </div>

          ))}


        </div>




        <div className={styles.communityImpactWrapper}>


          <div className={styles.communityImpactText}>


            <span className={styles.communityImpactTag}>
              OUR IMPACT
            </span>


            <h2>
              Creating Lasting Change

              <span>
                Across Kuria Communities
              </span>

            </h2>


            <p>
              Through advocacy, mentorship, education and community
              engagement, we are helping girls and women unlock their
              potential while challenging harmful practices that limit
              their opportunities.
            </p>


          </div>




          <div className={styles.communityImpactGrid}>


            {impactData.map((item,index)=>(

              <div 
                className={styles.communityImpactCard}
                key={index}
              >

                <h3>
                  {item.number}
                </h3>


                <p>
                  {item.title}
                </p>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>

  )
}


export default Location