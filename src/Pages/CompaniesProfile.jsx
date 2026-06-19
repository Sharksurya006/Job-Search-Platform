import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import CompanyProfile from '../CompanyProfileComp/CompanyProfile';
const CompaniesProfile = () => {
	const navigate = useNavigate();
	const handler = () =>{
		navigate(-1);
	}
  return (
	<div className="flex flex-col gap-7">
		<div onClick={handler} className="flex gap-4 bg-green-500 font-semibold items-center w-[100px] p-2 mt-[15px] ml-[15px] rounded-lg cursor-pointer">
						   <div>
							<FaArrowLeftLong />
						   </div>
						   <p>Back</p>
						</div>
						<div>
							<CompanyProfile/>
						</div>
	</div>
  )
}

export default CompaniesProfile