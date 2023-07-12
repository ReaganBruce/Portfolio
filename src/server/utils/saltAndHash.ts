import bcrypt from "bcrypt";
import { Passwords } from "../types/aliases";

const generateSaltAndHash: Passwords = (password) => {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const compareHash: Passwords = (password, hashedPassword) => {
  if (typeof hashedPassword === 'string') {
     return bcrypt.compareSync(password, hashedPassword); 
    } 
    
};



export { generateSaltAndHash, compareHash };
