const { default: mongoose } = require('mongoose');
const myDataSchema = new mongoose.Schema
({ 
Message:
{
    required: true,
    type: String
},
name:
{
    required: true,
    type: String
},
age: 
{
    required: true,
    type: Number
}
});
module.exports = mongoose.model('Data', myDataSchema);    