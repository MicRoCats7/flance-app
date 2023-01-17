import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/headerSection'
import Sponsor from '../components/Sponsor/Sponsor';
import Steps from '../components/simpleSteps/steps';
import Explore from '../components/ExploreJobs/exploreJobs';
import Testimonial from '../components/testimonial/testimonial';
import Footer from '../components/footer/footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Sponsor />
      <Steps />
      <Explore />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home