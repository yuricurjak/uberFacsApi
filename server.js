const server = require('express')();
const routes = require('./src/Routes/routes');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
require('dotenv').config();


mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

server.use(routes);



server.listen(port, () =>{
    console.log(`server running on port ${port}`);
});
