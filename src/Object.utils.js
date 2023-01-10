import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const socialMediaData = () => [
  {
    link: "#",
    icon: FaFacebook,
    name: "Facebook",
  },
  {
    link: "#",
    icon: FaLinkedin,
    name: "LinkedIn",
  },
  {
    link: "#",
    icon: FaGithub,
    name: "Github",
  },
];

const getSkillData = () => [
  {
    group: "Backend",
    skill: [
      {
        skillName: "Php/Laravel",
        value: 90,
      },
      {
        skillName: "Python",
        value: 50,
      },
    ],
  },
  {
    group: "Frontend",
    skill: [
      {
        skillName: "Html",
        value: 90,
      },
      {
        skillName: "Css",
        value: 80,
      },
      {
        skillName: "Bootstrap",
        value: 90,
      },
      {
        skillName: "JQuery",
        value: 80,
      },
      {
        skillName: "React.js",
        value: 40,
      },
    ],
  },
  {
    group: "Database",
    skill: [
      {
        skillName: "MySQL",
        value: 80,
      },
      {
        skillName: "MongoDB",
        value: 30,
      },
      {
        skillName: "SQLite",
        value: 50,
      },
    ],
  },
];

const getTimelineData = () => [
  {
    id: "1",
    startYear: "2018",
    endYear: "2022",
    title: "Study At Udayana University",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "2",
    startYear: "2019",
    endYear: "Now",
    title: "Programmer At Ganeshcom Studio",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "3",
    startYear: "2021",
    endYear: "Now",
    title: "IT Support At Disekitargame",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "4",
    startYear: "2022",
    endYear: "Now",
    title: "Founder In Human (Freelance)",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const getDataProjects = () => [
  {
    id: "1",
    title: "E-Commerce for Retail Shop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://google.com",
    imageBanner: "https://via.placeholder.com/400x200",
    images: [
      "https://via.placeholder.com/400x450",
      "https://via.placeholder.com/400x450",
      "https://via.placeholder.com/400x450",
      "https://via.placeholder.com/400x450",
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "2",
    title: "Project 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["React.js", "Laravel", "Bootstrap"],
    link: "https://google.com",
    imageBanner: "https://via.placeholder.com/400x200",
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "3",
    title: "Project 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["React.js", "Laravel", "Bootstrap"],
    link: "https://google.com",
    imageBanner: "https://via.placeholder.com/400x200",
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "4",
    title: "Project 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["React.js", "Laravel", "Bootstrap"],
    link: "https://google.com",
    imageBanner: "https://via.placeholder.com/400x200",
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "5",
    title: "Project 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["React.js", "Laravel", "Bootstrap"],
    link: "https://google.com",
    imageBanner: "https://via.placeholder.com/400x200",
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "6",
    title: "Project 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["React.js", "Laravel", "Bootstrap"],
    link: "https://google.com",
    imageBanner: "https://via.placeholder.com/400x200",
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "7",
    title: "Project 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["React.js", "Laravel", "Bootstrap"],
    link: "https://google.com",
    imageBanner: "https://via.placeholder.com/400x200",
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "8",
    title: "Project 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["React.js", "Laravel", "Bootstrap"],
    link: "https://google.com",
    imageBanner: "https://via.placeholder.com/400x200",
    images: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250",
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export { socialMediaData, getSkillData, getTimelineData, getDataProjects };
