import React from 'react'
import search from '../Gallery/search.jpg'
import resume from '../Gallery/resume.png'
const Testimonials = () => {
  return (
	<div className="mt-[100px] flex flex-col gap-32">
		<div className="">
          <h2 className="text-center text-4xl ">Land on your Dream Job with the <span className="text-green-500">help of Us</span></h2>
		</div>
		<div className="flex items-center gap-5 mx-[250px]">
             <div className="w-[400px] h-[400px]">
                 <img src={search} alt/>
			 </div>
			 <div className="flex flex-col gap-[50px] ml-[150px]">
                 <div className="flex gap-4 items-center border-green-500 border-2 px-3 py-3 hover:cursor-pointer">
					<div className="w-[65px] h-[65px] bg-green-300 rounded-full">
						<img className="p-3"src={resume} alt='resume-image'/>
					</div>
					 <div className="flex flex-col gap-2 font-semibold">
						 <h3>Build your resume</h3>
					     <h3>Create a standout resume with your skills</h3>
					 </div>
				 </div>
				 <div className="flex gap-4 items-center border-green-500 border-2 px-3 py-3 hover:cursor-pointer">
					<div className="w-[65px] h-[65px] bg-green-300 rounded-full">
						<img className="p-3"src={resume} alt='resume-image'/>
					</div>
					 <div className="flex flex-col gap-2 font-semibold">
						 <h3>Apply for Jobs</h3>
					     <h3>Find and apply for jobs match your skills</h3>
					 </div>
				 </div>
				 <div className="flex gap-4 items-center border-green-500 border-2 px-3 py-3 hover:cursor-pointer">
					<div className="w-[65px] h-[65px] bg-green-300 rounded-full">
						<img className="p-3"src={resume} alt='resume-image'/>
					</div>
					 <div className="flex flex-col gap-2 font-semibold">
						 <h3>Get Hired</h3>
					     <h3>Connect with employers and start your first job</h3>
				 </div>
			 </div>
		</div>
	</div>
	</div>
  )
}

export default Testimonials