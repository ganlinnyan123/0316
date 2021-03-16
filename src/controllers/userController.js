class UserController{
    getUser = (req,res)=>{
        res.status(200).json({message:'hi555'});
    }
}

export default new UserController();