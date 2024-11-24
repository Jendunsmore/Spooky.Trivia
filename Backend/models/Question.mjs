// Question Schema

import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: {type: String, required: true},
    options: {type: [{type: String, required: true}]},
    answer: {type: String, required: true},
});

questionSchema.index({question: 1});

export default mongoose.model('Question', questionSchema);
