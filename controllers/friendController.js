import Friends  from '../models/Friend.js';
import User from '../models/User.js';

export const  addFriend = async (req,res) => {
	try {

		const {user_id,friend_id}=req.body;
		const friend_details=await User.findById(friend_id);
		const users_details=await User.findById(user_id);

		const friend=new Friends({user_id: friend_details,friend_id: users_details});
		await friend.save();
		console.log(friend)

		await friend.save();
		res.status(200).send({
			success: true,
			message: 'Friend added successfully',
			friend
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










