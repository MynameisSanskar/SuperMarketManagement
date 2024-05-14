import express from 'express';
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';

const createToken=(_id)=>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}
const loginUser = async(req, res) => {
    console.log("3")
     const {email,password} =req.body;
     console.log(email,password);
    try {
        console.log("3")
        const user= await User.login(email,password)
        
        const token=createToken(user._id)
        console.log(token);
        res.status(200).json({email,token})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

    
}

const signUser = async(req, res) => {
    const {email,password,name,address} =req.body;
    try {
        const user= await User.signup(email,password,name,address)

        // create a token for the user
        const token=createToken(user._id)
        console.log(token);
        res.status(200).json({email,token})

          console.log("token created");
    } catch (error) {
        res.status(400).json({error: error.message})
    }
// res.json({mssg:"sign routes"})
}


export {loginUser, signUser} ;