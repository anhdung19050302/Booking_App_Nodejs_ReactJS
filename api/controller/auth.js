import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
        const saltRounds = 10;
        const myPlaintextPassword = req.body.password;
        const passwordHask = bcrypt.hashSync(myPlaintextPassword, saltRounds);
        const newUser = new User({
            ...req.body,
            password: passwordHask,
        });
        await newUser.save();
        res.status(200).send('User has been create');
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, 'User not found'));

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return next(createError(404, 'Wrong Password or Username'));
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie('access_token', token, {
            httpOnly: true,
        });
        res.status(200).json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
        next(err);
    }
};
