import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import router from './src/routers/cvRouter.js';
import mongoDBConnaction from './src/configs/db.js';
import errorHandler from './src/middlewares/errorHandler.js';


const app = express();
dotenv.config()

 // security Middlewares lib import
 import xss from 'xss-clean';
 import hpp from 'hpp';
 import mongoSanitize from 'express-mongo-sanitize';
 import helmet from 'helmet';




// midlleware impliment
app.use(xss());
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
app.use(mongoSanitize());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors())



// api route
app.use('/api/cv',router);
app.use(errorHandler)


app.listen(process.env.SERVER_PORT || 5000,()=>{
    // mongo DB connaction
    mongoDBConnaction()
    console.log(`server is running`.bgGreen);
})