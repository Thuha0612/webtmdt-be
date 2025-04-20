import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){
    // const url = 'mongodb://localhost:27017/shop'
    // const url = 'mongodb+srv://CaoKhaHieu:<CaoKhaHieu>@cluster0.r9hva.mongodb.net/shop?retryWrites=true&w=majority'
    // const url = 'mongodb+srv://CaoKhaHieu:CaoKhaHieu@cluster0.5sfoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    
   const url = 'mongodb+srv://phamthuha06122003:thuha0612@cluster0.ccdi8cl.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
    
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;