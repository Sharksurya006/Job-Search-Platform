import React, { useEffect, useState } from 'react'
import { fields } from '../PostJobData'
import SelectInput from './SelectInput'
import { Checkbox, Textarea } from '@mantine/core'
import { MonthPickerInput } from '@mantine/dates'


const ExpInput = (props) => {
	const select = fields
	const [checked, setChecked] = useState(false);
	const [desc, setDesc] = useState('Tell something about yourself')
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())

	const handlecheck = () => {
		setChecked(!checked)
	}
	useEffect(() => {
		if (checked) {
			setEndDate("Present");
		}
	}, [checked]);

	return (
		<div>
			<div className="text-lg font-semibold mb-4">{props.add ? "Add" : "Edit"} Experience</div>
			<div className="flex flex-col gap-5">
				<div className="[&>*]:w-1/2 flex gap-5 mt-[20px]">
					{select[0] && <SelectInput {...select[0]} />}
					{select[4] && <SelectInput {...select[4]} />}
				</div>
				<div className="[&>*]:w-1/2 flex gap-5 mt-[20px]">
					<MonthPickerInput
						withAsterisk
						maxDate={endDate || undefined}
						label="Start Date"
						placeholder="Pick start date"
						value={startDate}
						onChange={setStartDate}
					/>

					<MonthPickerInput
						disabled={checked}
						withAsterisk
						minDate={startDate || undefined}
						maxDate={new Date()}
						label="End Date"
						placeholder="Pick end date"
						value={endDate}
						onChange={setEndDate}
					/>
				</div>
				<div>
					<Checkbox
						color="green"
						label="I am currently working"
						checked={checked}
						onChange={handlecheck}
					/>
				</div>
				<div>
					<Textarea
						label="Description"
						autosize
						minRows={3}
						maxRows={5}
						value={desc}
						onChange={(event) => setDesc(event.currentTarget.value)}
					/>
				</div>
				<div className="flex gap-5">
                <button onClick={()=>props.setEdit(false)} className="px-4 py-2 text-green-500 border-2 border-green-500 rounded-md cursor-pointer">Save</button>
				<button onClick={()=>props.setEdit(false)} className="px-4 py-2 text-red-500 border-2 border-red-500 rounded-md cursor-pointer">Cancel</button>
			</div>
			</div>
		</div>
	)
}

export default ExpInput
