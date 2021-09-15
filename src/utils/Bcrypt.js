import bcrypt from 'bcrypt'
const saltRounds = 10

export default class Bcrypt{
    static hashPassword(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
    }

    static checkPassword(inputPassword, dbPassword){
        return bcrypt.compareSync(inputPassword, dbPassword); 
    }
}