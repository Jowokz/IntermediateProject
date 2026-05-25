import { apiRequest } from './apiClient.js';

export function getProjects() {
  return apiRequest('/projects');
}

export function createProject(payload) {
  return apiRequest('/projects', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export function getProjectTasks(projectId) {
  return apiRequest(`/projects/${projectId}/tasks`);
}

export function createTask(projectId, payload) {
  return apiRequest(`/projects/${projectId}/tasks`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export function updateTask(projectId, taskId, payload) {
  return apiRequest(`/projects/${projectId}/tasks/${taskId}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  });
}

export function deleteTask(projectId, taskId) {
  return apiRequest(`/projects/${projectId}/tasks/${taskId}`, {
    method: 'DELETE'
  });
}
