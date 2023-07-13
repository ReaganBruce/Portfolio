import mongoose, { Schema, Document } from 'mongoose'


export interface IAttempt extends Document {
    failedLogin?: string,
    createdAt: Date
}

const AttemptSchema: Schema = new Schema({
    failedLogin: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



export default mongoose.model<IAttempt>("Attempt", AttemptSchema)