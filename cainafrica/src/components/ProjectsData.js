// import coloredlogo from '../images/coloredlogo.png'
import CainIjegun3Girls from "../images/ProjectsData/CainIjegun3Girls.JPG";
import JeidaClinic from "../images/ProjectsData/JEIDA clinic.jpg";
import CainLibrary2 from "../images/resource_center/CPL.jpg";
import Akaeze from "../images/ProjectsData/AKAEZE summer program.jpg";
import CAINTUT from "../images/ProjectsData/CAIN TUTORIAL classes.jpg";
import Christmas from "../images/christmas/IMG4.jpg";
import CEP from "../images/Gallery/CAREER/B (3).jpg";

const ProjectData = [
  {
    index: 1, //These should be incremental from the last interger
    title: "ARISE (Allocating Resources to Improve School Experience)",
    image: `${CainIjegun3Girls}`,
    description:
      "In the last two years, over 300 children at Ijegun Community Primary School 1, have had their learning experiences transformed by the ARISE project. The school has received about 200 textbooks in the major subjects of Mathematics and English. CAIN Education Foundation has been successful in providing these students with a stronger...",
    status: "Completed",
    link: "/projects/project-arise",
  },
  {
    index: 2,
    title: "Community Development For Jeida Village",
    image: `${JeidaClinic}`,
    description:
      " Ensuring that underprivileged communities in Africa have access to adequate healthcare services will continue to be our top concern and it remains one of the two pillars of the CAIN Education Foundation. Kelechi Umoga, a Yale University medical student, in collaboration with CAIN Education Foundation.",
    status: "Completed",
    link: "/projects/Project-BtG",
  },
  {
    index: 3,
    title: "CAIN Educational Resource Center",
    image: `${CainLibrary2}`,
    description:
      "The CAIN Educational Resource Centre in Ikotun, Lagos, was established as a result of our resolve to provide a long-term solution to the void in quality education that plagues underprivileged communities. By establishing this facility, we will be able to provide effective educational resources that will promote intellectual development, self-reliance and socioeconomic growth.",
    status: "Completed",
    link: "/projects/Project-CAINERC",
  },
  {
    index: 4,
    title: "CAIN Daily Tutorial Program",
    image: `${CAINTUT}`,
    description:
      "The CAIN Daily Tutorial Program is one of the key areas of intervention of the CAIN Scholars' Program, which aims to help children from low-income families in the Ikotun/Igando Local Government Area gain access to high-quality educational resources, introduce them to educational enhancement programs, and equip them with the skills...",
    status: "Ongoing",
    link: "/projects/Project-CAINSP2017",
  },
  {
    index: 5,
    title: "Akaeze Summer Reading Program",
    image: `${Akaeze}`,
    description:
      "The Akaeze Summer Reading Program is designed to encourage students to build a reading habit as well as critical thinking and communication abilities. Reading, discussions, vocabulary development and essay writing are the four main pillars of this program. The first edition of this program took place at CAIN Educational Resource Centre.",
    status: "Ongoing",
    link: "/projects/Akaeze-Summer-Program",
  },
  {
    index: 6,
    title: "Christmas Benevolence Project ",
    image: `${Christmas}`,
    description:
      "This effort arose from our desire to assist and support the community's less privileged people over the Christmas holiday season. It's a CAIN Education Foundation charity initiative aimed at providing food and other gifts to destitute families during the Christmas season. The first edition of this program, dubbed 'The 50/50 Campaign'...",
    status: "Ongoing",
    link: "/projects/Christmas-Benevolence-Project",
  },
  {
    index: 7,
    title: "Career Enrichment Program",
    image: `${CEP}`,
    description:
      "The CAIN Career Enrichment Program is a monthly developmental program created to assist over 1,000 underprivileged students in making informed educational and career choices. We believe all individuals should be empowered to choose a meaningful career and education pathway to position themselves for lifelong success.",
    status: "Ongoing",
    link: "/projects/career-enrichment-program",
  },
];

export default ProjectData;
