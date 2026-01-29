import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler (async (req, res) => {
    res.status(201).json({
        message: "Postman connected successfully to register user endpoint",
    });
});





export { registerUser };