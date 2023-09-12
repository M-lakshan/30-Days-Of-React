import dp from '../imgs/user/Lakshan.png';
import random_hexColorCode_generator from '../imgs/projects/day_05_lvl_3_i.png';
import userCard_preview_component from '../imgs/projects/day_05_lvl_3_ii.png';
import number_validate_component from '../imgs/projects/day_06_lvl_2_i.png';
import world_population_preview_component from '../imgs/projects/day_06_lvl_3.png';
import thirtyDaysOfReact_program_component from '../imgs/projects/day_08_lvl_2_i.gif';
import desination_selector from '../imgs/projects/day_08_lvl_2_ii.gif';
import logo_design_1 from '../imgs/projects/logo_design_1.jpg';
import logo_design_2 from '../imgs/projects/logo_design_2.jpg';
import logo_design_3 from '../imgs/projects/logo_design_3.jpg';
import logo_design_4 from '../imgs/projects/logo_design_4.jpg';
import figma_app_preview_1 from '../imgs/projects/figma_app_preview.png';
import figma_app_preview_2 from '../imgs/projects/figma_app_preview-2.png';
import ChemMovers_App from '../imgs/projects/ChemMovers_App.png';

const User = {
  photo: dp,
  name: "Lakshan Edirisinghe",
  profession: [
    "Designer",
    "Developer",
    "Freelancer"
  ],
  education: [
    {
      title: "Pearson BTEC HND - Specialized in Application Design & Development",
      holder: "Pearson/ESOFT Metro Campus, Sri Lanka",
      progress: "undergraduate",
      refferece: '',
      priority: 2
    },
    {
      title: "Bachelor of Information Technology Degree",
      holder: "University of Colombo - UCSC, Sri Lanka",
      progress: "undergraduate",
      refferece: '',
      priority: 1
    },
    {
      title: "Graphic Design & Creativity Development Certificate Program",
      holder: "University of Colombo - AMDTC, Sri Lanka",
      progress: "completed",
      refferece: '',
      priority: 4,
    },
    {
      title: "Full Stack Development Using MERN Certificate Program",
      holder: "University of Colombo - UCSC, Sri Lanka",
      progress: "completed",
      refferece: '',
      priority: 4,
    },
    {
      title: "Full Stack Developer Certificate Program",
      holder: "University of Moratuwa - DCSE & Faculty of Eng., Sri Lanka",
      progress: "trainee",
      refferece: '',
      priority: 3,
    }
  ],
  skills: [
    "Front-End Development",
    "Back-End Development",
    "Application Design & Development",
    "UI/UX Design",
    "Data Visualization"
  ],
  projects: [
    {
      tag: "web",
      title: "HexColor-Code Generator Component",
      language: ["React"],
      link: "https://github.com/M-lakshan/30-Days-Of-React/tree/exercise-solutions/solutions/day-05/level3/Q01",
      preview: random_hexColorCode_generator,
      desc: "",
      priority: 3
    },
    {
      tag: "web",
      title: "Number Validator Component",
      language: ["React"],
      link: "https://github.com/M-lakshan/30-Days-Of-React/tree/exercise-solutions/solutions/day-06/level2/Q01",
      preview: number_validate_component,
      desc: "",
      priority: 3
    },
    {
      tag: "web",
      title: "World Population Preview Component",
      language: ["React"],
      link: "https://github.com/M-lakshan/30-Days-Of-React/tree/exercise-solutions/solutions/day-06/level3",
      preview: world_population_preview_component,
      desc: "",
      priority: 2
    },
    {
      tag: "web",
      title: "General User-Card Preview Component",
      language: ["React"],
      link: "https://github.com/M-lakshan/30-Days-Of-React/tree/exercise-solutions/solutions/day-05/level3/Q02",
      preview: userCard_preview_component,
      desc: "",
      priority: 1
    },
    {
      tag: "design",
      title: "UI Design",
      language: ["Figma"],
      link: "#",
      preview: figma_app_preview_2,
      desc: "",
      priority: 1
    },
    {
      tag: "web",
      title: "Online Program Preview Component",
      language: ["React"],
      link: "https://github.com/M-lakshan/30-Days-Of-React/tree/exercise-solutions/solutions/day-08/level2/Q01",
      preview: thirtyDaysOfReact_program_component,
      desc: "",
      priority: 1
    },
    {
      tag: "web",
      title: "Destination Selector Component",
      language: ["React"],
      link: "https://github.com/M-lakshan/30-Days-Of-React/tree/exercise-solutions/solutions/day-08/level2/Q02",
      preview: desination_selector,
      desc: "",
      priority: 1
    },
    {
      tag: "design",
      title: "Logo Design #2",
      language: ["Adobe Illustrator"],
      link: "#",
      preview: logo_design_2,
      desc: "",
      priority: 1
    },
    {
      tag: "design",
      title: "Logo Design #1",
      language: ["Adobe Illustrator"],
      link: "#",
      preview: logo_design_4,
      desc: "",
      priority: 1
    },
    {
      tag: "app",
      title: "ChemMovers - Stock Manage Application",
      language: ["JAVA"],
      link: "#",
      preview: ChemMovers_App,
      desc: "",
      priority: 1
    }
  ],
  social: [
    {
      active: true,
      site: "Linkedin",
      username: "Lakshan-Edirisinghe",
      tag: "linkedin-in",
      link: "https://leetcode.com/M-lakshan/"
    },
    {
      active: true,
      site: "Stackoverflow",
      username: "Lakshan",
      tag: "stack-overflow",
      link: "https://stackoverflow.com/users/16220623/lakshan?tab=profile"
    },
    {
      active: true,
      site: "GitHub",
      username: "M-Lakshan",
      tag: "github",
      link: "https://github.com/M-Lakshan"
    },
    {
      active: false,
      site: "LeeteCode",
      username: "M-Lakshan",
      tag: "",
      link: "https://leetcode.com/M-lakshan/"
    },
  ],
  contact: "+94 772390192",
  email: "emlakshan92@yahoo.com",
  location: "Colombo, Sri Lanka",
  website: "wizardcreations.lk",
  copyright: (new Date().getFullYear()-1)+" - Wizard Creations"
}

export default User;