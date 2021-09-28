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
      console.log(process.env.SECRET_KEY)
        return jwt.sign(
          data, process.env.SECRET_KEY,
          { expiresIn: process.env.TOKEN_EXPIRE_TIME}
        );
      }
    
}