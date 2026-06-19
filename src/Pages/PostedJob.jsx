import React from 'react'
import PostedJobs from '../PostedJobComp/PostedJobs'
import PostedJobDesc from '../PostedJobComp/PostedJobDesc'

const PostedJob = () => {
  return (
	<div>
		<div className="flex gap-4">
			<PostedJobs/>
		 <PostedJobDesc/>
		</div>
	</div>
  )
}

export default PostedJob