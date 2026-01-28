import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    userename: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avater: {
        type: String, //cloudnary url
        required: true,

    },
    coverImage: {
        type: String, //cloudnary url
    },
    warchHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }],
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
    },
    refreshToken: {
        type: String,
    },

},
    { timestamps: true }
);



userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hash(this.password, 10);
    next();

})

userSchema.methods.ispasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}


userSchema.methods.generateAccessToken = function () {
    jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
        fullName: this.fullName,
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    )
}
userSchema.methods.generateRefreshToken = function () {
    jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
        fullName: this.fullName,
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
    )
 }



export const User = mongoose.model("User", userSchema);
