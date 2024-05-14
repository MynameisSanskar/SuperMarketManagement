import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true

    }
   
});
userschema.statics.login=async function(email, password){
    if(!email || !password){
        throw Error("Please enter All fields")
    }
    const user=await this.findOne({email});
    if(!user){
        throw new Error("User")}
        const match=await bcrypt.compare(password, user.password)

    if(match){
        return user;
    }else{
        throw new Error("Invalid password")
    }
}

userschema.statics.signup=async function(email,password,name,address){

    // validation
    if(!email || !password ||!name ||!address){
        throw Error("Please enter All fields")
    }
    if(!validator.isEmail(email)){
        throw Error("Please enter valid email")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Please enter strong password")
    }
    const exists=await this.findOne({email})
    if(exists){
        throw new Error("User already exists");
    }
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    const user=await this.create({email,password:hash,name,address});
    return user;
}

const User=mongoose.model("auth",userschema);
export default User;