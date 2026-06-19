import React from 'react'

const PostedJobCard = (props) => {
  return (
	<div className="p-4 border-green-500 border-2 hover:bg-green-200 rounded-xl">
		<div className="text-md font-semibold text-black">{props.jobTitle}</div>
		<div className="text-sm text-black">{props.location}</div>
		<div className="text-sm text-black">{props.posted}</div>
	</div>
  )
}

export default PostedJobCard