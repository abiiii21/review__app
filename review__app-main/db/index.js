const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017')
.then(() =>{
    console.log('db is connected!')
})
.catch((ex) =>{
    console.log('db connection failed: ', ex)
})