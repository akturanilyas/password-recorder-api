import { createPassword, deletePassword, getUserPasswords } from '../controllers/password';

module.exports = ([
  {
    path: '/api/users/:userId/password',
    method: 'get',
    middlewares: ['token-checker'],
    handler: (req, res, next) => getUserPasswords(req, res, next),
  },
  {
    path: '/api/users/:userId/password',
    method: 'post',
    middlewares: ['token-checker'],
    handler: (req, res, next) => createPassword(req, res, next),
  },
  {
    path: '/api/users/:userId/password/:passwordId',
    method: 'delete',
    middlewares: ['token-checker'],
    handler: (req, res, next) => deletePassword(req, res, next),
  },

]);
