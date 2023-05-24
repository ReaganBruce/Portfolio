import { NextFunction, Request, Response } from "express";
import mongoose from 'mongoose';


//MongoDB Schema Import
import { Project } from "../models/projectsMod";


const allProjects = async (req: Request, res: Response, next: NextFunction) => {
  const findProjects = await Project.find();
  try {
      res.status(200).json({ message: "Success.", count: findProjects.length, Projects: findProjects });
  } catch (error) {
    next(error)
  }
};

const singleProject = async (req: Request, res: Response, next: NextFunction) => {
  const projectId = req.params.id;
  try {
    if (mongoose.Types.ObjectId.isValid(projectId)) { //Validating BSON ObjectID
      const findProject = await Project.findOne({ _id: projectId })
      res.status(200).json({
        Message: "Success",
        Project: findProject
      })
    } else {
      res.status(404).json({ ERROR: `Mongoose ID: ${projectId} not found.` })
    }
  } catch (error) {
    next(error)
  }
};

const createProject = async (req: Request, res: Response, next: NextFunction) => {
  const projectBody = req.body
  const projectImage = req.file?.buffer
  const projectData = await Project.create({
    projectName: projectBody.projectName,
    projectImg: projectImage,
    projectDesc: projectBody.projectDesc,
    softwareStack: projectBody.softwareStack,
    learnedInfo: projectBody.learnedInfo,
    github: projectBody.github
  });

  try {
    res.status(201).json({ message: `${req.body.projectName} created.`, project: projectData });
  } catch (error) {
    next(error)
  }
};

const updateProject = async (req: Request, res: Response, next: NextFunction) => {
  const projectId = req.params.id;
  const projectBody = req.body;
  const projectName = req.body.projectName;
  const updatedProject = await Project.findByIdAndUpdate(projectId, projectBody);

  try {
    res.status(200).json({ Message: `${projectName} updated.`, updatedProject });
  } catch (error) {
    next(error)
  }
};

const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
  const projectId = req.params.id;
  await Project.findByIdAndRemove(projectId);
  try {
    res.status(200).json({ message: `ID: ${projectId} deleted.` });
  } catch (error) {
    next(error)
  }
};

export default {
  allProjects,
  singleProject,
  createProject,
  updateProject,
  deleteProject,
};
