
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopDB');

const { Schema } = mongoose;

const blogSchema = new Schema({ 
    _id: Number, 
    name: String, 
    price: Number,
    comments : [{
        body : String,
        date : Date
    }],
    hidden : Boolean
 });

 const blog = mongoose.model("Blog" , blogSchema);

 const data = new blog({
    name : "first",
    price : 10,
    comments : []
 })