import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required:[true,"username is required"], 
      unique:true,
      lowercase:true,
      trim:true,
      index:true
    },

    email: {
      type: String,
      required: [true,"email is required"], 
      unique:true,
      lowercase:true,
      trim:true,
    },

    fullname:{
        type:String,
        required:[true,"fullname is required"], 
        trim:true,
        index:true
        },

     avatar:{
     type:String, //cloudinary url
     required:[true,"avatar is required"],  
     },
     
     coverImage:{
    type:String //cloudinary url   
     },
    watchHistory:[
        {
         type:mongoose.Schema.Types.ObjectId,
         ref:"Video"   
        }
    ],
    
    password:{
      type:String,
      required:[true,"Password is required"]   
    },
    refreshToken:{
    type:String 
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
