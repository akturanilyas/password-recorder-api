// TODO ADD this functions
import { getAllUsers, getUser } from '../controllers/user';

module.exports = ([
  {
    path: '/api/users/:userId',
    method: 'get',
    middlewares: ['token-checker'],
    handler: (req, res, next) => getUser(req, res, next),
  },
  {
    path: '/api/users/',
    method: 'get',
    middlewares: ['token-checker'],
    handler: (req, res, next) => getAllUsers(req, res, next),
  },
]);
