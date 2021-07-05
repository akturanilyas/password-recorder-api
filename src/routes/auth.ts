import { registerUser } from '../controllers/auth';

module.exports = ([
  {
    path: '/api/user/register',
    method: 'post',
    handler: (req, res, next) => registerUser(req, res, next),
  },
]);
