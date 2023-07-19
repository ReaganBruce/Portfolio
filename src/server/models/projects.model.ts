import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  projectName?: string;
  projectImg?: Buffer;
  projectDesc?: string;
  softwareStack?: Array<string>;
  learnedInfo?: string;
  github?: string;
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
    required: true,
  },
  learnedInfo: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model<IProject>("Projects", ProjectSchema);

export { Project };
