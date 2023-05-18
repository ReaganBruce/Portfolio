import mongoose, { Schema, Document } from 'mongoose'


export interface IAttempt extends Document {
    failedUser?: string,
    createdAt: Date
}

const AttemptSchema: Schema = new Schema({
    failedUser: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



export default mongoose.model<IAttempt>("Attempt", AttemptSchema)