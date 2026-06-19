import React from 'react';
import JobCard from '../FindJobsComp/JobCard';
import jobdata from '../JobCardData';

const RecommendJobs = () => {
  return (
    <div className="flex flex-col gap-4">
      {jobdata.slice(0, 4).map((item, index) => (
        <JobCard key={index} {...item} />
      ))}
    </div>
  );
};

export default RecommendJobs;
