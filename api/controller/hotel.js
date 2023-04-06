import Hotel from '../models/Hotel.js';

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (err) {
        next(err);
    }
};

export const updateHotel = async (req, res, next) => {
    const id = req.params.id;
    const bodyData = req.body;
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(id, { $set: bodyData }, { new: true });
        res.status(200).json(updateHotel);
    } catch (err) {
        next(err);
    }
};

export const deleteHotel = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Hotel.findByIdAndDelete(id);
        res.status(200).json('Delete scuccess');
    } catch (err) {
        next(err);
    }
};

export const getHotel = async (req, res, next) => {
    const id = req.params.id;
    try {
        const hotel = await Hotel.findById(id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};

export const getAllHotel = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};
