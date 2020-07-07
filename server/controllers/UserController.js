const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");
class UserController {
  static async register(req, res) {
    const form = {
      email: req.body.email,
      password: req.body.password,
    };
    try {
      const dataUser = await User.create(form);
      return res.status(201).json(dataUser);
    } catch (e) {
      // statements
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }

  static async login(req, res) {
    /*
      client: email dan password.
      
      1. ngcek ke database, apakah email nya ada apa g ?
      2. apakah data nya ada ?
        - jika tidak, maka akan mengirim pesan "username or password incorrect"
      3. jika ada, maka kita akan melakukan pengecekan password
        - password dari database, dan juga password dari client
      4. password valid ? 
        - jika sama, saya akan mengirim token
        - jika tidak sama, maka akan mengirim pesan "username or password incorrect"
    */
    const email = req.body.email;
    try {
      const dataUser = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!dataUser) {
        return res.status(400).json({
          message: "email or password incorrect",
        });
      } else {
        const password = req.body.password;
        if (checkPassword(password, dataUser.password)) {
          const token = jwt.sign(
            {
              id: dataUser.id,
              email: dataUser.email,
            },
            "jwtScret"
          );
          return res.status(200).json({
            access_token: token,
          });
        } else {
          return res.status(400).json({
            message: "email or password incorrect",
          });
        }
      }
    } catch (e) {
      // statements
      console.log(e);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
}

module.exports = UserController;
