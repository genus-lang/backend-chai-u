import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler (async (req, res) => {
    //get user details from the frontend
    //validation  -not empty
    //checking if user already exists
    //checking for the images , check for avatar
    // upload them to cloudinary
    //create user object - create entery in db
    //remove password and refresh tocken field from the response
    //check for user creation
    //return response to frontend
});





export { registerUser };