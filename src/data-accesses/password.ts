import { User } from '../entities/user';
import { Password } from '../entities/password';
// TODO Continue there
export const getUserPasswords = async (userId) => {
  const user = await User.findOne({ where: { id: userId }, relations: ['passwords'] });
  return user.passwords;
};

export const getPassword = async (passwordId) => {
  return await Password.findOne({ where: { id: passwordId }, relations: ['user'] });
};

export const savePassword = async (password) => { await Password.save(password); };
