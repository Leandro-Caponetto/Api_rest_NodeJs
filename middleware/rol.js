 
const { handleHttpError } = require("../utils/handleError");
const { userModel } = require("../models");

const checkRol = (rol) => async (req, res, next) => {
  try {
    const { user } = req;
    console.log({user})
    const rolesByUser = user.roles;

    next()
  } catch (error) {
    handleHttpError(req, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = checkRol;