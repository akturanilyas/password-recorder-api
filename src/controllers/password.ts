import { Password } from '../entities/password';
import * as PasswordService from '../services/password';

export const createPassword = async (req, res, next) => {
  try {
    const { body: password } = req;
    const { userId: id } = req.params;
    await PasswordService.createPassword(password, id);
    res.status(201).json({ status: 201, message: 'Password created successfully' });
  } catch (e) {
    next(e);
  }
};
export const getUserPasswords = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const passwords: Password[] = await PasswordService.getUserPasswords(userId);
    res.status(200).json({ passwords });
  } catch (e) {
    next(e);
  }
};
