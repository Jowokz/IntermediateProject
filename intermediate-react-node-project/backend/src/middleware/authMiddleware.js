import { AppError } from '../utils/AppError.js';

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AppError('Missing or invalid authorization header', 401);
  }

  const token = authHeader.split(' ')[1];

  if (token !== 'demo-token-u1') {
    throw new AppError('Invalid token', 401);
  }

  req.user = {
    id: 'u1',
    name: 'Jo Developer',
    email: 'jo@example.com'
  };

  next();
}
