import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    name:{type:String,required:true}
});

const StudentDb = mongoose.model('Student',StudentSchema);
export default StudentDb;