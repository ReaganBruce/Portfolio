
//wrapper needed as /api/projects/ is an array of objects.
// example: data : { Projects: [ { } ] }
export interface GetProjectResponseWrapper {
  Projects: IProjectBody[];
}

export interface IProjectBody {
  _id: string; //mongodb id is type string
  createdAt: string;
  learnedInfo?: string;
  projectDesc?: string;
  projectImg: {
    data: Buffer;
  };
  projectName: string;
  softwareStack?: string[];
  github?: string;
}

//No need for a wrapper as this response is just an object.
export interface IProjectDetailsBody {
  Project: {
    _id: string; //mongodb id is type string
    createdAt: string;
    learnedInfo: string;
    projectDesc: string;
    projectImg: {
      data: Buffer;
    };
    projectName: string;
    softwareStack: String[];
    github: string;
  };
}
