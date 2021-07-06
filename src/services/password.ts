import { Password } from '../entities/password';
import { User } from '../entities/user';
import * as UserDataAccess from '../data-accesses/user';

export const createPassword = async (passwordData, id) => {
  try {
    const user:User = await UserDataAccess.getUserById(id);
    const password :Password = { user, ...passwordData };
    const createdPassword:Password = Password.create(password);
    await Password.save(createdPassword);
    //   await Password.save(password);
  } catch (e) {
    console.log(e);
  }
};
