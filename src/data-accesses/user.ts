import { User } from '../entities/user';

export const getUserByEmail = async (email) => { return await User.findOne({ where: { email } }); };

export const getUserById = async (id) => { return await User.findOne({ where: { id }, relations: ['passwords'] }); };

export const getAllUsers = async () => { return await User.find({ relations: ['passwords'] }); };
