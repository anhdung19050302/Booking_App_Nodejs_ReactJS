import User from '../models/User.js';

export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);

    try {
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const bodyData = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, { $set: bodyData }, { new: true });
        res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json('Delete scuccess');
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};
