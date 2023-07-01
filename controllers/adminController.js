// import admin from "../models/admin.js";
import admin from "../models/admin.js";
import volunteerSchema from "../models/volunteerSchema.js";


export const registerController = async (req, res) => {

  try {
    const { name, email, password } = req.body;
  //validate
  if (!name) {
    res.send({error:'Name is required'});
  }
  if (!email) {
    res.send({error:'email is required'});
  }
  if (!password) {
    res.send({error:'password is required'});
  }
  const exisitingUser = await admin.findOne({ email });
  if (exisitingUser) {
    res.send({error:'user already registered here'});
  }
  const user = await admin.create(req.body);
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
    const user = await admin.findOne({email})
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

export const getallVoln = async (req,res)=>{

  try {
    const user = await volunteerSchema.find({});

    res.status(201).send({
      success:true,
      // user:{
      //   name: user.name,
      //   email: user.email,
      // phoneNumber: user.phoneNumber,
      // expertise:user.expertise
      // }
      user
    })
  } catch (error) {
    console.log(error)
    res.status(400).send({
      error
    })
  }
 

}

export const dashboard = async (req,res)=>{

  // try {
  //   const expert = ["teaching","organising","training","technical"];
  //   const expertData = [];
  //   // const organisation = new mongoose.Types.ObjectId(req.body.userId);
  //   const organisation = await volunteerSchema.find({}).select({expertise});
    
  //   //get single blood group
  //   await Promise.all(
  //     bloodGroups.map(async (bloodGroup) => {
  //       //COunt TOTAL IN
  //       const totalIn = await inventoryModel.aggregate([
  //         {
  //           $match: {
  //             expertise: teaching,
              
  //             organisation,
  //           },
  //         },
  //         {
  //           $group: {
  //             _id: null,
  //             total: { $sum: "$quantity" },
  //           },
  //         },
  //       ]);
  //       //COunt TOTAL OUT
  //       const totalOut = await inventoryModel.aggregate([
  //         {
  //           $match: {
  //             expertise: teaching,
              
  //             organisation,
  //           },
  //         },
  //         {
  //           $group: {
  //             _id: null,
  //             total: { $sum: "$quantity" },
  //           },
  //         },
  //       ]);
  //       //CALCULATE TOTAL
  //       const availabeBlood =
  //         (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

  //       //PUSH DATA
  //       bloodGroupData.push({
  //         bloodGroup,
  //         totalIn: totalIn[0]?.total || 0,
  //         totalOut: totalOut[0]?.total || 0,
  //         availabeBlood,
  //       });
  //     })
  //   );

  //   return res.status(200).send({
  //     success: true,
  //     message: "Blood Group Data Fetch Successfully",
  //     bloodGroupData,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).send({
  //     success: false,
  //     message: "Error In Bloodgroup Data Analytics API",
  //     error,
  //   });
  // }

  const expertiseCounts = await volunteerSchema.aggregate([
    { $unwind: '$expertise' },
    {
      $group: {
        _id: '$expertise',
        count: { $sum: 1 },
      },
    },
  ]);

  const locationCounts = await volunteerSchema.aggregate([
    { $group: { _id: '$location', count: { $sum: 1 } } },
  ]);

  const dashboardData = {
    expertise: expertiseCounts.reduce((data, expertise) => {
      data[expertise._id] = expertise.count;
      return data;
    }, {}),
    location: locationCounts.reduce((data, location) => {
      data[location._id] = location.count;
      return data;
    }, {}),

  };
  res.json(dashboardData);
} 

export const pendingApproval = async (req,res)=>{
  try {
    const pendingVolunteers = await volunteerSchema.find({ status: 'pending' });
    res.status(200).send(pendingVolunteers) 
    ;
  } catch (error) {
    throw new Error('Error fetching pending volunteers');  
  }

}
export const setApproval = async (req,res)=>{
  

  try {
    const {email} = req.body

    const user = await volunteerSchema.find({email})
      // console.log((user[0]._id).toString())
      // const x = "64a06069536948d90c0c8141";
      const x = user[0]._id.toString()
    const volunteer = await volunteerSchema.findByIdAndUpdate(
      x,
      { $set: { status: 'approved' } }
     
    );

    if (!volunteer) {
      throw new Error('Volunteer not found');
    }

    res.send(200).status({
      message:"Successfully Changed"
    })
  } catch (error) {
    throw new Error('Error changing volunteer status');
  }

}






