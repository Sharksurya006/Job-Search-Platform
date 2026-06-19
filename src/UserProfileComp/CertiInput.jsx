import React, { useEffect, useState } from 'react'
import { fields } from '../PostJobData'
import SelectInput from './SelectInput'
import { Checkbox, Textarea, TextInput } from '@mantine/core'
import { MonthPickerInput } from '@mantine/dates'


const CertiInput = (props) => {
	const [issuedDate, setIssuedDate] = useState(new Date())
	const [lisence, setLisence] = useState("Enter your Id");
	useEffect(() => {
		props.id(lisence)
		props.date(issuedDate)
	}, [issuedDate, lisence])
	return (
		<div>
			<div className="text-lg font-semibold mb-4">{props.add ? "Add" : "Edit"} Certificates</div>
			<div className="flex flex-col gap-5">
				<div className="[&>*]:w-1/2 flex gap-5 mt-[20px]">
					<TextInput
						label="Certifcate Name"
						placeholder="Enter the Certificate Name"
					/>
					<TextInput
						label="Provider Name"
						placeholder="Enter the Provider Name"
					/>
				</div>
				<div className="[&>*]:w-1/2 flex gap-5 mt-[20px] items-center">
					<MonthPickerInput
						withAsterisk
						maxDate={new Date()}
						label="Start Date"
						placeholder="Pick start date"
						value={issuedDate}
						onChange={setIssuedDate}
					/>
					<TextInput
					    className="mt-[24px]"
						value={lisence}
						onChange={(event) => setLisence(event.currentTarget.value)}
					/>
				</div>

				<div className="flex gap-5">
					<button onClick={() => props.setEdit(false)} className="px-4 py-2 text-green-500 border-2 border-green-500 rounded-md cursor-pointer">Save</button>
					<button onClick={() => props.setEdit(false)} className="px-4 py-2 text-red-500 border-2 border-red-500 rounded-md cursor-pointer">Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default CertiInput
