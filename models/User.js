// Creating  users schema
import mongoose from "mongoose";
const users= new mongoose.Schema({

	name: {
		type: String,
		required: true,
		max: 32
	},
	age: {
		type: Number,
		required: true,
	},
	phone_no: {
		type: String,
		required: true,
		validate: {
			validator: function(v) {
				return /^\d{10}$/.test(v);
			},
			message: 'Phone number must be a 10-digit numeric value.',
		},
	},

});

// Convert name to uppercase before saving
users.pre('save',function(next) {
	this.name=this.name.toUpperCase();
	next();
});

// Log a message after successfully saving a user document
users.post('save',function(doc) {
	console.log(`User saved: ${doc.name}`);
});



const User=mongoose.model('Users',users);

export default User;

