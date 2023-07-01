// import volunteerSchema from "../models/volunteerSchema.js";
import eventSchema from "../models/eventSchema.js";
import volunteerSchema from "../models/volunteerSchema.js";


export const registerController = async (req, res) => {

  try {
    const { name, email, password } = req.body;
  //validate
  if (!name) {
    res.send({error:'Name is required'})
  }
  if (!email) {
    res.send({error:'email is required'})
  }
  if (!password) {
    res.send({error:'password is required'})
  }
  const exisitingUser = await volunteerSchema.findOne({ email });
  if (exisitingUser) {
    res.send({error:'email is already required'})
  }
  const user = await volunteerSchema.create( req.body);
  //token
//   const token = user.createJWT();
  res.status(201).send({
    sucess: true,
    message: "User Created Successfully",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    // token,
  });
  } catch (error) {
    console.log(error)

    res.status(404).send({
      error
    })
  }
  
};

export const loginController = async (req, res) => {
    try {
        
        const {email,password} = req.body;
        
        //validation
        if(!email || !password){
    
            res.status(404).send({
                success:false,
            message:'Invalid email or password',
            })
        }
        
        //check user
        const user = await volunteerSchema.findOne({email})
        // console.log(user)
        if(!user){
            return res.status(404).send({
                success : false,
                message : 'Email is not registered',
            })
        }
    
        
    
        // const match = await comparePassword(password,user.password)
        const match = password==user.password
        
        // console.log(match)
        if(!match){
    
            return res.status(200).send({
                success:false,
                message:'Invalid Password',
            })
        }
    
        //Create token after all conditions are checked 
        // const token = await JWT.sign({_id: user._id},process.env.JWT_SECRET,{
        //     expiresIn : "7d",
        // });
        res.status(200).send({
    
            success:true,
            message:"login successfully",
            user : {
                name : user.name, 
                email : user.email,
                phone: user.phone,
                address : user.address
            },
            // token,
        });
         
    } catch (error) {
        console.log(error)
        res.send({
            success:false,
            message:'Login did not happen',
            error
        })
    }
  
};

export const getallevents = async (req,res) =>{

    const events = eventSchema.find({status:"Progress"});

    res.status(200).send({
        events
    })
}

export const applyforevent = async(req,res) =>{
    try {
        const {name,volEmail } = req.body;
    // const event = eventSchema.find({name});
        const x = await eventSchema.find({name:name})
        const y = x[0]._id.toString()
    const event = await eventSchema.findByIdAndUpdate(
        y,
        { $push: { registeredvol: volEmail } },
        { new: true }
      );
        res.status(200).send({
            message:"Event data is updated",
            
        })
    } catch (error) {
        console.log(error)
    }
    
    // console.log(event)
    // const x = event[0]._id.toString()

    







}



