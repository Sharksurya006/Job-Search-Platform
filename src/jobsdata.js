import {
  IconBriefcase,
  IconMapPin,
  IconRecharging,
  IconSearch,
} from "@tabler/icons-react";

const dropdownData = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      'UI/UX Designer',
      'Software Engineer',
      'QA Tester',
      'Business Analyst',
      'Tech Lead',
      'Scrum Master',
      'Data Scientist',
      'System Administrator'
    ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      'Amsterdam',
      'Dublin',
      'Austin',
      'Chicago',
      'Seoul',
      'Bangkok',
      'Barcelona',
      'Dubai'
    ],
  },
  {
    title: "Experience",
    icon: IconBriefcase,
    options: [
      'Fresher',
      '1-3 Years',
      '3-5 Years',
      '5+ Years'
    ],
  },
  {
    title: "Job Type",
    icon: IconRecharging,
    options: [
      'Remote',
      'Hybrid',
      'On-site',
      'Temporary',
      'Volunteer'
    ],
  },
];

export default dropdownData;
