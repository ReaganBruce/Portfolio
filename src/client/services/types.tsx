//wrapper needed as /api/projects/ is an array of objects.
// example: data : { Projects: [ { } ] }
export type ProjectBody = {
  projects: Array<Project>;
};

export type Project = {
  _id: string; //mongodb id is type string
  createdAt: string;
  learnedInfo: string;
  projectDesc: string;
  projectImg: string;
  projectName: string;
  softwareStack: string[];
  github: string;
};

export type ProjectDetails = {
  details: {
    _id: string; //mongodb id is type string
    createdAt: string;
    learnedInfo: string;
    projectDesc: string;
    projectImg: string;
    projectName: string;
    softwareStack: string[];
    github: string;
  };
};
