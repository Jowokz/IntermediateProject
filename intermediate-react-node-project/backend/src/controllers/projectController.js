import * as projectService from '../services/projectService.js';

export function getProjects(req, res, next) {
  try {
    const projects = projectService.getProjectsForUser(req.user.id);
    res.json(projects);
  } catch (error) {
    next(error);
  }
}

export function createProject(req, res, next) {
  try {
    const project = projectService.createProject(req.user.id, req.body);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
}

export function getTasksByProject(req, res, next) {
  try {
    const taskList = projectService.getTasksByProject(
      req.params.projectId,
      req.user.id
    );

    res.json(taskList);
  } catch (error) {
    next(error);
  }
}

export function createTask(req, res, next) {
  try {
    const task = projectService.createTask(
      req.params.projectId,
      req.user.id,
      req.body
    );

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}

export function updateTask(req, res, next) {
  try {
    const task = projectService.updateTask(
      req.params.projectId,
      req.params.taskId,
      req.user.id,
      req.body
    );

    res.json(task);
  } catch (error) {
    next(error);
  }
}

export function deleteTask(req, res, next) {
  try {
    const deletedTask = projectService.deleteTask(
      req.params.projectId,
      req.params.taskId,
      req.user.id
    );

    res.json(deletedTask);
  } catch (error) {
    next(error);
  }
}
