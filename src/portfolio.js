/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Le Phuoc Thanh",
  title: "Hi all, I'm Phuoc Thanh - Blockchain DevOps Engineer",
  subTitle: emoji(
    "A passionate Blockchain DevOps Engineer 🚀 with extensive experience in designing, deploying, and managing blockchain infrastructures, leveraging tools like Docker, Kubernetes, Terraform, and CI/CD pipelines to build scalable and secure decentralized applications."
  ),
  resumeLink:"https://drive.google.com/file/d/1CWP9m909w9nyFxW0ZSj3n2Ge-VXMNTx0/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Lephuocthanh2000",
  linkedin: "https://www.linkedin.com/in/lephuocthanh2212/",
  gmail: "thanhlpdevops@gmail.com",
  gitlab: "https://gitlab.com/Lephuocthanh2000",
  facebook: "https://www.facebook.com/Lephuocthanh2000",
  twitter: "https://x.com/LePhuoc06982807",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "INNOVATIVE BLOCKCHAIN DEVOPS ENGINEER EXPLORING CUTTING-EDGE TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Design, deploy, and maintain robust blockchain infrastructures for decentralized applications"
    ),
    emoji("⚡ Automate CI/CD pipelines for seamless deployment and scalability"),
    emoji(
      "⚡ Integrate cloud services like AWS, Azure, and Digital Ocean to enhance performance and efficiency"
    ),
    emoji(
      "⚡ Manage containerized environments using Docker and Kubernetes for scalability and reliability"
    )
  ],
  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "gitlab ",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "cloudflare",
      fontAwesomeClassname: "fab fa-cloudflare"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VNUHCM - University of Information Technology (UIT)",
      logo: require("./assets/images/Logo_UIT_Web.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "September 2018 - June 2022",
      desc: "Graduated with a strong focus on blockchain technology and DevOps practices.",
      descBullets: [
        "Completed a thesis on blockchain integration for decentralized applications",
        "Studied advanced topics such as Cloud Computing, Network Security, and Database Management"
      ],
      schoolWedsite: "https://uit.edu.vn/"
    },
    {
      schoolName: "Nguyen Binh Khiem High School for the Gifted - Vinh Long",
      logo: require("./assets/images/Nbk.png"),
      subHeader: "This is a high school that is among the top in Southern Vietnam",
      duration: "September 2015 - May 2018",
      desc: "Excelled in chemistry while developing a strong passion for information technology.",
      descBullets: [
        "Won multiple provincial and city-level awards in chemistry competitions",
        "Active member of the programming club"
      ],
      schoolWedsite: "https://c3nguyenbinhkhiem.vinhlong.edu.vn/"
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Blockchain",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
    
  ],
  displayCodersrank: true  // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior DevOps Engineer",
      company: "Ziichat",
      companylogo: require("./assets/images/ziichatLogo.png"), // Logo của Ziichat
      date: "10/2024 – present",
      desc: " ZiiChat is a dynamic software company based in Can Tho city, Vietnam, specializing in social media and communication platforms. Our flagship product, ZiiChat, is a fast, secure messaging app designed to connect people worldwide with ease. At ZiiChat, we prioritize innovation and user satisfaction, delivering cutting-edge solutions for seamless communication. Our mission is to create secure, user-friendly platforms that bring people closer together, regardless of distance",
      descBullets: [
        "Developed CI/CD pipelines with tools like Jenkins, Azure DevOps, and GitLab CI/CD for seamless software delivery.",
        "Containerized applications using Docker and Kubernetes, orchestrated deployments with Helm.",
        "Provisioned and maintained infrastructure using Ansible and Terraform.",
        "Monitored system performance and reliability with Prometheus and Grafana.",
        "Collaborated on blockchain-based messaging solutions to enhance security and efficiency.",
        "Ensured end-to-end encryption and real-time notification systems for secure communication."
      ],
      companyWebsite : "https://ziichat.com"
    },
    {
      role: "Blockchain DevOps Engineer",
      company: "GlobalChain Co., Ltd.",
      
      companylogo: require("./assets/images/globalChainLogo.png"), // Logo công ty GlobalChain
      date: "10/2023 – 10/2024",
      desc: "At GlobalChain specialize in blockchain software solutions, with our flagship product, Schat, designed to enhance data security and optimize workflows for law enforcement through private blockchain technology. My responsibilities include developing and deploying real-world blockchain systems on Ethereum and Hyperledger, creating smart contracts, researching advanced blockchain techniques, and implementing end-to-end (E2E) message encryption and push notifications.",
      descBullets: [
        "Developed and deployed Ethereum and Hyperledger blockchain systems to enhance data security.",
        "Created and deployed smart contracts to enable secure transactions and workflows.",
        "Implemented end-to-end encryption for secure messaging and real-time push notifications.",
        "Automated CI/CD pipelines using Jenkins, Azure DevOps, and GitLab CI/CD for efficient software delivery.",
        "Containerized applications using Docker and Kubernetes, managed deployments using Helm/Charts.",
        "Managed infrastructure provisioning using Ansible and Terraform to ensure consistent environments.",
        "Monitored performance and system health using Prometheus and Grafana, ensuring optimal operation."
      ],
      companyWebsite : "https://globalchain.vn"
      
    },
    {
      role: "Fresher Java Developer",
      company: "Success Software Service",
      companylogo: require("./assets/images/Successsoftwareservice.png"), // Logo công ty Success Software
      date: "5/2022 – 7/2022",
      desc: "In this role, I had the opportunity to learn and develop crucial software development skills. I actively participated in building a backend application, utilizing knowledge of microservices, PostgreSQL, and RabbitMQ.",
      descBullets: [
        "Developed and deployed microservices for the backend application, optimizing performance and scalability.",
        "Used PostgreSQL for data storage, ensuring data integrity and security.",
        "Leveraged RabbitMQ for communication between application components, enhancing flexibility.",
        "Learned and applied best practices for software architecture, focusing on high availability and fault tolerance."
      ],
      companyWebsite : "https://successsoftware.global/"
    }    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     projectName: "Saayahealth",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://saayahealth.com/"
  //       }
  //       //  you can add extra buttons here.
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     projectName: "Nextu",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://nextu.se/"
  //       }
  //     ]
  //   }
  // ],
  // title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     image: require("./assets/images/globalChainLogo.png"),
  //     projectName: "GlobalChain",
  //     projectDesc: "Developed and deployed blockchain systems using Ethereum and Hyperledger for enhanced data security in law enforcement. Worked on smart contract creation and integration, automated CI/CD pipelines, and implemented end-to-end encryption for secure communications.",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://globalchain.vn/"
  //       }
  //       //  you can add extra buttons here.
  //     ]
  //   },
    // {
    //   image: require("./assets/images/successSoftwareLogo.png"),
    //   projectName: "Success Software Service",
    //   projectDesc: "Developed backend microservices using PostgreSQL and RabbitMQ. Optimized performance, ensured data integrity, and facilitated communication between components to enhance the scalability and flexibility of the system.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://successsoftware.vn/" // Replace with the actual URL of the website
    //     }
    //   ]
    // }
  // ],

  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle: "Let's connect! Whether it's to discuss a project or just say hello, I'm always happy to chat.",
  number: "+84-816822212", // Cập nhật số điện thoại của bạn
  email_address: "thanhlpdevops@gmail.com" // Thay đổi email của bạn

};

// Twitter Section

const twitterDetails = {
  userName: "lephuocthanh200", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
