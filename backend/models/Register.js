// This is the data model (Schema) for a Register information.
// By using this code, we’re creating a new Mongoose model for the register entity
// with the following properties included:
// 1: firstName
// 2: lastName
// 3: username
// 4: password

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Login = new Schema({
    firstName:
    {
        type: String
    },
    lastName:
    {
        type: String
    },
    username:
    {
        type: String
    },
    password:
    {
        type: String
    }
});

// The model is created by defining a new Schema first and then creating
// the model by using the mongoose.model method.
export default mongoose.model('Register', Register)
