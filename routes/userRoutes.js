
import express from 'express';
const router = express.Router();
import { getAllFriends, addUser } from '../controllers/userController.js';
router.post('/add_user', addUser);
router.get('/find_all_friends/:usersId'  , getAllFriends);
export default router;
