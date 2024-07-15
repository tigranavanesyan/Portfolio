import {FaCss3, FaGithub, FaHtml5, FaJsSquare, FaPhp, FaReact} from "react-icons/fa";
import {TbBrandNextjs, TbBrandRedux, TbBrandTypescript} from "react-icons/tb";
import {IoLogoNodejs} from "react-icons/io5";
import {DiMongodb} from "react-icons/di";
import {RiBootstrapLine} from "react-icons/ri";
import {SiMysql, SiTailwindcss} from "react-icons/si";

const items = [
    {
        id: "1",
        icon: <FaHtml5 />,
        fill: '#e34c26',
        skill: "HTML5",
        percentage: "90%"
    },
    {
        id: "2",
        icon: <FaCss3 />,
        fill:'#264de4',
        skill: "CSS3",
        percentage: "80%"
    },
    {
        id: "3",
        icon: <FaJsSquare />,
        fill:'#f0db4f',
        skill: "JAVASCRIPT",
        percentage: "90%"
    },
    {
        id: "4",
        icon: <TbBrandTypescript />,
        fill:'#007BCD',
        skill: "Typescript",
        percentage: "80%"
    },
    {
        id: "5",
        icon: <FaReact />,
        fill:'#00d8ff',
        skill: "REACT",
        percentage: "90%"
    },
    {
        id: "6",
        icon: <TbBrandRedux />,
        fill:'#7749BD',
        skill: "Redux",
        percentage: "90%"
    },
    {
        id: "7",
        icon: <TbBrandNextjs />,
        fill:'black',
        skill: "Next.js",
        percentage: "70%"
    },
    {
        id: "8",
        icon: <IoLogoNodejs />,
        fill:'#529F41',
        skill: "Node.js",
        percentage: "60%"
    },
    {
        id: "9",
        icon: <DiMongodb />,
        fill:'#57AA4B',
        skill: "MongoDB",
        percentage: "40%"
    },
    {
        id: "10",
        icon: <FaGithub />,
        fill:'black',
        skill: "Git/GitHub",
        percentage: "80%"
    },
    {
        id: "11",
        icon: <RiBootstrapLine />,
        fill:'#7C11F8',
        skill: "Bootstrap5",
        percentage: "70%"
    },
    {
        id: "12",
        icon: <SiTailwindcss />,
        fill:'#34BEF5',
        skill: "Tailwind",
        percentage: "80%"
    },
    {
        id: "13",
        icon: <FaPhp />,
        fill:'#465489',
        skill: "PHP",
        percentage: "70%"
    },
    {
        id: "14",
        icon: <SiMysql />,
        fill:'#016089',
        skill: "MySQL",
        percentage: "50%"
    }
];
export default items;