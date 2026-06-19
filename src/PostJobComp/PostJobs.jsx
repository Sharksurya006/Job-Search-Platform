import React from 'react'
import { fields } from '../PostJobData'
import SelectInput from './SelectInput'
import { TagsInput } from '@mantine/core';
import TextEditor from './TextEditor';
const PostJobs = () => {
	const select = fields;
  return (
	<div className="mx-auto w-4/5">
		<div className="font-semibold text-2xl my-5">
            Post Jobs Here
		</div>
		<div className="flex flex-col gap-5">
				<div className="[&>*]:w-1/2 flex gap-5">
				<SelectInput {...select[0]} />
				<SelectInput {...select[1]} />
				</div>
				<div className="[&>*]:w-1/2 flex gap-5">
				<SelectInput {...select[2]} />
				<SelectInput {...select[3]} />
				</div>
				<div className="[&>*]:w-1/2 flex gap-5">
				<SelectInput {...select[4]} />
				<SelectInput {...select[5]} />
				</div>
				<TagsInput label="skills" placeholder="Enter the required skills"  clearable  acceptValueOnBlur  splitChars={[',', '|']}/>
				<div className="flex flex-col gap-3">
					<div>
						<h1 className="text-2xl font-semibold">Job Description</h1>
					</div>
					<div>
						<TextEditor/>
					</div>
				</div>
		</div>
	</div>
  )
}

export default PostJobs