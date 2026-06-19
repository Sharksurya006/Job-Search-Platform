import React from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobRoles from '../LandingPage/JobRoles'
import Testimonials from '../LandingPage/Testimonials'
import Reviews from '../LandingPage/Reviews'
import Subscribe from '../LandingPage/Subscribe'
import Connect from '../LandingPage/Connect'


const Homepage = () => {
  return (
	<div className="font-['poppins']">
		<DreamJob/>
		<Companies/>
		<JobRoles/>
		<Testimonials/>
		<Reviews/>
		<Subscribe/>
	</div>
  )
}

export default Homepage