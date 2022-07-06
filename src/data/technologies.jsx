import img1 from "/assets/preViews/preViewNasa.png";

//Okhlos 
import img2 from "/assets/preViews/preViewOkhlos.png";
import video2 from "/assets/videos/OKHLOS.mp4";

//CRUD
import img3 from "/assets/preViews/preViewCrud.png";
import video3 from "/assets/videos/CRUD.mp4";

//Chocotela
import img4 from "/assets/preViews/preViewChocotela.png";
import video4 from "/assets/videos/Chocotela.mp4";

// import { DiReact } from "react-icons/di";
// import { AiOutlineApi } from "react-icons/ai";
// import { SiTailwindcss } from "react-icons/si";

const technologies = [
  {
    id: "1",
    categori: "React",
    tecno: "",
    project: "Chocotela E-commerce.",
    video: video4,
    description: "En esta ocasión tuve la oportunidad de realizar un E-commerce para el emprendimiento Chocotela, se realizó una aplicación web que permite la administración de los productos que se vendían en el local, así como la gestión de los pedidos.",
    img: img4,
    // tecUse: [{}, {}, {}],
  },
  {
    id: "2",
    categori: "FullStack",
    tecno: "",
    project: "CRUD.",
    video: video3,
    description: "Gestor de citas en una base de datos, con interfaz de usuario.",
    img: img3,
  },
  {
    id: "3",
    categori: "FullStack",
    tecno: "",
    project: "Okhlos mentoria.",
    video: video2,
    description:"Okhlos es una plataforma de mentoring que te ayuda a realizar match entre estudiantes y mentores, con Okhlos se logro optimizar un proceso que consumia aproximadamente 8 horas de trabajo.",
    img: img2,
  },
  {
    id: "4",
    categori: "API",
    tecno: "Mongodb",
    project: "Nasa APIS.",
    description: "This project consumes several APIS provided by nasa",
    img: img1
    // tecUse: [<DiReact />, <AiOutlineApi />, <SiTailwindcss />],
  },
  
];

export default technologies;
