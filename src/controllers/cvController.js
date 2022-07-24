import Cv from '../models/cvSchema.js'

export const allCV = async (req,res,next)=>{
    try{
        let data = await Cv.find();
        res.status(200).json(data)
    }catch(error){
        next(error)
    }
    
}


export const createCV = async (req,res,next)=>{
    try{
        await Cv.create(req.body)
        res.status(200).json({
            message :"data create success"
        })
    }catch(error){
        next(error)
    }
    
}

export const deletCV = async (req,res,next)=>{
    try{
        await Cv.findByIdAndDelete(req.params.id)
        res.status(200).json({
           message :"data delete success"
       })
    }catch(error){
        next(error)
    }
     
}



export const updateCV = async (req,res,next)=>{
    try{
        await Cv.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            message :"data update success"
        })
    }catch(error){
        next(error)
    }
    
}
