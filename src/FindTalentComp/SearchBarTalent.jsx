import React, { useState } from 'react'
import { RangeSlider } from '@mantine/core'
import Skillsdata from '../Skillsdata.js'
import MultiInput from '../FindJobsComp/MultiInput'
import { FaRegCircleUser } from "react-icons/fa6";

const SearchBarTalent = () => {
	const [value,setValue] = useState([2,100])
  return (
	<div className="flex justify-between gap-2 items-center mx-[10px] my-[10px]">
	  <div className="flex gap-2 items-center">
          <FaRegCircleUser className="h-[20px] w-[20px] flex items-center mt-[15px]" />
		  <input type="text" className="w-[150px] h-[38px] focus:outline-none mt-[18px] border-1 border-green-600 px-3" placeholder="Talent Name"/>
	  </div>
	  {
		Skillsdata.map((item,index)=><div key = {index} className="mt-[20px] w-1/5 focus:outline-none">
			<MultiInput {...item} />
			
		</div>)
	  }
	  <div className="w-1/5 mt-[15px] [&_.mantine-Slider-label]:!translate-y-10">
		<div className="flex text-sm justify-between">
		   <div className="">Salary</div>
		   <div>&#8377;{value[0]}LPA - &#8377;{value[1]}LPA</div>
		</div>
		 <RangeSlider labelTransitionProps={{
		  transition: 'skew-down',
		  duration: 150,
		  timingFunction: 'linear',
		}} size="xs" color="green" defaultValue={[20, 80]}/>
	  </div>
	</div>
  )
}

export default SearchBarTalent