import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controller/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();
//Create
router.post('/', verifyAdmin, createHotel);
// Update
router.put('/:id', verifyAdmin, updateHotel);
//Delete
router.delete('/:id', verifyAdmin, deleteHotel);

// Get hotel
router.get('/:id', getHotel);

// Get all hotels
router.get('/', getAllHotel);

export default router;
