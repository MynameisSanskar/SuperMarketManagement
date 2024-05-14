import express from 'express';
const app = express();
import userRoutes from './routes/user.js';
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors'
const PORT=8080;

app.use(cors())
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();

}
)

app.use("/api/user",userRoutes)

mongoose.connect("mongodb+srv://webgeniusai:erfgZ4woRw1838os@sanskar.7cbexxe.mongodb.net/")
.then(app.listen(PORT,()=>{
    console.log(`Listening to the Port ${PORT}`);
    console.log("Connect to DB");
}))
.catch((e)=>{
    console.log(e);
})


