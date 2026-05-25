import { v4 as uuid } from 'uuid';
import { projects, tasks } from '../data/store.js';
import { AppError } from '../utils/AppError.js';

export function getProjectsForUser(userId) {
  return projects.filter((project) => project.ownerId === userId);
}

export function createProject(userId, payload) {
  if (!payload.name) {
    throw new AppError('Project name is required', 400);
  }

  const newProject = {
    id: uuid(),
    name: payload.name,
    description: payload.description || '',
    ownerId: userId
  };

  projects.push(newProject);
  return newProject;
}

export function getProjectById(projectId, userId) {
  const project = projects.find(
    (item) => item.id === projectId && item.ownerId === userId
  );

  if (!project) {
    throw new AppError('Project not found', 404);
  }

  return project;
}

export function getTasksByProject(projectId, userId) {
  getProjectById(projectId, userId);
  return tasks.filter((task) => task.projectId === projectId);
}

export function createTask(projectId, userId, payload) {
  getProjectById(projectId, userId);

  if (!payload.title) {
    throw new AppError('Task title is required', 400);
  }

  const newTask = {
    id: uuid(),
    projectId,
    title: payload.title,
    description: payload.description || '',
    status: payload.status || 'todo',
    priority: payload.priority || 'medium'
  };

  tasks.push(newTask);
  return newTask;
}

export function updateTask(projectId, taskId, userId, payload) {
  getProjectById(projectId, userId);

  const task = tasks.find(
    (item) => item.id === taskId && item.projectId === projectId
  );

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  task.title = payload.title ?? task.title;
  task.description = payload.description ?? task.description;
  task.status = payload.status ?? task.status;
  task.priority = payload.priority ?? task.priority;

  return task;
}

export function deleteTask(projectId, taskId, userId) {
  getProjectById(projectId, userId);

  const index = tasks.findIndex(
    (item) => item.id === taskId && item.projectId === projectId
  );

  if (index === -1) {
    throw new AppError('Task not found', 404);
  }

  const deletedTask = tasks.splice(index, 1)[0];
  return deletedTask;
}
