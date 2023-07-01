// import admin from "../models/admin.js";
import admin from "../models/admin.js";


export const registerController = async (req, res, next) => {

  try {
    const { name, email, password } = req.body;
  //validate
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required and greater than 6 character");
  }
  const exisitingUser = await admin.findOne({ email });
  if (exisitingUser) {
    next("Email Already Register Please Login");
  }
  const user = await admin.create({ name, email, password });
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

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    next("Please Provide All Fields");
  }
  //find user by email
  const user = await admin.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Useraname or password");
  }
  //compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid Useraname or password");
  }
  user.password = undefined; // undefined so that password is not received by frontend
//   const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login SUccessfully",
    user,
    // token,
  });
};


