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
    const passwords = await PasswordService.getPasswords(userId);
    res.status(200).json({ passwords });
  } catch (e) {
    next(e);
  }
};

export const editPassword = async (req, res, next) => {
  try {
    const { params: { passwordId }, body: { password, description } } = req;
    await PasswordService.editPassword(passwordId, password, description);
    res.status(200).json({ message: 'Password successfully edited' });
  } catch (e) {
    next(e);
  }
};

export const deletePassword = async (req, res, next) => {
  try {
    const { passwordId } = req.params;
    await PasswordService.deletePassword(passwordId);
    res.status(202).json({ message: 'Password successfully deleted' });
  } catch (e) {
    next(e);
  }
};
