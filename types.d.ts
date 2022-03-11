export interface Hobby {
  title: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  /**
   * url to the project
   */
  link: string;
}

export interface Link {
  title: string;
  url: string;
  icon: string;
}

export interface Education {
  img: string;
  institution: string;
  field: string;
  dates: {
    start: string;
    end: string;
  };
}

export interface Job {
  companyName: string;
  img: string;
  positions: [
    {
      title: string;
      contractType: string[];
      dates: {
        start: string;
      };
      location: string;
      details: string[];
    },
    {
      title: string;
      contractType: "Full-time" | "Part-time";
      dates: {
        start: string;
        end: string;
      };
      location: string;
      details: string[];
    }
  ];
}

export interface User {
  name: string;
  surname: string;
  avatar: string;
  quote: string;
  softSkills: string[];
  hardSkills: string[];
  about_me: string;
  start: string;
  experience: Job[];
  education: Education[];
  hobbies: Hobby[];
  projects: Project[];
  links: Link[]
}
