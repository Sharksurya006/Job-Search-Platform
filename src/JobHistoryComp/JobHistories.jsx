import { Tabs } from '@mantine/core'
import React from 'react'
import Card from './Card'
import jobCardData from '../JobCardData'


const JobHistories = () => {
	const applied = true
	const saved = true
	const offered = true
	const interviewing = true
	return (
		<div>
			<div className="text-2xl ml-5 my-2 font-semibold">
				Jobs
			</div>
			<div className="mt-[30px]">
				<Tabs variant="outline" radius="lg" defaultValue="about">
					<Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:!bg-green-500">
						<Tabs.Tab value="applied">Applied</Tabs.Tab>
						<Tabs.Tab value="saved">Saved</Tabs.Tab>
						<Tabs.Tab value="offered">Offered</Tabs.Tab>
						<Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="applied" className="mt-[10px]">
						<div className="grid grid-cols-3 gap-4 p-4">
							{
								jobCardData.map((item, index) => <div key={index}>
									<Card {...item}  applied />
								</div>)
							}
						</div>

					</Tabs.Panel>
					<Tabs.Panel value="saved" className="mt-[10px]">
						<div className="grid grid-cols-3 gap-4 p-4">
							{
								jobCardData.map((item, index) => <div key={index}>
									<Card {...item} saved />
								</div>)
							}
						</div>
					</Tabs.Panel>
					<Tabs.Panel value="offered" className="mt-[10px]">
						<div className="grid grid-cols-3 gap-4 p-4">
							{
								jobCardData.map((item, index) => <div key={index}>
									<Card {...item} offered />
								</div>)
							}
						</div>
					</Tabs.Panel>
					<Tabs.Panel value="interviewing" className="mt-[10px]">
						<div className="grid grid-cols-3 gap-4 p-4">
							{
								jobCardData.map((item, index) => <div key={index}>
									<Card {...item} interviewing />
								</div>)
							}
						</div>
					</Tabs.Panel>
				</Tabs>
			</div>

		</div>
	)
}

export default JobHistories