import mongoose from 'mongoose';

const factSchema = new mongoose.Schema({
    fact: {
        type: String,
        required: true,
    },
});

const Fact = mongoose.model("Fact", factSchema);
export default Fact;
