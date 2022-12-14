import  mongoose from "mongoose";

const InterviewerSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password:{ type: String,required: true  },
        contact: { type: String },
        designation: { type: String },
        experience: { type: Number },
        company: { type: String },
        skills: [{ type: String }],
        image: { type: String },
        about: { type: String },
        topics: [{ type: String }],
        rating: { type: Number },
        onboarded: { type: Boolean },
        interviewCount: { type: Number },
        analytics: {
            totalInterviews: { type: Number },
            totalEarnings: { type: Number },
            totalStudentsMentored: { type: Number },
            noOfDays: { type: Number },
            earnings: { type: Object },
            topicData: { type: Object }
        },
        feedback: [{type:Object}]
    }
) 

const InterviewerDb = mongoose.model('Interviewer', InterviewerSchema) 
export default InterviewerDb;