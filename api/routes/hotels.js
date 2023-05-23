import express from 'express';
import {
    createHotel,
    deleteHotel,
    getAllHotel,
    getHotel,
    updateHotel,
    countByCity,
    countByType,
    getHotelRooms,
} from '../controller/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();
//Create
router.post('/', createHotel);
// Update
router.put('/:id', verifyAdmin, updateHotel);
//Delete
router.delete('/:id', verifyAdmin, deleteHotel);

// Get hotel
router.get('/find/:id', getHotel);

// Get all hotels
router.get('/', getAllHotel);

router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);

export default router;
