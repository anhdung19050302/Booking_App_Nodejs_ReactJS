import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const saveRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id } });
        } catch (err) {
            next(err);
        }
        res.status(200).json(saveRoom);
    } catch (err) {
        next(err);
    }
};

export const updateRoom = async (req, res, next) => {
    const id = req.params.id;
    const bodyData = req.body;
    try {
        const updateRoom = await Room.findByIdAndUpdate(id, { $set: bodyData }, { new: true });
        res.status(200).json(updateRoom);
    } catch (err) {
        next(err);
    }
};
export const updateRoomAvailability = async (req, res, next) => {
    const id = req.params.id;
    const bodyData = req.body;
    try {
        await Room.updateOne(
            { 'roomNumbers._id': id },
            {
                $push: {
                    'roomNumbers.$.unavaibleDates': req.body.dates,
                },
            },
        );
        res.status(200).json('Room status has been success');
    } catch (err) {
        next(err);
    }
};

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const roomId = req.params.roomid;
    try {
        await Room.findByIdAndDelete(roomId);
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: roomId } });
        } catch (err) {
            next(err);
        }
        res.status(200).json('Delete scuccess');
    } catch (err) {
        next(err);
    }
};

export const getRoom = async (req, res, next) => {
    const id = req.params.id;
    try {
        const room = await Room.findById(id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
};

export const getAllRoom = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};
