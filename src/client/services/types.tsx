export {};

//No need for a wrapper as this response is just an object.
export interface IProjectDetailsBody {
  Project: {
    _id: string; //mongodb id is type string
    createdAt: string;
    learnedInfo: string;
    projectDesc: string;
    projectImg: {
      data: Uint8Array;
    };
    projectName: string;
    softwareStack: String[];
    github: string;
  };
}

//wrapper needed as /api/projects/ is an array of objects.
// example: data : { Projects: [ { } ] }
export interface GetProjectResponseWrapper extends IProjectBody {
  Projects: Array<IProjectBody>;
}

interface IProjectBody {
  _id: string; //mongodb id is type string
  createdAt: string;
  learnedInfo?: string;
  projectDesc?: string;
  projectImg: {
    data: Uint8Array;
  };
  projectName: string;
  softwareStack?: string[];
  github?: string;
}
