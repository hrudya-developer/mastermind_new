const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




exports.userLogin = async (req,res)=>{
    try {

        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false, 
                message: "Please provide email and password"
            })
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                success:false,
                message: "user not found with this email"
            })
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if(!isMatched){
            return res.status(401).json({
                success:false,
                message: "Invalid Credentials"
            })
        }

        const options = {
            userId: user._id,
            userRole: user.role
        }

        const token = jwt.sign(options, process.env.JWT_SECRET_KEY,{expiresIn: '1d'});
        console.log(token);
        res.status(200)
.cookie("token", token, {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000
})
.json({
  success: true,
  message: "User logged in successfully",
  token
});
        


        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "An error occurred while logging in the user",
            error: error.message
        })
        
    }


   


}

exports.userRegister = async (req, res) => {
  try {

    const { name, mobile, email, password } = req.body;

    // 1️⃣ Validate fields
    if (!name || !mobile || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // 2️⃣ Check if email already exists
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    // 3️⃣ Check if mobile already exists
    const existingMobile = await User.findOne({ mobile });

    if (existingMobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number already registered"
      });
    }

    // 4️⃣ Create new user
    const user = await User.create({
      name,
      mobile,
      email,
      password
    });

    // 5️⃣ Send response
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};