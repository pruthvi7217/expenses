import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const PORT = 4000;
const app = express();
app.use(cors);
mongoose.set('strictQuery', true);

await mongoose.connect("mongodb+srv://pruthvi7217:Pruthvi16@project.ypng1qi.mongodb.net/?retryWrites=true&w=majority")
console.log('MongoDB Connection is successful');

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.post('/transactions', (res, req) => {
    res.send('connection at server after installing nodemon');
})

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:4000');
})

