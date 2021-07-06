import * as UserService from '../services/user';

export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await UserService.getUser(userId);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};
