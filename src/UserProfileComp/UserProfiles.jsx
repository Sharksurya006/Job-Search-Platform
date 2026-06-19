import React, { useState } from 'react'
import Banner from '../Gallery/profile-banner.jpg'
import { GoBriefcase } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import Avatar from '../Gallery/avatar.png'
import { ActionIcon, Divider, TagsInput, Textarea } from '@mantine/core';
import ExpCard from './ExpCard';
import CertiCard from './CertiCard';
import { IconPencil } from '@tabler/icons-react';
import { IoSaveOutline } from "react-icons/io5";
import SelectInput from './SelectInput'
import { fields } from '../PostJobData'
import { IoAddOutline } from "react-icons/io5";
import ExpInput from './ExpInput';
import CertiInput from './CertiInput';

const UserProfiles = (props) => {
	const select = fields
	const [edit, setEdit] = useState([false, false, false, false, false])
	const [skills, setSkills] = useState(props.topSkills)
	const [addExp,setAddExp] = useState(false)
	const [addCerti,setAddCerti] = useState(false)
	const handleEdit = (index) => {
		const newedit = [...edit]
		newedit[index] = !newedit[index]
		setEdit(newedit)
		console.log(edit)
	}
	const [value, setValue] = useState(props.about);
	return (
		<div>
			<div className="flex mx-[20px] gap-8">
				{/* LEFT SIDE - 60% */}
				<div className="w-4/5 flex flex-col gap-5 mt-[20px] mx-auto">
					<div className="rounded-lg relative">
						<img className="w-full rounded-t-3xl h-[250px] object-cover" src={Banner} />
						<img
							className="h-[160px] w-[160px] rounded-full absolute left-5 -bottom-8 border-green-700 border-5"
							src={Avatar}
						/>
					</div>


					<div className="flex justify-between mt-[40px] mx-[20px]">
						{edit[0] ? <div>
							<div className="[&>*]:w-1/2 flex gap-5 mt-[20px]">
								<SelectInput {...select[0]} />
								<SelectInput {...select[1]} />
							</div>
							<SelectInput {...select[4]} />
						</div> :
							<div className="flex flex-col gap-1.5">
								<h1 className="font-semibold text-3xl">{props.name}</h1>
								<div className="text-md flex items-center gap-1">
									<GoBriefcase className="h-6 w-6" />
									<p>{props.role}</p>
								</div>
								<div className="text-md flex items-center gap-1">
									<FaLocationDot className="h-6 w-6" />
									<h1 className="text-md">{props.location}</h1>
								</div>
							</div>
						}
						<div>
							<ActionIcon onClick={() => handleEdit(0)} size='lg' variant="subtle" color="green" aria-label="Settings">
								{edit[0] ? <IoSaveOutline className="h-10 w-10" /> : <IconPencil className="h-10 w-10" stroke={1.5} />}
							</ActionIcon>
						</div>

					</div>

					<Divider className="my-6" size="xs" color="black" />
					<div className="flex gap-4 flex-col">
						<div className="flex justify-between mr-[20px]">
							<h1 className="font-semibold text-2xl">About</h1>
							<ActionIcon onClick={() => handleEdit(1)} size='lg' variant="subtle" color="green" aria-label="Settings">
								{edit[1] ? <IoSaveOutline className="h-10 w-10" /> : <IconPencil className="h-10 w-10" stroke={1.5} />}
							</ActionIcon>
						</div>
						{!edit[1] ? <div className="">
							<h1 className="text-md text-justify">{value}</h1>
						</div> :
							<Textarea
								autosize
								minRows={3}
								maxRows={5}
								value={value}
								onChange={(event) => setValue(event.currentTarget.value)}
							/>
						}
					</div>
					<Divider className="my-6" size="xs" color="black" />
					<div className="flex flex-col gap-5">
						<div className="flex justify-between mr-[20px]">
							<h1 className="font-semibold text-2xl">Skills</h1>
							<ActionIcon onClick={() => handleEdit(2)} size='lg' variant="subtle" color="green" aria-label="Settings">
								{edit[2] ? <IoSaveOutline className="h-10 w-10" /> : <IconPencil className="h-10 w-10" stroke={1.5} />}
							</ActionIcon>
						</div>
						{edit[2] ? <div>
							<TagsInput
						    value={skills} onChange={setSkills}
							placeholder="Enter the skill to add"
							splitChars={[',', '|']}
						/>
						</div> :

						<div className="flex gap-2">
							{(skills || []).map((item, index) => (
								<div key={index} className="px-3 py-2 flex gap-3 bg-green-500 rounded-2xl">
									<h1 className="text-md">{item}</h1>
								</div>
							))}
						</div>
                       }
					</div>
					<Divider className="my-6" size="xs" color="black" />
					<div className="flex flex-col gap-3">
						<div className="flex justify-between mr-[20px]">
							<h1 className="font-semibold text-2xl">Experience</h1>
							<div className="flex gap-4 items-center">
						       {!edit[3] && <IoAddOutline onClick={()=>setAddExp(true)}className="h-10 w-10 text-green-500 cursor-pointer"/>} 

								{!addExp && <ActionIcon onClick={() => handleEdit(3)} size='lg' variant="subtle" color="green" aria-label="Settings">
								{edit[3] ? <IoSaveOutline className="h-10 w-10" /> : <IconPencil className="h-10 w-10" stroke={1.5} />}
							  </ActionIcon>}
							</div>
						</div>
						{(props.experience || []).map((item, index) => (
							<div key={index}>
								<ExpCard {...item} editparent={edit[3]} />
							</div>
						))}
						{addExp && <ExpInput setEdit={setAddExp} add={true}/>}
						<div>
						</div>
					</div>
					<Divider className="my-6" size="xs" color="black" />
					<div className="flex flex-col gap-3">
						<div className="flex justify-between mr-[20px]">
							<h1 className="font-semibold text-2xl">Certificates</h1>
							<div className="flex gap-4 items-center">
						       {!edit[4] && <IoAddOutline onClick={()=>setAddCerti(true)}className="h-10 w-10 text-green-500 cursor-pointer"/>} 

								{!addCerti && <ActionIcon onClick={() => handleEdit(4)} size='lg' variant="subtle" color="green" aria-label="Settings">
								{edit[4] ? <IoSaveOutline className="h-10 w-10" /> : <IconPencil className="h-10 w-10" stroke={1.5} />}
							  </ActionIcon>}
							</div>
						</div>
						{(props.certifications || []).map((item, index) => (
							<div key={index}>
								<CertiCard {...item} editparent={edit[4]} />
							</div>
						))}
						{addCerti && <CertiInput setEdit={setAddCerti} add={true}/>}
						<div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default UserProfiles