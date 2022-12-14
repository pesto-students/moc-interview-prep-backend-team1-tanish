import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email:{ type: String, required: true, unique: true },
        role: { type: String, required: true },
        googleObj: {type:Object}
})

const UserDb = mongoose.model('User', userSchema) 
export default UserDb;