import User from '../models/User.js'
import Friends from '../models/Friend.js';


export const addUser=async (req,res) => {
	try {
		console.log(req.body);
		const {name,age,phone_no}=req.body;
		const users=new User({name,age,phone_no});
		console.log(users)
		await users.save();

		res.status(200).send({
			success: true,
			message: 'User added successfully',
			users
		})
	}
	catch(error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: 'Error while adding friend',
			error
		})
	}
};

export const getAllFriends=async (req,res) => {
	try {
		const usersId=req.params.usersId;
		const user=await User.findById(usersId);
		console.log(user)

		if(!user) {
			return res.status(400).json({message: 'User not found'});
		}
		const friends=await Friends.find({user_id: usersId}).populate('friend_id','name age');
		res.status(200).json({user,friends: friends[0].friend_id});
	} catch(error) {
		console.error(error);
		res.status(500).json({message: 'Internal Server Error'});
	}
};













