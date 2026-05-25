import { users } from '../data/store.js';
import { AppError } from '../utils/AppError.js';

export function login({ email, password }) {
  if (!email || !password) {
    throw new AppError('Email and password are required', 400);
  }

  const user = users[0];

  return {
    user,
    token: 'demo-token-u1'
  };
}

export function getCurrentUser(userId) {
  const user = users.find((item) => item.id === userId);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  return user;
}
