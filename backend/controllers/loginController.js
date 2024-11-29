import User from "../models/User.js";

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    console.log("Login attempt:", req.body);

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password are required." });
    }

    try {
        // Find user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Compare the entered password with the stored plain-text password
        if (user.password !== password) {
            return res.status(401).json({ success: false, message: "Invalid password." });
        }

        // If authentication succeeds
        res.status(200).json({ success: true, message: "Login successful.", data: { id: user._id, username: user.username } });
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).json({ success: false, message: "Server error during login." });
    }
};
