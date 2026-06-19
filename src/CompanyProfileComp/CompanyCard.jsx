import React from 'react'
import { GoCrossReference } from "react-icons/go";
const CompanyCard = (props) => {
  return (
	<div className="flex jusitfy-between mx-[5px] gap-12 border-green-500 border-2 w-[300px] mb-[20px] px-5 py-2 hover:bg-green-200">
		<div className="flex gap-4 items-center">
           <img className="w-[30px] h-[30px]"src={props.CompanyIcon}/>
			<div className="flex flex-col gap-1">
			<div className="font-semibold">
				{props.Name}
			</div>
			<div>
				{props.Size}
			</div>
		   </div>
		</div>
		<div className="flex items-center">
            <GoCrossReference className="h-[25px] w-[25px] cursor-pointer"/>
		</div>
	</div>
  )
}

export default CompanyCard