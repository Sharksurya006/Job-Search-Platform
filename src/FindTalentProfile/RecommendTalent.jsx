import React from 'react'
import talentdata from  '../Talentsdata.js'
import TalentCard from '../FindTalentComp/TalentCard'

const RecommendTalent = () => {
	const flag = true;
  return (
	<div className="flex flex-col gap-4">
		{
			talentdata.map((item,index)=>index < 4 && <TalentCard {...item} />)
		}
	</div>
  )
}

export default RecommendTalent