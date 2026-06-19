import { Divider } from '@mantine/core';
import React from 'react'
import { useState } from 'react';
import { GoHeart } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import RecommendJobs from './RecommendedJobs';
import { IoBriefcase } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuBookType } from "react-icons/lu";
const JobCardDescription = (job) => {
	const [color,SetColor] = useState('white')

    const choose = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500'];


	const ColorHandler = ()=>{
		SetColor(color === 'white' ? 'red' : 'white')
	}

	return (
		<div className="flex gap-4">
			<div className="w-[65%] border-1 mx-[10px] border-gray-400 p-6 flex flex-col gap-16 rounded-lg hover:shadow-[0_0_5px_1px_green]">
				<div className="flex justify-between px-[5px] items-center">
					<div className="flex items-center gap-6 pt-[20px]">
						<img className="h-[60px] w-[60px]" src={job.icon} />
						<div className="flex flex-col gap-1 text-2xl">
							<div>
								<h1 className="">{job.title}</h1>
							</div>
							<div className="flex gap-4 text-[18px] items-center">
								<div><h1>{job.company}</h1></div>
								<div className="flex items-center gap-2">
									<div><h1>{job.applicants} applicants</h1></div>
								<p><IoMdTime /></p>
								<div><p>{job.posted}</p></div>
								</div>
							</div>
						</div>
					</div>
					 <div className="flex flex-col gap-2 items-center">
						<div>
							<Link to="/apply-jobs">
							<button className="px-3 py-2 bg-green-500 rounded-lg cursor-pointer">Apply</button>
							</Link>
							</div>
						<GoHeart onClick={()=>ColorHandler()} className={`cursor-pointer h-[30px] w-[30px]  ${color === 'red' ? 'text-red-600' : 'text-gray-500'}`}/>
                       </div>
				</div>
				<Divider className="my-3" size="xs" color="black"/>
			<div className="flex justify-around items-center">
				<div className="flex flex-col gap-0.5 items-center">
					<FaLocationDot className="h-[25px] w-[25px] mb-[5px]"/>
					<p>Location</p>
					<p>{job.location}</p>
				</div>
				<div className="flex flex-col gap-0.5 items-center">
					<IoBriefcase className="h-[25px] w-[25px] mb-[5px]" />
					<p>Experience</p>
					<p>{job.tags[0]}</p>
				</div>
				<div className="flex flex-col gap-0.5 items-center">
					<FaIndianRupeeSign className="h-[25px] w-[25px] mb-[5px]"/>
					<p>Salary</p>
					<p>{job.salary}</p>
				</div>
				<div className="flex flex-col gap-0.5 items-center">
					<LuBookType className="h-[25px] w-[25px] mb-[5px]"/>
					<p>JobType</p>
					<p>Full Time</p>
				</div>
			</div>
			 <Divider className="my-1" size="xs" color="black"/>
			 <div className="flex  flex-col gap-3 ">
				<div>
					<h1 className="text-2xl font-semibold mb-[20px]">Skills Required
					</h1>
				 </div>
				<div className="flex gap-2 flex-wrap items-center">
					{
						job.briefSkills.map((item,index)=><div key={index}>
							<div className="px-3 py-2 bg-green-500 rounded-xl">{item}</div>
						</div>)
					}
					
				</div>
				</div>
				<Divider className="my-1" size="xs" color="black"/>
			<div className="flex flex-col gap-3">
				 <div>
					<h1 className="text-2xl font-semibold mb-[20px]">About the Job</h1>
				 </div>
                 <h1 className="text-md">{job.briefDescription}</h1>
				 <div>
					<h1 className="text-2xl font-semibold mb-[20px]">Responsibilites</h1>
				 </div>
                 <h1 className="text-md">{job.responsibilities}</h1>
                  <div>
					<h1 className="text-2xl font-semibold mb-[20px]">Qualification and Skill Sets</h1>
				 </div>
                 <h1 className="text-md">{job.qualificationAndSkillsets}</h1>
			</div>
             <Divider className="my-3" size="xs" color="black"/>
             <div className="flex justify-between mx-[20px]">
                 <div className="flex gap-3 items-center">
                      <img src={job.icon} className="h-[40px] w-[40px]"/>
                      <p className="text-xl">{job.company}</p>
				 </div>
				 <div>
					<Link to="/company"><button className="px-3 py-2 bg-green-500 rounded-xl cursor-pointer">company</button></Link>
				 </div>
			 </div>
			 <div className="flex flex-col gap-3">
                 <h1 className="text-xl font-semibold">About the company</h1>
				 <p className="text-md">Google is a well established multinational company focusing
					on the software development and the other IT sector related works.
				 </p>
			 </div>
			
		</div>
		<div className="w-[35%] flex flex-col gap-4">
					{/* Content for right section */}
					<div className="my-3">
						<h1 className="text-xl font-semibold">Recommended Jobs</h1>
					</div>
					<div className="mx-[10px]">
                        <RecommendJobs/>
					</div>
				</div>
		</div>
	)
}

export default JobCardDescription