import React from 'react'

const AboutCompany = (props) => {
  return (
	<div className="flex flex-col gap-6">
        <div>
            <h1 ClassName="text-xl font-semibold">{props.Name}</h1>
		</div>
		<div className="flex flex-col gap-2">
             <h1 ClassName="text-xl font-semibold">Overview</h1>
			 <p>{props.Overview}</p>
		</div>
		<div className="flex gap-3">
			<h1 ClassName="text-xl font-semibold">Industry :</h1>
			 <p>{props.Industry}</p>
		</div>
		<div className="flex gap-3"> 
			<h1 ClassName="text-xl font-semibold">Size :</h1>
			 <p>{props.Size}</p>
		</div>
		<div className="flex gap-3">
			<h1 ClassName="text-xl font-semibold">HeadQuarters :</h1>
			 <p>{props.Headquarters}</p>
		</div>
		<div className="flex gap-3">
			<h1 ClassName="text-xl font-semibold">Website :</h1>
			 <p>{props.Website}</p>
		</div>
		<div ClassName="flex flex-col gap-4">
			<h1>Specialities</h1>
			<ul className="flex flex-col">
            {
				props.Specialties.map((data,index)=><li key={index}>
                      {data}
				</li>)
			}
		</ul>
		</div>
	</div>
  )
}

export default AboutCompany