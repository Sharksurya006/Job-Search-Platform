import React from 'react'
import avatar from '../Gallery/avatar.png'
import{Avatar,Rating} from "@mantine/core"
import reviews from '../reviews.js'
import Marquee from "react-fast-marquee";
const Reviews = () => {
  return (
	<>
	<div className="flex flex-col mt-[100px] gap-6">
	  <div className="text-4xl text-center font-semibold">
          <h1><span className="text-green-500">What user Say's</span> about Us?</h1>
	  </div>
	  <div className="mt-[50px] flex">
		   <Marquee>
  {
    reviews.map((ele, index) => (
      <div key={index} className="flex flex-row lg:flex-col md:flex-col gap-2 p-4 items-center h-[250px] w-[600px] rounded-lg border-2 border-green-400 mx-[20px]">
        <div>
          <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex flex-col h-[300px] w-[600px] items-center p-2">
          <h1 className="font-semibold">{ele.name}</h1>
		  <h1 className="text-center">{ele.desc}</h1>
          <Rating value={ele.rating} readOnly />
        </div>
      </div>
    ))
  }
</Marquee>
	  </div>

	</div>
	</>
	
  )
}

export default Reviews