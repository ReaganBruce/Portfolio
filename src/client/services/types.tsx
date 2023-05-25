export {};



//No need for a wrapper as this response is just an object.
export interface IProjectDetailsBody {
  Project: {
    _id: string; //mongodb id is type string
    createdAt: string;
    learnedInfo: string;
    projectDesc: string;
    projectImg: Buffer;
    projectName: string;
    softwareStack: [String];
    github: string;
  };
}


//wrapper needed as /api/projects/ is an array of objects.
// example: data : { Projects: [ { } ] }
export interface GetProjectResponseWrapper extends IProjectsBody {
  Projects: Array<IProjectsBody>
}

interface IProjectsBody {
      _id: string; //mongodb id is type string
      createdAt: string;
      learnedInfo?: string;
      projectDesc?: string;
      projectImg: Buffer;
      projectName: string;
      softwareStack?: [String];
      github?: string;
}

