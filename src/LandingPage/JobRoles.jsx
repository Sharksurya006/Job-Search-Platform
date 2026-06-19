import React from 'react';
import data from '../data.js';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { TfiAnnouncement } from "react-icons/tfi";

const JobRoles = () => {
  return (
    <div className="flex flex-col mt-[100px] gap-5">
      <div className="text-4xl text-center">
        <h2>Explore the jobs and apply to your <span className="text-green-500">dream Job</span></h2>
      </div>
	  <div className="mt-[100px]">
		<Carousel
        slideSize="22%"
        height={300}
        slideGap="md"
        controlsOffset="sm"
        controlSize={26}
        withControls
        withIndicators={false}
      >
        {data.map((ele, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col justify-center items-center text-center gap-2 w-[250px] h-[250px] border-green-600 rounded-lg hover:cursor-pointer hover:bg-green-200 border-2 font-semibold">
              <h2>Role : {ele.role}</h2>
              <TfiAnnouncement className="text-green-400  hover:text-black h-[30px] w-[30px]" />
              <h2>Comapany : {ele.Company}</h2>
              <h2>Location : {ele.Location}</h2>
              <h2>Package : {ele.package}</h2>
			  <h2>posted : {ele.days}</h2>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
	  </div>
      
    </div>
  );
};

export default JobRoles;
