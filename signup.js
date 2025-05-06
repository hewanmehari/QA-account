const signup = (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required.');
    }
    return { success: true, message: 'Successful signup.' };
  };
  module.exports = {signup };
  