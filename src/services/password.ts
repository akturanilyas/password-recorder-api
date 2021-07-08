import * as httpError from 'http-errors';
import { Password } from '../entities/password';
import { User } from '../entities/user';
import * as PasswordDataAccess from '../data-accesses/password';
import * as UserDataAccess from '../data-accesses/user';

export const createPassword = async (passwordData, id) => {
  try {
    const user:User = await UserDataAccess.getUserById(id);
    const password :Password = { user, ...passwordData };
    const createdPassword:Password = Password.create(password);
    await Password.save(createdPassword);
    // TODO ADD: Handler
  } catch (e) {
    console.log(e);
  }
};

export const getPasswords = async (userId) => {
  const password:Password = await PasswordDataAccess.getUserPasswords(userId);
  if (!password) throw httpError(404, 'User doesn\'t exist');

  return password;
};

export const deletePassword = async (passwordId) => {
  const password:Password = await PasswordDataAccess.getPassword(passwordId);
  await password.remove();
};
