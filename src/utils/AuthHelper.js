import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const saltRounds = 10


export default class Auth{
    static hashPassword(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
    }

    static checkPassword(inputPassword, dbPassword){
        return bcrypt.compareSync(inputPassword, dbPassword); 
    }

   
    static generateToken(data) {
        return jwt.sign(
          data, process.env.JWT_SECRET,
          { expiresIn: process.env.TOKEN_EXPIRE_TIME}
        );
      }
    
}