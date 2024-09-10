// import coloredlogo from '../images/coloredlogo.png'
import JeidaClinic from '../images/ProjectsData/JEIDA clinic.jpg';
import Akaeze from '../images/ProjectsData/AKAEZE summer program.jpg';
import CAINTUT from '../images/ProjectsData/CAIN TUTORIAL classes.jpg';
import Christmas from "../images/christmas/IMG4.jpg";
import Library from '../images/Gallery/LIBRARY/L (1).jpg'
import Career from '../images/Gallery/CAREER/B (2).jpg'

const GalleryData = [
 {   
        index: 1,
        title: "Community Development For Jeida Village",
        image: `${JeidaClinic}`,
        link: "/gallery/Jeida-Clinic"
    },

    {   
        index: 2,
        title: "CAIN Daily Tutorial Program",
        image: `${CAINTUT}`,
        link: "/gallery/Tutorial"
    },
    {   
        index: 3,
        title: "Akaeze Summer Program",
        image: `${Akaeze}`,
        link: "/gallery/Akaeze-Summer-Program"
    },
    {
   		index: 4,
    	title: "Christmas Benevolence Project ",
    	image: `${Christmas}`,
    	link: "/gallery/Christmas",
    },
    {   
        index: 5,
        title: "The CAIN Library Initiative",
        image: `${Library}`,
        link: "/gallery/library"
    },
    {   
        index: 5,
        title: "Career Enrichment Program",
        image: `${Career}`,
        link: "/gallery/career"
    },
]

export default GalleryData;
