import express from 'express';
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from '../controller/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();
//Create
router.post('/:hotelid', createRoom);
// Update
router.put('/:id', verifyAdmin, updateRoom);
router.put('/availability/:id', updateRoomAvailability);
//Delete
router.delete('/:roomid/:hotelid', verifyAdmin, deleteRoom);

// Get hotel
router.get('/:id', getRoom);

// Get all hotels
router.get('/', getAllRoom);

export default router;
