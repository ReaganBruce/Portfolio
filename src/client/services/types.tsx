export {};



//No need for a wrapper as this response is just an object.
export interface IProjectDetailsBody {
  Project: {
    _id: number;
    createdAt: string;
    learnedInfo: string;
    projectDesc: string;
    projectImg: Buffer;
    projectName: string;
    softwareStack: [String];
    github: string;
  };
}


//wrapper needed as /api/projects is an array of objects.
// data : { Projects: [ { } ] }
export interface GetProjectResponseWrapper extends IProjectsBody {
  Projects: Array<IProjectsBody>
}

interface IProjectsBody {
      _id: number;
      createdAt: string;
      learnedInfo?: string;
      projectDesc?: string;
      projectImg: Buffer;
      projectName: string;
      softwareStack?: [String];
      github?: string;
}

