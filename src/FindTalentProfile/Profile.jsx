import React from 'react'
import Banner from '../Gallery/profile-banner.jpg'
import { GoBriefcase } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import Avatar from '../Gallery/avatar.png'
import { Divider } from '@mantine/core';
import ExpCard from './ExpCard';
import CertiCard from './CertiCard';
import RecommendTalent from './RecommendTalent';
const Profile = (props) => {
	return (
		<div>
			<div className="flex mx-[20px] gap-8">
				{/* LEFT SIDE - 60% */}
				<div className="w-[65%] flex flex-col gap-5">
					<div className="rounded-lg relative">
						<img className="w-full rounded-t-3xl h-[250px] object-cover" src={Banner} />
						<img
							className="h-[150px] w-[150px] rounded-full absolute left-5 -bottom-8 border-green-700 border-5"
							src={Avatar}
						/>
					</div>
					<div className="flex justify-between mt-[40px] mx-[20px]">
						<div className="flex flex-col gap-1.5">
							<h1 className="font-semibold text-3xl">{props.name}</h1>
							<div className="text-md flex items-center gap-1">
								<GoBriefcase />
								<p>{props.role}</p>
							</div>
							<div className="text-md flex items-center gap-1">
								<FaLocationDot />
								<h1 className="text-md">{props.location}</h1>
							</div>
						</div>
						<div>
							<button className="px-7 py-2 mb-[10px] hover:bg-green-500 bg-black hover:text-black text-white rounded-xl cursor-pointer">
								Message
							</button>
						</div>
					</div>
					<Divider className="my-6" size="xs" color="black" />
					<div className="flex gap-4 flex-col">
						<div>
							<h1 className="font-semibold text-2xl">About</h1>
						</div>
						<div className="">
							<h1 className="text-md text-justify">{props.about}</h1>
						</div>
					</div>
					<Divider className="my-6" size="xs" color="black" />
					<div className="flex flex-col gap-5">
						<div>
							<h1 className="font-semibold text-2xl">Skills</h1>
						</div>
						<div className="flex gap-2">
							{(props.topSkills || []).map((item, index) => (
							<div key={index} className="px-3 py-2 flex gap-3 bg-green-500 rounded-2xl">
								<h1 className="text-md">{item}</h1>
							</div>
						))}
						</div>
					</div>
					<Divider className="my-6" size="xs" color="black" />
					<div className="flex flex-col gap-3">
						<div>
							<h1 className="font-semibold text-2xl">Experience</h1>
						</div>
						{(props.experience || []).map((item, index) => (
							<div key={index}>
								<ExpCard {...item} />
							</div>
						))}
						<div>
						</div>
					</div>
					<Divider className="my-6" size="xs" color="black" />
					<div className="flex flex-col gap-3">
						<div>
							<h1 className="font-semibold text-2xl">Certificates</h1>
						</div>
						{(props.certifications || []).map((item, index) => (
							<div key={index}>
								<CertiCard {...item} />
							</div>
						))}
						<div>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE - 40% */}
				<div className="w-[35%] flex flex-col gap-4">
					{/* Content for right section */}
					<div>
						<h1 className="text-xl font-semibold">Recommended Jobs</h1>
					</div>
					<div>
                        <RecommendTalent/>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Profile