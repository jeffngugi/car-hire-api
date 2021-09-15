
import AdminService from '../services/AdminService'
import Bcrypt from '../utils/Bcrypt'

const {hashPassword, checkPassword} = Bcrypt
const {findAdminByProperty, createAdmin} = AdminService

class AdminController{

    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} return an object containing an admin token 
     */
    static async createAdmin(req, res){
        try {
            // return res.status(200).json(req.body)
            const {fullname, email, contact, username, password} = req.body
            const admin = await findAdminByProperty({email:email})
            if(admin){
                return res.status(422).send({message:'admim with that email already exists'})
            }
            const newAdmin = {
                fullname,
                email,
                contact,
                username,
                password:hashPassword(password)
            }

            const createdAdmin = await createAdmin(newAdmin)

            return res.status(200).json(createdAdmin)
            /**
             * To do
             * create a method to send email verification method
             */
            
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:'something went wrong, please try again'})
        }
    }


    static async getAuth(req,res){
        return res.status(200).send({message:"get auth works"})
    }


    static async login(req,res){
        try {
            const admin = await findAdminByProperty({email:req.body.email})
            if(!admin){
                return res.status(404).send({message:'User not found'})
            }
            const verify = await checkPassword(req.body.password, admin.password)
            if(!verify) return res.status(404).send({message:'wrong email/password'})
            

        } catch (err) {
            // console.log(error)
            return res.status(500).send({message:'something went wrong, please try again'})
        }
    }
}


export default  AdminController