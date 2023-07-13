import { RequestResponse } from "../types/aliases";

import mongoose from "mongoose";

//MongoDB Schema Import
import { Project } from "../models/projects.model";

const allProjects: RequestResponse = async (req, res, next) => {
  try {
    const findProjects = await Project.find();
    res.status(200).json({
      message: "Success.",
      count: findProjects.length,
      projects: findProjects,
    });
  } catch (error) {
    next(error);
  }
};

const singleProject: RequestResponse = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    if (mongoose.Types.ObjectId.isValid(projectId)) {
      //Validating BSON ObjectID
      const findProject = await Project.findOne({ _id: projectId });
      res.status(200).json({
        message: "Success",
        details: findProject,
      });
    } else {
      res.status(404).json({ ERROR: `Mongoose ID: ${projectId} not found.` });
    }
  } catch (error) {
    next(error);
  }
};

const createProject: RequestResponse = async (req, res, next) => {
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
    await projectData.save();
    res.status(201).json({
      message: `${projectName} created.`,
      project: projectData,
    });
  } catch (error) {
    next(error);
  }
};

const updateProject: RequestResponse = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const projectBody = req.body;
    const projectName = req.body.projectName;
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      projectBody
    );

    await updatedProject?.save()
    res
      .status(200)
      .json({ message: `${projectName} updated.` });
  } catch (error) {
    next(error);
  }
};

const deleteProject: RequestResponse = async (req, res, next) => {
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
