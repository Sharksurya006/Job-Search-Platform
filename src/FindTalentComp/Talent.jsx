import React from 'react'
import TalentCard from './TalentCard.jsx';
import TalentData from '../Talentsdata.js'
import { Divider } from '@mantine/core';
import Sorting from '../FindJobsComp/Sorting.jsx';
const Talent = () => {
	const flag = true;
  return (<>
       <div className="flex justify-between px-[20px]">
          <div className="text-xl font-semibold">Recommended Talents</div>
			<div>
				<Sorting/>
			</div>
	</div>
	
			<Divider className="my-6" size="xs" color="black"/>
	     <div className="grid grid-cols-4 gap-2.5 px-[20px] py-[20px]">
          {
			TalentData.map((item,index)=><div key={index}>
				 <TalentCard {...item} flag/>
			</div>)
		  }
	   </div>
  </>
  )
}

export default Talent