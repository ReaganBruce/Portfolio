//wrapper needed as /api/projects/ is an array of objects.
// example: data : { Projects: [ { } ] }
export interface ProjectBody extends FormData {
  projects?: Array<Project>;
}

export interface Project {
  _id: string;
  createdAt: string;
  learnedInfo: string;
  projectDesc: string;
  projectImg: string;
  projectName: string;
  softwareStack: string[];
  github: string;
}

export interface ProjectDetails {
  details: {
    _id: string;
    createdAt: string;
    learnedInfo: string;
    projectDesc: string;
    projectImg: string;
    projectName: string;
    softwareStack: string[];
    github: string;
  };
}

export interface Admin {
  username: string;
  password: string;
  token?: string;
}
