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
      objective: "",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description: "",
      img_url: "",
      demo_url: "",
    },
    {
      id: 2,
      title: "Ylabs Inovasi Indonesia",
      slug: "ylabs-inovasi-indonesia",
      category: "Web Application",
      date: "2022-07-11",
      tag: "UI / Frontend",
      client: {
        company: "",
        services: "",
        website: "",
      },
      objective: "",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description: "",
      img_url: "",
      demo_url: "",
    },
    {
      id: 3,
      title: "Enthalphy",
      slug: "enthalphy",
      category: "Web Application",
      date: "2022-08-20",
      tag: "UI / Frontend",
      client: {
        company: "",
        services: "",
        website: "",
      },
      objective: "",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description: "",
      img_url: "",
      demo_url: "",
    },
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
      img_url: "",
      demo_url: "",
    },
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
      description: "",
      img_url: "",
      demo_url: "",
    },
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
      description: "",
      img_url: "",
      demo_url: "",
    },
  ];

  const realProjects = [
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
      objective: "",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description: "",
      img_url: "",
      demo_url: "",
    },
    {
      id: 2,
      title: "Ylabs Inovasi Indonesia",
      slug: "ylabs-inovasi-indonesia",
      category: "Web Application",
      date: "2022-07-11",
      tag: "UI / Frontend",
      client: {
        company: "",
        services: "",
        website: "",
      },
      objective: "",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description: "",
      img_url: "",
      demo_url: "",
    },
    {
      id: 3,
      title: "Enthalphy",
      slug: "enthalphy",
      category: "Web Application",
      date: "2022-08-20",
      tag: "UI / Frontend",
      client: {
        company: "",
        services: "",
        website: "",
      },
      objective: "",
      tools_tech: "HTML, CSS, JavaScript, React.js, TailwindCSS",
      description: "",
      img_url: "",
      demo_url: "",
    },
  ];

  const explorationProjects = [
    {
      id: 1,
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
      img_url: "",
      demo_url: "",
    },
    {
      id: 2,
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
      description: "",
      img_url: "",
      demo_url: "",
    },
    {
      id: 3,
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
      description: "",
      img_url: "",
      demo_url: "",
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
