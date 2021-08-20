import model from '../models'
import {Op} from 'sequelize'

const {Admin} = model



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
            const admin = await Admin.findOne({where: {email:email} });
            if(admin){
                return res.status(422).send({message:'admim with that email already exists'})
            }

            await Admin.create({ fullname, email, contact, username, password})

            return res.status(201).send({message:'Admin succesfully created'})
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:'something went wrong, please try again'})
        }
    }


    static async getAuth(req,res){
        return res.status(200).send({message:"get auth works"})
    }

    static async login(){
        try {
            
        } catch (err) {
            // console.log(error)
            return res.status(500).send({message:'something went wrong, please try again'})
        }
    }
}


export default  AdminController