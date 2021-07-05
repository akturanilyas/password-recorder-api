// TODO ADD this functions
module.exports = ([
  {
    path: '/api/user/',
    method: 'post',
    handler: (req, res, next) => getUser(req, res, next),
  },
  {
    path: '/api/auth/login',
    method: 'post',
    handler: (req, res, next) => getAllUsers(req, res, next),
  },
]);
