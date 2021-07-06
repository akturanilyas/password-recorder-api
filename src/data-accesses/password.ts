import { Password } from '../entities/password';
import { User } from '../entities/user';
// TODO Continue there
export const getUserPasswords = async (userId) => { return await Password.find({ where: { }, relations: ['user'] }); };
