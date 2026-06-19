import { Divider } from '@mantine/core';
import React from 'react'
import { useState } from 'react';
import { GoHeart } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
const JobCard = (job) => {
	const [color,SetColor] = useState('white')

    const choose = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500'];


	const ColorHandler = ()=>{
		SetColor(color === 'white' ? 'red' : 'white')
	}

	return (
		<Link to="/jobs"><div className="w-[1/3] border-1 border-gray-400 p-6 flex flex-col gap-5 rounded-lg hover:shadow-[0_0_5px_1px_green]">
			<div>
				<div className="flex justify-between px-[5px] items-center">
					<div className="flex items-center gap-3">
						<img className="h-[30px] w-[30px]" src={job.icon} />
						<div className="flex flex-col gap-1 text-sm">
							<div>
								<h1 className="">{job.title}</h1>
							</div>
							<div className="flex gap-2">
								<div><h1>{job.company}</h1></div>
								<div><h1>#{job.applicants} applicants</h1></div>
							</div>
						</div>
					</div>
					 <div>
						<GoHeart onClick={()=>ColorHandler()} className={`cursor-pointer h-[20px] w-[20px]  ${color === 'red' ? 'text-red-600' : 'text-gray-500'}`}/>
                       </div>
				</div>
			</div>
			<div className="flex justify-around items-center">
				{
					job.tags.map((data,unique) => (
						<div key={unique} className={`border-1 rounded-xl text-sm ${choose[unique % choose.length]} px-2 py-1`}>
                          <h1 className="text-[10px]">{data}</h1>
                       </div>

					))
				}
			</div>
			<div className="text-sm flex items-center">
                 <h1>{job.description}</h1>
			</div>
            <Divider className="my-6" size="xs" color="black"/>
			<div className="flex items-center justify-around">
				<div><p>{job.rate}</p></div>
				<div className="flex gap-2 items-center">
					<p><IoMdTime /></p>
					<div><p>{job.posted}</p></div>
				</div>
			</div>
		</div>
		</Link> 
	)
}

export default JobCard