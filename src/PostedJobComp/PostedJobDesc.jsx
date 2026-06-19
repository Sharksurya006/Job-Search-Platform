import { Badge, Divider, Tabs } from '@mantine/core'
import React from 'react'
import Overview from './Overview'
import jobcarddata from '../JobCardData.js'
import TalentCard from '../FindTalentComp/TalentCard.jsx'
import TalentData from '../Talentsdata.js'
const PostedJobDesc = () => {
	const posted = true;
	const invited = true;
	return (
		<div className="w-3/4 mt-5">
			<div className="flex gap-2 flex-col">
				<div className="flex items-center gap-2">
					<div className="text-2xl font-semibold">Software Engineer</div>
					<Badge color="green" size="xs">Badge</Badge>
				</div>
				<div>
					<h1 className="text-sm font-medium">Whitefield, Bengaluru</h1>
				</div>
				<Divider size="xs" color="black" />
				<div className="mt-[10px]">
					<Tabs variant="outline" radius="lg" defaultValue="overview">
						<Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:!bg-green-500">
							<Tabs.Tab value="overview">Overview</Tabs.Tab>
							<Tabs.Tab value="applicants">Applicants</Tabs.Tab>
							<Tabs.Tab value="invited">Invited</Tabs.Tab>
						</Tabs.List>

						<Tabs.Panel value="overview" className="mt-[10px]"><Overview {...jobcarddata[1]} /></Tabs.Panel>
						<Tabs.Panel value="applicants" className="mt-[10px]">
							<div className="grid grid-cols-3 gap-2.5 px-[20px] py-[20px]">
								{
									TalentData.map((item, index) => <div key={index}>
										<TalentCard {...item} posted />
									</div>)
		                          }
							</div>
						</Tabs.Panel>
						<Tabs.Panel value="invited" className="mt-[10px]">
                             <div className="grid grid-cols-3 gap-2.5 px-[20px] py-[20px]">
								{
									TalentData.map((item, index) => <div key={index}>
										<TalentCard {...item} invited />
									</div>)
		                          }
							</div>
						</Tabs.Panel>
					</Tabs>
				</div>
				<div>

				</div>
			</div>
		</div>
	)
}

export default PostedJobDesc