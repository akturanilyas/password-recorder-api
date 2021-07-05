import * as AuthService from '../services/auth';

export const registerUser = async (req, res, next) => {
  try {
    const { body: user } = req;
    await AuthService.registerUser(user);
    res.status(201).send('User successfully saved');
  } catch (e) {
    // TODO ADD middlewares
    console.log(e);
  }
};
