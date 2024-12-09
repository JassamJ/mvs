import mongoose from "mongoose";
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import {test} from "./Backend/controllers/Jugadores.controllers.js"

dotenv.config();
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log('funciona la base de datos')
})
.catch((error)=>{
    console.log('no funciona', error)
})

const app = express()
app.use(cors());
app.listen(4000, ()=>{
    console.log('se escucha la base de datos')
})

test()

    
