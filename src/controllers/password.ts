export const createPassword = async (req, res, next) => {
  try {
    const { body: password } = res.body;
    await PasswordService.createPassword(password);
  } catch (e) {
    next(e);
  }
};
