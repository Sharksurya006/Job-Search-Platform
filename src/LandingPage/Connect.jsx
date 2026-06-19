import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const Connect = () => {
	let location = useLocation()
	const nottake =['/sign-up','/login']
  return (
	
	!nottake.includes(location.pathname) && <div className="flex justify-evenly">
		<div className="flex flex-col gap-6 items-center mt-[100px]">
		<div className="text-4xl text-center">
           <h1><span className="text-green-500 mr-2">Connect Us</span>through</h1>
		</div>
		<div className="flex gap-6 items-center">
			<div className="bg-green-300 w-[55px] h-[55px] flex items-center rounded-full justify-center hover:cursor-pointer"><FaFacebookF /></div>
			<div className="bg-green-300 w-[55px] h-[55px] flex items-center rounded-full justify-center hover:cursor-pointer"><FaInstagram /></div>
			<div className="bg-green-300 w-[55px] h-[55px] flex items-center rounded-full justify-center hover:cursor-pointer"><FaTwitter /></div>
		</div>
	</div>
	</div>
	
  )
}

export default Connect