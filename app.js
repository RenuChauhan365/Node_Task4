import express from 'express';
import mongoose from 'mongoose';
const app=express();

import userRoutes from './routes/userRoutes.js'
import friendRoutes from './routes/friendRoutes.js'
const port=8082
// connect to the database
const connectDB=async () => {
	try {
		const conn=await mongoose.connect('mongodb://127.0.0.1:27017/Mongodb_Task1')
		console.log(`connected to Mongodb database ${conn.connection.host}`)
	}
	catch(error) {
		console.log(`Error in  MongoDB ${error}`)
	}
}
connectDB();
app.use(express.json())

// api
app.use('/user',userRoutes);
app.use('/friend',friendRoutes);


app.listen(3000,() => {
	console.log(`Server is running on port ${port}`);
});


