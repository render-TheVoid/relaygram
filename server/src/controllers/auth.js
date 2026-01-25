import { generateToken } from "../lib/utils.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required!"
            });
        }

        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "Email already exists!" });

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashPassword
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                email: newUser.email,
                fullName: newUser.fullName,
                profilePic: newUser.profilePic
            });
        }

    }
    catch (err) {
        console.log(`Auth error occured: ${err.message}`);
        res.status(500).json({ message: "Internal server error occured!" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required!"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message:
                    "Invalid credentials!"
            });
        }

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic
        })
    }
    catch (err) {
        console.log(`Auth error occured: ${err.message}`);
        return res.status(200).json({ message: "Auth error occured!" });
    }
}

export const logout = (req, res) => {

}