import { Client } from "pg";
import  express  from "express";

const app=express();
const pgClient = new Client("postgresql://neondb_owner:DOL8hto1dAVc@ep-lingering-glade-a8ieblb5.eastus2.azure.neon.tech/neondb?sslmode=requirez");

pgClient.connect();

app.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;


    try{
        const insertQuery=`INSERT INTO users (username,email,password) VALUES ($s1,$s2,$s3);`
        const response = await pgClient.query(insertQuery,[username,email,password]);

        res.json({
            message:"signed successfully"
        })

    }catch(e){
        res.json({
            message:"ther is error while connecting to server"
        })
    }
})

app.listen(4000,()=>{
    console.log("connected over a database");
})






