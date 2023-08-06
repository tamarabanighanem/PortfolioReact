import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Front-End",
    projects:' HTML , CSS , JAVA SCRIPT , React JS , Tailwind , Bootstrap',
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Back-End",
    projects:' Node JS , Postgress , MongoDB , SQL ',
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Others",
    projects: 'JAVA , C++, Dart  , OOP , Data structure , Database , Algorthim , Problem Solving , GitHub',
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  'I have a Bachelors degree in Software Engineering from Hashemite University and completed a 7-month Full-stack Bootcamp at Coding Academy by Orange. I gained experience as a trainee at the academy, where I participated in an intensive course in Full Stack Web Development. Additionally, I possess soft skills such as teamwork, friendliness, autonomy, and self-motivation'
  
];

export const workExp = [
  {
    // place: "Self-Employed, Brisbane",
    tenure: "09/2019 - 06/2023",
    role: "Bachelors of Software Engineering    ",
    detail:
      "Hashemite University | Zarqa      ",
  },
  {
    // place: "New Man Services",
    tenure: "02/2023 – 08/2023    ",
    role: "7  Months Full-stack Bootcamp ",
    detail:
      " Coding Academy by Orange ",
  },
  {
    placee: "Trainee by Coding Academy by Orange",
    tenuree: "02-2023/08-2023    ",
    rolee: "Full-Stack Web Developer",
    detaile:
      "I ntensive course in full Stack Web Development in Collaboration with Simplon.co and Princess Sumaya University for Technology (PSUT)",
  },
];

export const comments = [



  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },


];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
