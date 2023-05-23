import express from 'express';
import { createUser, deleteUser, getAllUser, getUser, updateUser } from '../controller/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send('Hello user, you are logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('Hello user, you are logged in and you can delete your account');
// });
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('Hello Admin, you are logged in and you can delete your account');
// });
//Create
// Update
router.put('/:id', verifyUser, updateUser);
//Delete
router.delete('/:id', deleteUser);

// Get hotel
router.get('/:id', verifyUser, getUser);

// Get all hotels
router.get('/', getAllUser);

export default router;
