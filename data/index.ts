export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Driven by customer success, fueled by collaboration, and always learning to deliver excellence.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Enjoy working with Distributed Teams across globe",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to work together?",
    description: "",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SaaS CRM Platform",
    des: "Cloud Based B2B SaaS CRM and Sales Management Solutions.",
    img: "/p1.png",
    iconLists: ["/angular.svg", "/nestjs.svg", "/graphql.svg", "/ts.svg", "/mongo.svg", "/k8s.svg"],
    link: "https://samdock.app/",
  },
  {
    id: 2,
    title: "Modern Banking platform",
    des: "EzBank is a financial SaaS platform connecting multiple bank accounts.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "appwrite.svg", "plaid.jpeg", "dwolla.svg"],
    link: "https://banking.divya.cloud",
  },
  {
    id: 3,
    title: "AI Audio SaaS - Podcasts Creator",
    des: "A cutting-edge AI SaaS platform to create and discover podcasts.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/c.svg", "/convex.svg", "/openai.svg"],
    link: "https://podcasts.divya.cloud",
  },
];

export const testimonials = [
  {
    quote:
      "Divya possesses a rare blend of creativity and technical prowess, allowing her to craft elegant solutions to complex problems. Her proficiency in both front-end and back-end development technologies has been instrumental in driving the success of our projects. Whether it's designing intuitive user interfaces or optimizing performance of our project, Divya approaches every task with meticulous attention to detail and a commitment to excellence. Her strong work ethic, positive attitude, and adaptability make her a valuable asset to any project or initiative she is involved in.",
    name: "Dmitry Zhorov",
    img: "/Dmitry.jpeg",
    title: "CTO, Samdock GmbH",
  },
  {
    quote:
      "Divya consistently demonstrated exceptional technical skills and a deep understanding of both frontend and backend technologies. Her expertise in Angular, TypeScript, and NestJS was instrumental in architecting and implementing our cloud-based CRM and sales system, the Samdock platform. Beyond her technical contributions, Divya excelled in collaboration and leadership. She worked seamlessly with cross-functional teams, including product management, to evaluate project outcomes and prioritize future features. Her mentorship of junior developers was particularly noteworthy, as she guided and supported four team members, accelerating their skill development and integration into the team. Divya's commitment to code quality was exemplary.",
    name: "Alexander Woelke",
    img: "/Alex.jpeg",
    title: "CEO, Samdock GmbH",
  },
];

export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - SamDock",
    desc: "Architected and rolled out a cloud-based B2B SaaS CRM and sales system tailored for global markets using Angular 17 for the frontend and NestJS for the backend.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Senior Frontend Developer - Bosch",
    desc: "Spearheaded the development of a Single Page Application using Angular 13, specifically designed for system modeling in the automotive industry.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer - eRevMax",
    desc: "Assisted an Angular-based application for hotel management, ensuring efficient operations across 5000+ properties.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Personal Development",
    desc: "Angular by day, React and Next.js by night – crafting dynamic web experiences around the clock.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/divya-jeevanantham/",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/divya-jeevanantham/",
  },
];
