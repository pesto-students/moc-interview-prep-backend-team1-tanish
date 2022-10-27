import mongoose  from "mongoose";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_URL = "mongodb+srv://moc:moc@cluster0.vyopp.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async =>{
     mongoose.connect(MONGO_URL,connectionParams)
     .then(() =>{
        console.log('Connected to Database')
     })
     .catch((err) => {
        console.log(`Error in connecting to database. \n${err}`)
     })

}
export default connectDb;