import config from "../configs";
import jwt from "jsonwebtoken";
import { Admin } from "../models/authMod";
import { generateSaltAndHash } from "../utils/saltAndHash";
import { RequestResponse } from "../types/aliases";



const register: RequestResponse = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const encodedPassword = generateSaltAndHash(password);

    const createAdmin = await Admin.create({
      username,
      password: encodedPassword,
    });

    await createAdmin.save();
    res.status(201).json({ message: "Account created!" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const login: RequestResponse = async (req, res, next) => {
  try {
    const token = jwt.sign({ username: req.body.username }, String(config.jwt.token), { expiresIn: "1hr" }, );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default { register, login };
