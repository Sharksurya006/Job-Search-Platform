import React from 'react'
import Sort from './Sorting';
import Jobcard from '../JobCardData.js'
import JobCards from './JobCard.jsx'
import { Divider } from '@mantine/core';
const Jobs = () => {
  return (<>
       <div className="flex justify-between px-[20px]">
          <div className="text-xl font-semibold">Recommended Jobs</div>
			<div>
				<Sort/>
			</div>
	</div>
	
			<Divider className="my-6" size="xs" color="black"/>
	     <div className="grid grid-cols-4 gap-2.5 px-[20px] py-[20px]">
          {
			Jobcard.map((item,index)=><div key={index}>
				 <JobCards {...item}/>
			</div>)
		  }
	   </div>
  </>
  )
}

export default Jobs