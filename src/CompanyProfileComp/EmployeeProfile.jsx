import React from 'react'
import talentdata from '../Talentsdata.js'
import TalentCard from '../FindTalentComp/TalentCard'
const EmployeeProfile = () => {
	return (
		<div className="grid grid-col-2 gap-4 mt-[20px]">
			{
				talentdata.map((data, index) => {
					<div key={index}>
						<TalentCard {...data} />
					</div>
				})
			}
		</div>
	)
}

export default EmployeeProfile