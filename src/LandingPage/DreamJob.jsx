import React from 'react'
import search from "../Gallery/search.jpg";
import { CiSearch } from "react-icons/ci";
const DreamJob = () => {
  return (
	<div className="mt-[40px] flex justify-center px-4 items-center gap-[150px]">
		<div className="flex flex-col justify-center items-center gap-[50px] mt-[100px]">
			<div className="text-6xl font-bold">Find your <span className="text-green-600">dream Job</span> with us</div>
		    <div className="text-3xl font-semibold">Good life starts with good company</div>
		     <div className="text-3xl font-semibold">start explore thousands of jobs in one place</div>
			 <div className="flex gap-2 justify-center items-center">
			<div className="flex gap-2">
				<input type="text" className="w-[250px] h-[50px] border-green-500 border-2 px-2 py-1 rounded-lg focus:outline-none focus:ring-0" placeholder="Designation">
			</input>
			<input type="text" className="w-[250px] h-[50px] border-green-500 border-2 px-2 py-1 rounded-lg focus:outline-none focus:ring-0" placeholder="Location">
			</input>
			</div>
			<div className="bg-green-200 rounded-full p-2.5 hover:cursor-pointer">
              <CiSearch className="w-[30px] h-[30px] font-bold" />
			</div>
		</div>
		</div>
		<div className="flex justify-center items-center mt-[100px]">
           <img className="w-[400px] h-[400px] "src={search} alt="Search" />
		</div>
	</div>
  )
}

export default DreamJob