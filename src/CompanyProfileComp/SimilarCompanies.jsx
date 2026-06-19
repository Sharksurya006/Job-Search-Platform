import React from 'react'
import companydata from '../CompanyData.js'
import CompanyCard from './CompanyCard'
const SimilarCompanies = () => {
  return (
	<div>
		{
       companydata.map((data,index)=>
		<div className="w-[35%] flex flex-col gap-3">
            <CompanyCard {...data}/>
		</div>
	   )
	}
	</div>
  )
}

export default SimilarCompanies