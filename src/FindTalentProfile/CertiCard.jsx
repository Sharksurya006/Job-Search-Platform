import React from 'react'
const CertiCard = (props) => {
	return (
		<div>
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
					<p>Issued Date : {props.issueDate}</p>
					<p>Certificate ID : {props.certificateId}</p>
				</div>
			</div>
		</div>
	)
}

export default CertiCard