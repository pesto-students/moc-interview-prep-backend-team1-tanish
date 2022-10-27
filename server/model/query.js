import mongoose from "mongoose";

var UserQuerySchema = new mongoose.Schema({
        name:{ type: String},
        email: { type: String, required: true },
        contact: { type: String},
        message: { type: String },
        status: { type: String },
        comments: [{ type: String }],
        title: {type:String}
})

const QueryDb = mongoose.model('UserQuery', UserQuerySchema) 
export default QueryDb;