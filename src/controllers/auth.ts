import * as AuthService from '../services/auth';

export const loginUser = async (req, res, next) => {
  try {
    const { body: user } = req;
    const token = await AuthService.loginUser(user);
    res.header('authorization', token).status(200).send({ token });
  } catch (e) {
    next(e);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const { body: user } = req;
    await AuthService.registerUser(user);
    res.status(201).send({ message: 'User successfully saved' });
  } catch (e) {
    next(e);
  }
};
