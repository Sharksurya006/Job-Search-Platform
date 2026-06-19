import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ApplyJobs from '../ApplyJobComp/ApplyJobs';
const ApplyJob = () => {
  return (
	<div>
		<div>
		<Link to="/jobs">
		 <div className="flex gap-4 bg-green-500 font-semibold items-center w-[100px] p-2 mt-[15px] ml-[15px] rounded-lg cursor-pointer">
				   <div>
					<FaArrowLeftLong />
				   </div>
				   <p>Back</p>
				</div>
		</Link>
	</div>
	<ApplyJobs/>
	</div>
	
  )
}

export default ApplyJob;