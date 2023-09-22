
 import mongoose  from 'mongoose';
const friends=new mongoose.Schema({

	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users'
		//required: true,

	},
	friend_id: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users'
		//required: true,
	}],
});


 const Friends=mongoose.model('Friends',friends);
 export default Friends;




