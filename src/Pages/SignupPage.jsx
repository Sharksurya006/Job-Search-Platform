import React from 'react'
import Signup from '../Signup+Login/Signup'
import { IoLogoCodepen } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import Login from '../Signup+Login/Login'

const SignupPage = () => {
	let location = useLocation()
	console.log(location.pathname)
  return (
	<div className="overflow-hidden">
		<div className={`w-[100vw] h-full flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-700 ${location.pathname=='/sign-up' ? '-translate-x-1/2':'transition-x-0'}`}>
			    <Login/>
				<div className={`w-1/2 h-[100vh] transition-all ease-in-out duration-700 ${location.pathname=='/sign-up' ? 'rounded-r-[200px]' : 'rounded-l-[200px]'} bg-green-400 flex items-center flex-col justify-center gap-4`}>
					<div className="flex gap-4 items-center mr-[25px]">
						<IoLogoCodepen className="h-22 w-22" />
						<h2 className="font-semibold text-5xl">SeekJobs</h2>
					</div>
					<div className="ml-[10px] text-3xl font-semibold mr-[25px]">
						Find the made for you
					</div>
				</div>
				<div className="flex flex-col justify-center items-center w-1/2"> 
					<Signup/>
				</div>
			</div>
	</div>
  )
}

export default SignupPage