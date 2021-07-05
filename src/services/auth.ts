import * as httpError from 'http-errors';
import { compare, genSalt, hash } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as UserDataAccess from '../data-accesses/user';
import { User } from '../entities/user';

export const loginUser = async (user) => {
  if (!user.email || !user.password) throw httpError(404, 'Email and password can\'t be null');

  const getUserByEmail:User = await UserDataAccess.getUserByEmail(user.email);
  if (!getUserByEmail) throw httpError(404, 'This user not exist');

  const validPassword = await compare(user.password, getUserByEmail.password);
  if (!validPassword) throw httpError(401, 'Wrong password');

  return jwt.sign({ id: getUserByEmail.id }, process.env.SECRET_JWT);
};

export const registerUser = async (user) => {
  const userWithEmail:User = await UserDataAccess.getUserByEmail(user.email);
  if (userWithEmail) throw httpError(409, 'This user already exist');

  const salt = await genSalt(10);
  const hashedPassword = await hash(user.password, salt);
  const userToBeRegistered :User = { ...user, password: hashedPassword };
  const registeredUser:User = User.create(userToBeRegistered);
  await registeredUser.save();
};
