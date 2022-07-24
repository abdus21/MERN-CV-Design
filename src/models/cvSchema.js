import mongoose from "mongoose";

const cvSchema = mongoose.Schema({
    name :{
        type : String,
    },
    email :{
        type : String,
    },
    phone :{
        type : String,
    },
    photo :{
        type : String,
    },
    location :{
        type : String,
    },
    skill :{
        type : String,
    },
    company :{
        type : String,
    },
    degree :{
        type : String,
    },
    versity :{
        type : String,
    },
    language :{
        type : String,
    }
},{
    timestamps : true,
    versionKey:false
})


export default mongoose.model('CV',cvSchema)