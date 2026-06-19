import { IconSearch, IconMapPin, IconTools } from '@tabler/icons-react';

const searchFields = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      'Frontend Engineer', 'Backend Developer', 'UX Researcher',
      'Project Manager', 'System Administrator', 'AI Specialist',
      'Graphic Designer', 'QA Tester', 'Cloud Architect', 'Cybersecurity Analyst'
    ]
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      'Mumbai', 'Los Angeles', 'Paris', 'Dubai', 'Singapore',
      'Bangkok', 'Amsterdam', 'Zurich', 'Rome', 'Chicago'
    ]
  },
  {
    title: "Skills",
    icon: IconTools,
    options: [
      'TypeScript', 'SASS', 'Vue.js', 'Kubernetes', 'Docker',
      'GraphQL', 'Firebase', 'Linux', 'TensorFlow', 'Pandas',
      'Numpy', 'Flask', 'Kotlin', 'Swift', 'Figma'
    ]
  }
];

export default searchFields;
