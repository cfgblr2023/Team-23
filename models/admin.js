import mongoose from "mongoose";
import validator from "validator";
// import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
//schema
const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Require"],
    },
    email: {
      type: String,
      required: [true, " Email is Require"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "password is require"],
    },
    location: {
      type: String,
      default: "Bangalore",
    },
    notification :{
      type:Array
    }
  },
  { timestamps: true }
);
// middelwares

//execute this before saving any data to the database
// userSchema.pre("save", async function () {
//   if (!this.isModified) return;
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// //compare password
adminSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await userPassword==this.password;
  return isMatch;
};

// //JSON WEBTOKEN
// userSchema.methods.createJWT = function () {
//   return JWT.sign({ userId: this._id }, process.env.JWT_SECRET, { //stored in userId name
//     expiresIn: "1d", //time period for expiry of token is one day here after that user has to log in again
//   });
// };
export default mongoose.model("admin", adminSchema);
