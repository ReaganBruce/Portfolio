import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

//MongoDB Schema Import
import { Project } from "../models/projectsMod";

const allProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findProjects = await Project.find();
    res.status(200).json({
      message: "Success.",
      count: findProjects.length,
      Projects: findProjects,
    });
  } catch (error) {
    next(error);
  }
};

const singleProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectId = req.params.id;
    if (mongoose.Types.ObjectId.isValid(projectId)) {
      //Validating BSON ObjectID
      const findProject = await Project.findOne({ _id: projectId });
      res.status(200).json({
        Message: "Success",
        Project: findProject,
      });
    } else {
      res.status(404).json({ ERROR: `Mongoose ID: ${projectId} not found.` });
    }
  } catch (error) {
    next(error);
  }
};

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { projectName, projectDesc, softwareStack, learnedInfo, github } =
      req.body;
    const projectImg = req.file?.location;

    const projectData = await Project.create({
      projectName,
      projectImg,
      projectDesc,
      softwareStack,
      learnedInfo,
      github,
    });

    res.status(201).json({
      message: `${projectName} created.`,
      project: projectData,
    });
  } catch (error) {
    next(error);
  }
};

const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectId = req.params.id;
    const projectBody = req.body;
    const projectName = req.body.projectName;
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      projectBody
    );
    res
      .status(200)
      .json({ Message: `${projectName} updated.`, updatedProject });
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectId = req.params.id;
    await Project.findByIdAndRemove(projectId);
    res.status(200).json({ message: `ID: ${projectId} deleted.` });
  } catch (error) {
    next(error);
  }
};

export default {
  allProjects,
  singleProject,
  createProject,
  updateProject,
  deleteProject,
};
