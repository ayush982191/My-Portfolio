const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/ayushportfoliodatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("Connection succces")
}).catch((e)=>{
    console.log(e)
})