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
