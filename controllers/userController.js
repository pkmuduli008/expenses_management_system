const userModel=('../models/userModel')

//login callback
const loginController=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await userModel.findOne({email,password})

        if(!user){
            return res.status(404).send('User not found')
        }
        res.status(200).json({
            success:true,
            user
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }
}
//register callback
const registerController=async (req,res)=>{
    console.log('tesing...')
    console.log(req.body)
    
    try {
        const newUser=new userModel({
            "name":"pabitra",
            "email":"pabitra@gmail.com",
            "password":"123456"
        });
        // console.log(req.body)
        await newUser.save();
        res.status(200).json({
            success:true,
            newUser
        });
       
        
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }

}

module.exports={loginController,registerController}