import React from 'react'
import Amazon from '../Gallery/amazon-logo.jpg'
const ExpCard = (props) => {
	return (
		<div>
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
		</div>
	)
}

export default ExpCard