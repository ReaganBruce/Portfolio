import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  projectName?: String;
  projectImg?: Buffer;
  projectDesc?: String;
  softwareStack?: Array<string>;
  learnedInfo?: String;
  github?: String;
  createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectImg: {
    type: String,
    required: true
  },
  projectDesc: {
    type: String,
    required: true,
  },
  softwareStack: {
    type: Array<String>,
    required: false,
  },
  learnedInfo: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model<IProject>("Projects", ProjectSchema);

export { Project };
