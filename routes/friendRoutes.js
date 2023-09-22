
import express from 'express';
const router = express.Router();

import { addFriend } from '../controllers/friendController.js';


router.get('/', (req, res) => {
	res.send({ message: "friends routes" })
})

router.post('/add_friend', addFriend);

export default router;












