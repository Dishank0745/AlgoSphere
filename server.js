const express = require('express');
const { dirname }  = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/public",express.static(__dirname + "/public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});