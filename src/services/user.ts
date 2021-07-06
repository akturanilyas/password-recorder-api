import * as httpError from 'http-errors';
import * as UserDataAccess from '../data-accesses/user';
import { User } from '../entities/user';

export const getUser = async (userId) => {
  try {
    const queryUser:User = await UserDataAccess.getUserById(userId);
    // Deleted password from response data
    const { password, ...user } = queryUser;
    return user;
  } catch (e) {
    throw httpError(404, 'User not found');
  }
};

export const getAllUsers = async () => {
  const queryUsers:User[] = await UserDataAccess.getAllUsers();
  const users = [];
  // Deleted each users password from response data
  queryUsers.forEach((queryUser) => {
    const { password, ...user } = queryUser;
    users.push(user);
  });
  return users;
};
