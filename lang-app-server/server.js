import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import dbConnection from './config/db.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

    
dbConnection().then(() => {
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})}).catch((error) => {
    console.log(error)
    process.exit(1)
})