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
export const getUserPasswords = async (userId) => {
  try {
    const password: Password[] = await PasswordDataAccess.getUserPasswords(userId);
    return password;
    // TODO ADD: Handler
  } catch (e) { console.log(e); }
};
