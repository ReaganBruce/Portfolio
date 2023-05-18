import mongoose, { Schema, Document } from 'mongoose'


export interface IAdmin extends Document {
    userName: string,
    password: string
}


const AdminSchema: Schema = new Schema({
userName: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
}
})



export default mongoose.model<IAdmin>("Admin", AdminSchema)