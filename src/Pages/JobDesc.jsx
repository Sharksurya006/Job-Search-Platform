import { Divider } from '@mantine/core'
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Profile from '../FindTalentProfile/Profile';
import talentdata from '../Talentsdata.js'
import JobDescription from '../JobDescriptionComp/JobsDescription.jsx';
import jobcarddata from '../JobCardData.js'
const JobDesc = () => {
  return (
	<div>
		<div className="flex gap-4 bg-green-500 font-semibold items-center w-[100px] p-2 mt-[15px] ml-[15px] rounded-lg cursor-pointer">
		   <div>
			<FaArrowLeftLong />
		   </div>
		   <p>Back</p>
		</div>
		<Divider className="my-6" size="xs" color="black"/>
		<div>
			<JobDescription  {...jobcarddata[1]}/>
		</div>
	</div>
  )
}

export default JobDesc