import { BadRequest, Unauthorized } from '@curveball/http-errors';
import { compare, genSalt, hash } from 'bcrypt';
import * as UserDataAccess from '../data-accesses/user';
import { User } from '../entities/user';

export const registerUser = async (user) => {
  const userWithEmail:User = await UserDataAccess.getUserByEmail(user.email);
  if (userWithEmail) throw new BadRequest('This e-mail already used');

  const salt = await genSalt(10);
  const hashedPassword = await hash(user.password, salt);
  const userToBeRegistered :User = { ...user, password: hashedPassword };
  const registeredUser:User = User.create(userToBeRegistered);
  await registeredUser.save();
};
