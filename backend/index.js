const express = require('express'); 
const rootRouter = require('./routes');
const app = express(); 
const port = 8010; 

app.use(express.json())

app.use("/api/v1/", rootRouter); 
app.listen(port, ()=>{
    console.log(`App started at port number ${port}`)
})