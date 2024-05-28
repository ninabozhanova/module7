import mongoose from "mongoose"

const EmploeesSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name required']},
    extension: {type: Number, required: [true, 'Extension required']}, 
    email: {type: String, required: [true, 'Email required']},
    title: {type: String, required: [true, 'Title required']},
    dateHired: {type: Date, default:  Date.now },
    currentlyEmployed: {type: Boolean, default: true},
})

// export default EmploeesSchema
export default mongoose.model("Employee", EmploeesSchema)