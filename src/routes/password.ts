import { createPassword } from '../controllers/password';

module.exports = ([
  {
    path: '/api/users/password',
    method: 'post',
    middlewares: ['token-checker'],
    handler: (req, res, next) => createPassword(req, res, next),
  },
]);
