import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  projectName?: string;
  projectImg?: Buffer;
  projectDesc?: string;
  softwareStack?: [String];
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
    type: Buffer,
    contentType: String,
    required: true
  },
  projectDesc: {
    type: String,
    required: true,
    maxlength: 280,
  },
  softwareStack: {
    type: [String],
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
