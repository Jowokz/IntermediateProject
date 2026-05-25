import * as authService from '../services/authService.js';

export function login(req, res, next) {
  try {
    const result = authService.login(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export function getMe(req, res, next) {
  try {
    const user = authService.getCurrentUser(req.user.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}
