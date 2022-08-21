import React from "react";

type StoreContextObj = {
  allProjects: any;
  realProjects: any;
  explorationProjects: any;
};

export const StoreContext = React.createContext<StoreContextObj>({
  allProjects: null,
  realProjects: null,
  explorationProjects: null,
});

const StoreContextProvider: React.FC<{
  children: any;
}> = (props) => {
  const allProjects = [
    // pastiangkut
    {
      id: 1,
      title: "PastiAngkut",
      slug: "pastiangkut",
      category: "Web Application",
      date: "2022-06-18",
      tag: "UI / Frontend",
      client: {
        company: "Kelompok Usaha Pengelola Sampah (KUPAS)",
        services: "Waste Bank Facility, Garbage Pick-Up Service",
        website: "https://www.pastiangkut.id/",
      },
      objective:
        "The development of the PastiAngkut Admin website using the Javascript Framework for three admin roles, Superadmin, Operations Admin, and Hangar Admin.",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description:
        "PastiAngkut is a digital company that provides a complete waste service system. PastiAngkut was born from a long experience and success story in managing waste in Panggungharjo Village, Bantul Regency, Yogyakarta since 2013 until today. <br/><br/>PastiAngkut was present because of concerns that waste management has not been managed professionally by the institutions responsible for managing household, community, village and regional waste. The presence of PastiAngkut is to realize the dream of establishing a waste service system professionally and without landfills.<br/><br/>PastiAngkut is developed in two different parts, admin and user. Admin is divided into three roles, the higher level is Superadmin, the middle level is Operational Admin, and the lowest level is Hangar Admin. and the user share is served by the mobile app.",
      project_images: [
        { image: "/images/PastiAngkut/pict-first.png" },
        { image: "/images/PastiAngkut/pict-second.png" },
        { image: "/images/PastiAngkut/pict-third.png" },
      ],
      demo_url: "",
      // https://pastiangkut-demo.netlify.app/
    },
    // ylbas dashboard
    {
      id: 2,
      title: "Ylabs Dashboard Website",
      slug: "ylabs-inovasi-indonesia",
      category: "Web Application",
      date: "2022-07-11",
      tag: "UI / Frontend",
      client: {
        company: "Ylabs Inovasi Indonesia",
        services: "Tech Product Development, Co-Research & Matching Fund",
        website: "https://ylabs.id/",
      },
      objective:
        "Building a web based dashboard app for Ylabs Inovasi Indonesia using Javacript Framework React.js. This dashboard is used for content management in Ylabs landing page.",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description:
        "YLabs Indonesia is an ecosystem builder of a sustainable tech-based innovation system that enabling the collaboration between inventors, industries, and investors.",
      project_images: [
        { image: "/images/Ylabs/pict-first.png" },
        { image: "/images/Ylabs/pict-second.png" },
        { image: "/images/Ylabs/pict-third.png" },
      ],
      demo_url: "",
      // https://ylabs-dashboard-demo.netlify.app/
    },
    // enthalphy
    {
      id: 3,
      title: "Enthalphy",
      slug: "enthalphy",
      category: "Web Application",
      date: "2022-08-20",
      tag: "UI / Frontend",
      client: {
        company: "Enthalphy Environergy Consulting",
        services: "Energy and environmental consulting",
        website: "https://enthalphy.wordpress.com/",
      },
      objective:
        "Building a web based dashboard app for Enthalphy Environergy Consulting using Javacript Framework React.js. The main purpose of developing this website application is to provide digital emission recording by providing several emission parameters so that the total emission load is obtained based on user input..",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description:
        "Enthalphy is an energy and environmental consulting firm that is committed to providing a positive impact through our services to achieve sustainability aspects, in terms of comprehensive studies, planning, calculations, preparation and assistance of documents to improve environmental quality to fulfilling the government standard and beyond compliance environmental management. <br/><br/>Established in 2022, with different backgrounds and experience. Kosambi, Kota Cirebon, Jawa Barat",
      project_images: [
        { image: "/images/Enthalphy/pict-first.png" },
        { image: "/images/Enthalphy/pict-second.png" },
        { image: "/images/Enthalphy/pict-third.png" },
      ],
      demo_url: "",
      // https://enthalphy-demo.netlify.app/login
    },
    // medical active
    {
      id: 4,
      title: "Medical Active",
      slug: "medical-active",
      category: "Web Application",
      date: "2022-06-23",
      tag: "UI / Frontend",
      client: {
        company: "",
        services: "",
        website: "",
      },
      objective: "",
      tools_tech: "HTML, CSS, JavaScript, Vue.js, TailwindCSS",
      description: "",
      project_images: [{ image: "" }, { image: "" }, { image: "" }],
      demo_url: "",
    },
    // movies
    {
      id: 5,
      title: "Movies",
      category: "Web Application",
      slug: "movies",
      date: "2022-07-15",
      tag: "UI / Frontend",
      client: {
        company: "",
        services: "",
        website: "",
      },
      objective:
        "Developing a movie streaming website that can provide movie lists, movie details, and movie trailers. the user must log in to watch the trailer",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS, Firebase",
      description:
        "This is a DTS digitalent mini project for React Developer class. this website use TMDB as third party API to get all movie data and display it on the application. <br/><br/>Main library used in this project is Better react carousel, another librari such as axios, react router dom also added in this project. For the authentication, this project using firebase auth. So user can register and login with their account. User who not registered in the database cannot see movie detail or playing the movie trailer",
      project_images: [{ image: "" }, { image: "" }, { image: "" }],
      demo_url: "https://chatonsatria-dts-movie.netlify.app/dts-mini-movie",
    },
    // rawr
    {
      id: 6,
      title: "R A W R",
      category: "Web Application",
      slug: "r-a-w-r",
      date: "2022-08-01",
      tag: "UI / Frontend",
      client: {
        company: "",
        services: "",
        website: "",
      },
      objective:
        "Developing a game browser website. Users can perform login, register, game searches, view game details, and get game recommendations",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS, Firebase",
      description:
        "This is a DTS digitalent final project for React Developer class. this website use RAWG as third party API Key to get all the games list data and display it on the application. <br/><br/>Main feature in this application is searching and filtering. Searching feature can be done by inputing game name in the search box, and filtering can be done by clicking dropdown menu. This website also give game recomendation based on game genres.Authentication by firebase auth. User can login and register.",
      project_images: [{ image: "" }, { image: "" }, { image: "" }],
      demo_url: "https://152235865100777-dts-final-project.netlify.app/",
    },
  ];

  const realProjects = [
    // pastiangkut
    {
      id: 1,
      title: "PastiAngkut",
      slug: "pastiangkut",
      category: "Web Application",
      project_thumbnail: "/images/PastiAngkut/logo-pastiangkut.png",
    },
    // ylabs dashboard
    {
      id: 2,
      title: "Ylabs Dashboard Website",
      slug: "ylabs-inovasi-indonesia",
      category: "Web Application",
      project_thumbnail: "/images/Ylabs/logo-ylabs.png",
    },
    // enthalphy
    {
      id: 3,
      title: "Enthalphy",
      slug: "enthalphy",
      category: "Web Application",
      project_thumbnail: "/images/Enthalphy/logo-enthalphy.png",
    },
  ];

  const explorationProjects = [
    // medical active
    {
      id: 1,
      title: "Medical Active",
      slug: "medical-active",
      category: "Web Application",
      project_thumbnail: "",
    },
    // movies
    {
      id: 2,
      title: "Movies",
      slug: "movies",
      category: "Web Application",
      project_thumbnail: "",
    },
    // rawr
    {
      id: 3,
      title: "R A W R",
      slug: "r-a-w-r",
      category: "Web Application",
      project_thumbnail: "",
    },
  ];

  const contextValue: StoreContextObj = {
    allProjects: allProjects,
    realProjects: realProjects.reverse(),
    explorationProjects: explorationProjects.reverse(),
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
