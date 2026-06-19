import React, { useState } from 'react'
import CertiInput from './CertiInput';
const CertiCard = (props) => {
	const [edit,setEdit] = useState(false);
	const [issuedDate, setIssuedDate] = useState(props.issueDate)
		const[lisence,setLisence] = useState(props.certificateId);
	return (
		!edit ? <div className="flex flex-col gap-6">
			<div className="flex justify-between px-[5px] items-center mt-[10px]">
				<div className="flex items-center gap-3">
					<img className="h-[50px] w-[50px]" src={props.issuerIcon} />
					<div className="flex flex-col gap-1 text-sm">
						<div>
							<h1 className="">{props.name}</h1>
						</div>
						<div className="flex gap-1">
							<div><h1>{props.issuer}</h1></div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-1.5 mr-[20px]">
					<p>Issued Date : {issuedDate}</p>
					<p>Certificate ID : {lisence}</p>
				</div>
				
			</div>
			{props.editparent && <div className="flex gap-5">
                <button onClick={()=>setEdit(true)}className="px-4 py-2 text-green-500 border-2 border-green-500 rounded-md cursor-pointer">Edit</button>
				<button className="px-4 py-2 text-red-500 border-2 border-red-500 rounded-md cursor-pointer">Delete</button>
			</div>}
		</div> : <CertiInput setEdit={setEdit} date={setIssuedDate} id={setLisence}/>
	)
}

export default CertiCard