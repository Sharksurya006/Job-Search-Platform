  const talents = [
  {
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "SpringBoot", "MongoDB"],
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications.",
    salary: "20LPA - 24LPA",
    location: "New York, United States",
    experience: [
      {
        title: "Software Engineer III",
        company: "Google",
        companyIcon: "https://logo.clearbit.com/google.com",
        location: "New York, United States",
        startDate: "Apr 2022",
        endDate: "Present",
        description: "Responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency."
      }
    ],
    certifications: [
      {
        name: "Google Professional Cloud Architect",
        issuer: "Google",
        issuerIcon: "https://logo.clearbit.com/google.com",
        issueDate: "Aug 2023",
        certificateId: "CB72982GG"
      },
      {
        name: "Microsoft Certified: Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issuerIcon: "https://logo.clearbit.com/microsoft.com",
        issueDate: "May 2022",
        certificateId: "MS12345AZ"
      }
    ]
  },
  {
    name: "Samantha Hayes",
    role: "Frontend Developer",
    company: "Meta",
    topSkills: ["JavaScript", "React", "Tailwind CSS"],
    about: "Frontend Developer at Meta, passionate about UI/UX and building intuitive user interfaces using modern JS frameworks.",
    salary: "18LPA - 21LPA",
    location: "San Francisco, United States",
    experience: [
      {
        title: "Frontend Developer",
        company: "Meta",
        companyIcon: "https://logo.clearbit.com/meta.com",
        location: "San Francisco, United States",
        startDate: "Jan 2021",
        endDate: "Present",
        description: "Created responsive and accessible UI for web applications, focusing on performance and maintainability."
      }
    ],
    certifications: [
      {
        name: "Meta Front-End Developer Certificate",
        issuer: "Meta",
        issuerIcon: "https://logo.clearbit.com/meta.com",
        issueDate: "Oct 2022",
        certificateId: "MFED1234"
      }
    ]
  },
  {
    name: "Daniel Kim",
    role: "Backend Developer",
    company: "Amazon",
    topSkills: ["Node.js", "AWS", "PostgreSQL"],
    about: "Backend Developer at Amazon with 5+ years of experience building APIs and cloud-native systems.",
    salary: "22LPA - 27LPA",
    location: "Seattle, United States",
    experience: [
      {
        title: "Backend Developer",
        company: "Amazon",
        companyIcon: "https://logo.clearbit.com/amazon.com",
        location: "Seattle, United States",
        startDate: "Mar 2020",
        endDate: "Present",
        description: "Designed microservices and REST APIs for internal tools using Node.js and AWS Lambda."
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon",
        issuerIcon: "https://logo.clearbit.com/amazon.com",
        issueDate: "Dec 2021",
        certificateId: "AWS123456"
      }
    ]
  },
  {
    name: "Priya Nair",
    role: "Full Stack Developer",
    company: "Microsoft",
    topSkills: ["C#", ".NET", "Angular"],
    about: "Full Stack Developer at Microsoft focusing on enterprise-grade .NET applications.",
    salary: "25LPA - 30LPA",
    location: "Bangalore, India",
    experience: [
      {
        title: "Full Stack Developer",
        company: "Microsoft",
        companyIcon: "https://logo.clearbit.com/microsoft.com",
        location: "Bangalore, India",
        startDate: "Feb 2022",
        endDate: "Present",
        description: "Built full-stack applications with .NET backend and Angular frontend for cloud-based solutions."
      }
    ],
    certifications: [
      {
        name: "Microsoft Certified: DevOps Engineer Expert",
        issuer: "Microsoft",
        issuerIcon: "https://logo.clearbit.com/microsoft.com",
        issueDate: "Jul 2023",
        certificateId: "MS789456"
      }
    ]
  },
  {
    name: "Yuki Tanaka",
    role: "Data Scientist",
    company: "IBM",
    topSkills: ["Python", "TensorFlow", "Pandas"],
    about: "Data Scientist at IBM, with experience in machine learning, data analysis, and deploying ML models.",
    salary: "22LPA - 26LPA",
    location: "Tokyo, Japan",
    experience: [
      {
        title: "Data Scientist",
        company: "IBM",
        companyIcon: "https://logo.clearbit.com/ibm.com",
        location: "Tokyo, Japan",
        startDate: "May 2021",
        endDate: "Present",
        description: "Analyzed data, built predictive models, and implemented ML pipelines for business intelligence."
      }
    ],
    certifications: [
      {
        name: "IBM Data Science Professional Certificate",
        issuer: "IBM",
        issuerIcon: "https://logo.clearbit.com/ibm.com",
        issueDate: "Jan 2023",
        certificateId: "IBMDSPC2023"
      }
    ]
  },
  {
    name: "Ahmed El-Sayed",
    role: "DevOps Engineer",
    company: "Spotify",
    topSkills: ["Docker", "Kubernetes", "Jenkins"],
    about: "DevOps Engineer ensuring scalable infrastructure and CI/CD automation at Spotify.",
    salary: "19LPA - 23LPA",
    location: "Berlin, Germany",
    experience: [
      {
        title: "DevOps Engineer",
        company: "Spotify",
        companyIcon: "https://logo.clearbit.com/spotify.com",
        location: "Berlin, Germany",
        startDate: "Jul 2020",
        endDate: "Present",
        description: "Managed CI/CD pipelines, automated deployments, and containerized services using Docker and K8s."
      }
    ],
    certifications: [
      {
        name: "Certified Kubernetes Administrator (CKA)",
        issuer: "Linux Foundation",
        issuerIcon: "https://logo.clearbit.com/linuxfoundation.org",
        issueDate: "Mar 2022",
        certificateId: "CKA2022AH"
      }
    ]
  },
  {
    name: "Laura Chen",
    role: "UI/UX Designer",
    company: "Adobe",
    topSkills: ["Figma", "Sketch", "Design Thinking"],
    about: "UI/UX Designer crafting user-first experiences and interactive design systems at Adobe.",
    salary: "16LPA - 19LPA",
    location: "London, United Kingdom",
    experience: [
      {
        title: "UI/UX Designer",
        company: "Adobe",
        companyIcon: "https://logo.clearbit.com/adobe.com",
        location: "London, United Kingdom",
        startDate: "Nov 2021",
        endDate: "Present",
        description: "Designed intuitive interfaces and conducted user research to enhance product usability."
      }
    ],
    certifications: [
      {
        name: "Adobe Certified Expert – Design",
        issuer: "Adobe",
        issuerIcon: "https://logo.clearbit.com/adobe.com",
        issueDate: "Aug 2022",
        certificateId: "ACE2022LC"
      }
    ]
  },
  {
    name: "Ravi Kumar",
    role: "Security Analyst",
    company: "Cisco",
    topSkills: ["Ethical Hacking", "Network Security", "Firewalls"],
    about: "Security Analyst protecting enterprise infrastructure and data integrity at Cisco.",
    salary: "24LPA - 28LPA",
    location: "Delhi, India",
    experience: [
      {
        title: "Security Analyst",
        company: "Cisco",
        companyIcon: "https://logo.clearbit.com/cisco.com",
        location: "Delhi, India",
        startDate: "Jun 2022",
        endDate: "Present",
        description: "Performed threat assessments, managed firewalls, and monitored network activity to prevent breaches."
      }
    ],
    certifications: [
      {
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        issuerIcon: "https://logo.clearbit.com/eccouncil.org",
        issueDate: "Sep 2023",
        certificateId: "CEH98765"
      }
    ]
  },
];

export default talents;    