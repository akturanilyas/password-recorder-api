import { User } from '../entities/user';

export const getUserByEmail = async (email) => { return await User.findOne({ where: { email } }); };
