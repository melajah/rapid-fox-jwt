const jwt = require("jsonwebtoken");
const encode = jwt.sign(
  {
    id: 1,
    email: "dzakki@mail.com",
  },
  "jwt-scret" // env
);

console.log(encode, "<<< ini adalah encode");

const decode = jwt.verify(encode, "jwt-scret");

console.log(decode, "<<<<< ini adalah decode hasil dari variable encde");
