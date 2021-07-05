module.exports = ([
  {
    path: '/api/user/',
    method: 'post',
    handler: (req, res, next) => registerUser(req, res, next),
  },
  {
    path: '/api/auth/login',
    method: 'post',
    handler: (req, res, next) => loginUser(req, res, next),
  },
]);
