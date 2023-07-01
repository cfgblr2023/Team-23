import mongoose from "mongoose";
// import validator from "validator";
// import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
//schema
const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Require"],
    },
    email: {
      type: String,
      required: [true, " Email is Require"],
      unique: true,

    },
    password: {
      type: String,
      required: [true, "password is require"],
    },
    phoneNumber:{
        type:String,
        required: [true, "phone number  is require"],
    },
   
      expertise:{
        type:Array
      },
      reason :{

        type:String
      }
    // expertise1: {
    //   type: String,
      
    // },
    // expertise2: {
    //     type: String,
        
    //   },
    //   expertise3: {
    //     type: String,
        
    //   },
    //   expertise4: {
    //     type: String,
        
    //   },
    

  },
  { timestamps: true }
);

volunteerSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  };

export default mongoose.model("volunteer", volunteerSchema);
