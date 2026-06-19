import { Tabs } from '@mantine/core'
import activeJobs from '../PostedJobsdata.js';
import jobsData from '../PostedJobsdata.js';
import PostedJobCard from './PostedJobCard.jsx'
import React from 'react'

const PostedJobs = () => {
	const { activeJobs, drafts } = jobsData;
	return (
		<div className="w-1/6 mt-5 mx-3">
			<h1 className="font-semibold text-xl mb-5">Jobs</h1>
			<div className>
				<Tabs variant="pills" defaultValue="active">
					<Tabs.List className="[&_button[aria-selected ='false']]:font-medium [&_button[data-active='true']]:!bg-green-500 [&_button[data-active='true']]:!text-black">
						<Tabs.Tab value="active">Active [4]</Tabs.Tab>
						<Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="active">
						<div className="flex flex-col gap-2">
							{
                                activeJobs.map((data,index)=>{
									return(
										<div key={index} className="mt-5 ml-5">
                                       <PostedJobCard {...data}/>
									</div>
									)
								})
							}
						</div>
					</Tabs.Panel>
					<Tabs.Panel value="draft">Second panel</Tabs.Panel>
				</Tabs>
			</div>
		</div>
	)
}

export default PostedJobs