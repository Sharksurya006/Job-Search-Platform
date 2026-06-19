import React, { useState } from 'react'
import Amazon from '../Gallery/amazon-logo.jpg'
import ExpInput from './ExpInput';
const ExpCard = (props) => {
	const [edit,setEdit] = useState(false);
	return (
		 !edit ? <div>
			<div className="flex justify-between px-[5px] items-center mt-[10px]">
				<div className="flex items-center gap-3">
					<img className="h-[50px] w-[50px]" src={props.companyIcon} />
					<div className="flex flex-col gap-1 text-sm">
						<div>
							<h1 className="">{props.title}</h1>
						</div>
						<div className="flex gap-1">
							<div><h1>{props.company}</h1></div>
							<div><h1>{props.location}</h1></div>
						</div>
					</div>
				</div>
				<div>
					<p>{props.startDate} - {props.endDate}</p>
				</div>
			</div>
			<div className="my-4">
					<p>{props.description}</p>
			</div>
			{

			props.editparent && <div className="flex gap-5">
                <button onClick={()=>setEdit(true)}className="px-4 py-2 text-green-500 border-2 border-green-500 rounded-md cursor-pointer">Edit</button>
				<button className="px-4 py-2 text-red-500 border-2 border-red-500 rounded-md cursor-pointer">Delete</button>
			</div>
           }
		</div> : <ExpInput setEdit={setEdit}/>
	)
}

export default ExpCard