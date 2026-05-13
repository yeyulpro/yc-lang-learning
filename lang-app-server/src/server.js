
import app from './app.js'
import dotenv from 'dotenv'
import dbConnection from './config/db.js'

dotenv.config();
const PORT = process.env.PORT || 5000;





    
dbConnection().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})}).catch((error) => {
    console.log(error)
    process.exit(1)
})