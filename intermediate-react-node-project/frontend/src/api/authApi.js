import { apiRequest } from './apiClient.js';

export function loginUser(credentials) {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });
}

export function getCurrentUser() {
  return apiRequest('/auth/me');
}
