import React from 'react'

const Subscribe = () => {
  return (
	<div className="mt-[100px] h-[250px] w-full flex font-medium items-center justify-around bg-green-200">
       <div className="text-4xl"> 
          <h1>Never wants to miss any <span className="text-green-500">New Jobs !</span></h1>
	   </div>
	   <div className="flex flex-col gap-5">
		<div>
			 <input className="px-2 bg-white py-1 w-[350px] h-[45px] rounded-lg border-green-300 border-2 focus:outline-none"type="text" placeholder="Enter your email-id"></input>
		</div>
		<button className="bg-green-500 px-4 py-2 text-xl font-semibold rounded-lg hover:cursor-pointer">Subscribe
		</button>
	   </div>
	</div>
  )
}

export default Subscribe