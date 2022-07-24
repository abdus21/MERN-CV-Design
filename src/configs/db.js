import mongoose from "mongoose";

const mongoDBConnaction = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_STRING);
         console.log(`mongo DB connaction successful HOST : ${mongoose.connection.host}`.bgGreen);
    }catch(error){
        console.log(`${error}`.bgRed);
    }
}

export default mongoDBConnaction