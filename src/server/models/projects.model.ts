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
