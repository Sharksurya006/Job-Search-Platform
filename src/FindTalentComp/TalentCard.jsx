import { Divider, Modal } from '@mantine/core';
import React, { useRef } from 'react'
import { useState } from 'react';
import { GoHeart } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Avatar from '../Gallery/avatar.png'
import { FaCalendarAlt } from "react-icons/fa";
import { DateInput, TimeInput } from '@mantine/dates';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
const TalentCard = (job) => {
	const [color, SetColor] = useState('white')
     const [opened, { open, close }] = useDisclosure(false);
	 const[value,setValue] = useState(null)
	const choose = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500'];
    const ref = useRef()

	const ColorHandler = () => {
		SetColor(color === 'white' ? 'red' : 'white')
	}

	return (
		<div className="w-[1/3] border-1 border-gray-400 p-6 flex flex-col gap-3 rounded-lg hover:shadow-[0_0_5px_1px_green] h-[400px]">
			<div>
				<div className="flex justify-between px-[5px] items-center">
					<div className="flex items-center gap-3">
						<img src={Avatar} className="h-[35px] w-[35px] rounded-full" />
						<div className="flex flex-col gap-1 text-sm">
							<div>
								<h1 className="">{job.name}</h1>
							</div>
							<div className="flex gap-1">
								<div><h1>{job.company}</h1></div>
								<div><h1>{job.role}</h1></div>
							</div>
						</div>
					</div>
					<div>
						<GoHeart onClick={() => ColorHandler()} className={`cursor-pointer h-[20px] w-[20px]  ${color === 'red' ? 'text-red-600' : 'text-gray-500'}`} />
					</div>
				</div>
			</div>
			<div className="flex justify-around items-center">
				{
					job.topSkills.map((data, unique) => (
						<div key={unique} className={`border-1 rounded-xl text-sm ${choose[unique % choose.length]} px-2 py-1`}>
							<h1 className="text-[10px]">{data}</h1>
						</div>

					))
				}
			</div>
			<div className="flex items-center text-sm">
				<p>{job.about}</p>
			</div>
			<Divider className="my-6" size="xs" color="black" />
			{
				 !job.invited ? <div className="flex justify-around text-sm">
				<p className="">{job.salary}</p>
				<div className="flex gap-1">
					<CiLocationOn className="h-[20px] w-[20px] text-sm" />
					<p className="">{job.location}</p>
				</div>
			   </div>  : <div className="flex gap-1 text-sm">
				    <div className="flex justify-around gap-2.5">
						 <FaCalendarAlt className="h-[20px] w-[20px] mb-0.5 flex items-center" />
					     <p className="">{job.location}</p>
						 <p>10:00 AM</p>
					</div>
					<p></p>
			</div>
			}
			<Divider className="my-6" size="xs" color="black" />
			<div className="flex gap-10 px-[10px]">
				{
					job.invited && <div>
					<Link to="/talent-profile">
						<button className="px-7 py-2 mb-[10px] hover:bg-green-500 bg-black hover:text-black text-white rounded-xl cursor-pointer">Accept</button>
					</Link>
				   </div>
				}
				{
					 job.flag && <div>
					<Link to="/talent-profile">
						<button className="px-7 py-2 mb-[10px] hover:bg-green-500 bg-black hover:text-black text-white rounded-xl cursor-pointer">Profile</button>
					</Link>
				   </div>
				}
				<div>
					{
						job.posted && <div  onClick={open} className="flex items-center gap-1.5 px-2 hover:bg-green-500 bg-black hover:text-black text-white rounded-xl cursor-pointer">
							<button className=" px-2 py-2">Schedule</button>
							<FaCalendarAlt className="h-[20px] w-[20px] mb-0.5 flex items-center" />
						</div> 
					}
					{
						job.flag && <button className="px-7 py-2 mb-[10px] hover:bg-green-500 bg-black hover:text-black text-white rounded-xl cursor-pointer">Message</button>
					}
                    {
                        job.invited && <button className="px-7 py-2 mb-[10px] hover:bg-green-500 bg-black hover:text-black text-white rounded-xl cursor-pointer">Reject</button>
					}
				</div>
				<Modal opened={opened} onClose={close} title="Schedule Interview" centered>
					<div className="flex flex-col gap-3">
						<DateInput value={value} onChange={setValue} label="Date" placeholder="Enter Date"/>
						 <TimeInput onClick={() => ref.current?.showPicker()} label="Click icon to show browser picker" ref={ref} />
							<button className="px-7 py-2 mb-[10px] bg-green-500 hover:bg-black hover:text-white rounded-xl cursor-pointer">Schedule Interview</button>
					</div>
				</Modal>
			</div>
		</div>

	)
}

export default TalentCard