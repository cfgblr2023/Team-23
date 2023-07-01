import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(            
    {
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
            unique: true,
        },
        location: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        description: {
            type: String,           
        },
        noofvolunteers: {       
            type: String,
            required: true,
        },
        status: {       
            type: String,
            default: "Progress",
        },
        registeredvol:{
            type:Array
            
        }
    }
);

export default mongoose.model("event", eventSchema);