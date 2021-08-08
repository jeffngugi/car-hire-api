
class AdminController{
    static async createAdmin(req, res){
        return res.status(200).send({message:"create admin working"})
    }


    static async getAuth(req,res){
        return res.status(200).send({message:"get auth works"})
    }
}


export default  AdminController