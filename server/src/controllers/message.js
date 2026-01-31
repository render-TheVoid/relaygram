import User from "../models/user.js";
import Message from "../models/message.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const filteredUser = await User.find({ _id: { $ne: loggedInUser } }).select('-password');
        res.status(200).json(filteredUser);
    }
    catch (err) {
        console.error(`Error occured at message controller: ${err.message}`);
        res.status(500).json({ message: "Some error occured!" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userIdToChat } = req.params;
        const senderId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: senderId, receiverId: userIdToChat },
                { senderId: userIdToChat, receiverId: senderId }
            ]
        });

        res.status(200).json(messages);
    }
    catch (err) {
        console.err(`Some error occured at message controller: ${err.message}`);
        return res.status(500).json({ message: 'Some error occured at the server!' });
    }
}

export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if (image) {
            const uploadedImage = await cloudinary.uploader.upload(image);
            imageUrl = uploadedImage.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });

        await newMessage.save();
        res.status(200).json(newMessage);
    }
    catch (err) {
        console.error(`Some error occured at the send message part: ${err.message}`);
        res.status(500).json({ message: "Internal server error!" });
    }
}