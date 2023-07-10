import bcrypt from 'bcrypt'


const generateSaltAndHash = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}


const compareHash = (password: string, hashedPassword: string) => {
    const compare = bcrypt.compareSync(password, hashedPassword)
    return compare
}


export { generateSaltAndHash, compareHash }