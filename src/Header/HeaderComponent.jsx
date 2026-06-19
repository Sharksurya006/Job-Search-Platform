import React from 'react'
import { IoLogoCodepen } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import { Avatar, Indicator } from '@mantine/core';
import { IoIosNotificationsOutline } from "react-icons/io";
import {Link,useLocation} from "react-router-dom";
import ProfileMenu from './ProfileMenu';
const HeaderComponent = () => {
    const nottake =['/sign-up','/login']
	const Path = [
		{name : "FindJobs", link : "/find-jobs"},
		{name : "PostJobs", link : "/post-jobs"},
		{name : "FindTalent", link : "/find-talents"},
		{name : "PostedJobs", link : "/posted-job"},
		{name : "JobHistory", link : "/job-history"},
	]
	const location = useLocation();
  return (
	!nottake.includes(location.pathname) && <div className="flex justify-between px-3 items-center w-full bg-black text-white h-24">
        <div className="flex gap-2 items-center">
           <IoLogoCodepen className="h-10 w-10"/>
		   <h2 className="font-semibold text-2xl">SeekJobs</h2>
		</div>
		<div className="flex gap-5 text-lg">
           {
			Path.map((ele,index)=><div className={`${location.pathname== ele.link ? "border-green-500 text-green-500" : "border-transparent"} border-b-[3px] h-full flex items-center`} >
				<Link key={index} to={ele.link}>{ele.name}</Link>
				</div>)
		   }
		</div>
		<div className="flex gap-3 items-center">
			<div className="flex gap-2 items-center">
				<h2>Surya S</h2>
				<ProfileMenu/>
			<IoSettingsOutline  className="cursor-pointer"/>
			<Indicator color="blue" size={9} offset={6} processing>
				<div>
					<IoIosNotificationsOutline className="h-6 w-6 cursor-pointer" />
				</div>
			</Indicator>
		</div>
	</div>
	</div>
  )
}

export default HeaderComponent;