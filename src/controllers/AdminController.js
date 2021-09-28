
import AdminService from '../services/AdminService'
import AuthHelper from '../utils/AuthHelper'

const {hashPassword, checkPassword, generateToken} = AuthHelper
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
        try {
            return res.status(200).send({message:"get auth works"})
        } catch (err) {
            return res.status(500).send({message:'something went wrong, please try again'})
        }
    }


    static async login(req,res){
        console.log(process.env.SECRET_KEY)
        // return res.status(400).send({msg:'fgfgfg'})
        try {
            const admin = await findAdminByProperty({email:req.body.email})
            if(!admin){
                return res.status(404).send({message:'User not found'})
            }
            const verify = await checkPassword(req.body.password, admin.password)
            if(!verify) return res.status(404).send({message:'wrong email/password'})
            const payload = {
                id:admin.id,
                fullname:admin.fullname,
                username:admin.username,
                email:admin.email

            }
            const token = generateToken(payload)
            return res.status(200).send(token)
            

        } catch (err) {
            // console.log(error)
            return res.status(500).send({message:'something went wrong, please try again'})
        }
    }
}


export default  AdminController