import React from 'react'
import SearchBar from '../FindJobsComp/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from '../FindJobsComp/Jobs'
const FindJobs = () => {
  return (
	<div className="min-h-[100vh]">
		<SearchBar/>
		<Divider className="my-6" size="xs" color="black"/>
		<Jobs/>
	</div>
  )
}

export default FindJobs