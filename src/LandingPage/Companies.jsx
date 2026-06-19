import React from 'react'
import netflix from '../Gallery/netflix-logo.jpg'
import amazon from '../Gallery/amazon-logo.jpg'
import Marquee from "react-fast-marquee";

const Companies = () => {
  const data = [netflix, amazon, netflix, amazon, netflix, amazon, netflix, amazon];

  return (
    <div className="my-[150px] flex flex-col justify-center items-center gap-[50px] w-full">
      <div className="text-4xl font-semibold text-center mb-6">
        Trusted by <span className="text-green-500">1000+</span> companies
      </div>
      <div className="flex gap-3  w-full h-[250px]">
        <Marquee>
          {data.map((ele, index) => (
            <div key={index} className="p-3 flex gap-[50px]">
              <img src={ele} alt={`logo-${index}`} className="h-30" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Companies
