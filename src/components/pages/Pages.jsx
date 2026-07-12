import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Need from "../need/Need"
import Contact from "../contact/Contact"
import Donate from "../common/donate/Donate"
import SmallNav from "../common/header/SmallNav"
import Gallery from "../gallery/Gallery"
import Inspiration from "../about/Inspiration"
import Leadership from "../about/Leadership"
import Partners from "../about/Partners"
import OurWork from "../Our/OurWork"
import OurImpact from "../Our/OurImpact"
import Volunteer from "../volunteer/Volunteer"
import Careers from "../Careers/Careers"

const Pages = () => {
  return (
    <>
      <Router>
        <SmallNav />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/inspiration' component={Inspiration} />
          <Route exact path='/leadership' component={Leadership} />
          <Route exact path='/partners' component={Partners} />
          <Route exact path='/need' component={Need} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/work' component={OurWork} />
          <Route exact path='/impact' component={OurImpact} />
          <Route exact path='/volunteer' component={Volunteer} />
          <Route exact path='/careers' component={Careers} />
          <Route exact path='/partners' component={Partners} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
