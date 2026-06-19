import React from 'react'
import Banner from '../Gallery/profile-banner.jpg'
import { GoBriefcase } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import amazon from '../Gallery/amazon-logo.jpg'
import avatar from '../Gallery/avatar.png'
import { Divider } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { Tabs } from '@mantine/core';
import AboutCompany from './AboutCompany';
import companydata from '../CompanyData.js'
import JobCards from '../FindJobsComp/JobCard.jsx'
import Jobcard from '../JobCardData.js'
import JobsProfile from './JobsProfile.jsx';
import EmployeeProfile from './EmployeeProfile.jsx';
import SimilarCompanies from './SimilarCompanies.jsx';
const CompanyProfile = (props) => {
	return (
		<div className="flex justify-between mx-[15px]">
				{/* LEFT SIDE - 60% */}
				<div className="w-[75%] mx-[30px] flex flex-col gap-5">
					<div className="rounded-lg relative">
						<img className="w-full rounded-t-3xl h-[250px] object-cover" src={Banner} />
						<img
							className="h-[150px] w-[150px] rounded-3xl absolute left-5 -bottom-8 border-black border-3"
							src={amazon}
						/>
					</div>
					<div className="flex justify-between mt-[40px] mx-[20px]">
						<div className="flex flex-col gap-1.5">
							<h1 className="text-3xl">Amazon</h1>
							<div className="text-md flex items-center gap-1">
								<FaLocationDot />
								<h1 className="text-md">HSR Layout,Bengaluru</h1>
							</div>
						</div>
						<div>
							<Avatar.Group>
								<Avatar src={avatar} />
								<Avatar src={avatar} />
								<Avatar src={avatar} />
								<Avatar>+10k</Avatar>
							</Avatar.Group>
						</div>
					</div>
					<Divider size="xs" color="black" />
					<div className="mt-[10px]">
						<Tabs variant="outline" radius="lg" defaultValue="about">
							<Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:!bg-green-500">
								<Tabs.Tab value="about">About</Tabs.Tab>
								<Tabs.Tab value="jobs">Jobs</Tabs.Tab>
								<Tabs.Tab value="employees">Employees</Tabs.Tab>
							</Tabs.List>

							<Tabs.Panel value="about" className="mt-[10px]"><AboutCompany {...companydata[0]}/></Tabs.Panel>
							<Tabs.Panel value="jobs" className="mt-[10px]"><JobsProfile/></Tabs.Panel>
							<Tabs.Panel value="employees" className="mt-[10px]"><EmployeeProfile/></Tabs.Panel>
						</Tabs>
					</div>
			</div>
			<div className="w-[25%] flex flex-col gap-3 mx-[20px]">
                <h1 className="font-bold text-xl">Similar Companies</h1>
				<SimilarCompanies/>
			</div>
		</div>
	)
}

export default CompanyProfile