import model from '../models'
import {Op} from 'sequelize'
const {Admin} = model

export default class AdminService{
    /**
     * @method create admin
     * 
     */

     static async findAdminByProperty(property){
         return Admin.findOne({where: property})
     }

     static async createAdmin(body){
        return Admin.create(body)
     }
}