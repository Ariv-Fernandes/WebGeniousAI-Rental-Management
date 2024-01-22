const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)
 
    res.status(200).json({userType: user.userType,email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {userType,email, password} = req.body

  try {
    const user = await User.signup(userType,email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({userType,email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updateProfile = async(req,res)=>{
 const id= req.user._id
  const user= await User.findOneAndUpdate({_id:id},{...req.body})
  if (!user) {
    return res.status(400).json({error: 'No such user'})
  }
  res.status(200).json(user)

}
const getProfile=async(req,res)=>{
  const id= req.user._id;
  const user=await User.findOne({_id:id})
  if (!user) {
    return res.status(400).json({error: 'No such user'})
  }
  res.status(200).json(user)
}


module.exports = { signupUser, loginUser,updateProfile ,getProfile}