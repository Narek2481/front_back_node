import express from "express";
const app = express();

app.use(express.static("public"));
app.get("/",(req,res)=>{
    req.redirect("/index.html")
});
app.get("/bye",(req,res)=>{
    res.send({
        name:"Narek"
    });
});

app.post("/hi",(req,res)=>{
    let data = "";
    req.on("data", (into)=>{
        data+= into;
    });
    req.on("end",()=>{
        let obj = JSON.parse(data);
        console.log(obj.name);
        res.send("good");
    })
    
})

app.listen(3001);
