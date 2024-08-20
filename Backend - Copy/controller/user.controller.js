// 1. Importing the User Model
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

// 2. Signup Function Declaration
export const signup = async (req, res) => {

    // 3. Handling User Registration
    try {
        const { fullname, email, password } = req.body;

        // 4. Checking if the User Already Exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // bcryptjs hide & strong password
        const hashPassword = await bcryptjs.hash(password, 10)

        // 5. Creating a New User
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({ message: "User created successfuly" });

        // 6. Error Handling
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({ message: "Internal server error" });
    }
}