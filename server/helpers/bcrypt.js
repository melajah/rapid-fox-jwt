const bcrypt = require("bcrypt");
const saltRounds = 8;

module.exports = {
  hashPassword(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  },
  checkPassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword); // true
  },
};
