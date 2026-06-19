import React from 'react'
import JobCards from '../FindJobsComp/JobCard.jsx'
import Jobcard from '../JobCardData.js'
const JobsProfile = () => {
  return (
	<div className="grid grid-cols-2 gap-3 mt-[20px]">
		{
			Jobcard.map((item,index)=><div key={index}>
				 <JobCards {...item}/>
			</div>)
	    }
	</div>
  )
}

export default JobsProfile