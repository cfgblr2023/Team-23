// import admin from "../models/admin.js";
import admin from "../models/admin.js";
import volunteerSchema from "../models/volunteerSchema.js";
import eventSchema from "../models/eventSchema.js";

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

export const getapprovedVoln = async (req,res)=>{

  try {
    const user = await volunteerSchema.find({ status: 'pending' });

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

export const approvedvol = async (req,res)=>{
  try {
    const pendingVolunteers = await volunteerSchema.find({ status: 'approved' });
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

export const createEventController = async (req, res) => {
  try {
      
      const {name,date,location,time,description,noofvolunteers} = req.body;
      if(!name)
      {
          res.send({error:'Name is required'})
      }
      if(!date)
      {
          res.send({error:'Date is required'})
      }
      if(!location)
      {
          res.send({error:'Location is required'})
      }
      if(!time)
      {
          res.send({error:'Time is required'})
      }
      if(!noofvolunteers)
      {
          res.send({error:'Number of volunteers is required'})
      }
      if(!description)
      {
          res.send({error:'Description is required'})
      }
      const event = await eventSchema.create( req.body);
      res.status(201).send({
          sucess: true,
          message: "Event Created Successfully",
          event: {
              name: event.name,
              date: event.date,
              location: event.location,
              time: event.time,
              description: event.description,
              noofvolunteers: event.noofvolunteers,
              status: event.status,
          },
      });
  } catch (error) {
      console.log(error)
      res.status(404).send({
          error
      })
  }
};






