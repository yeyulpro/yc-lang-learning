import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    profileImage: {
      type: String,
      default: "",
    },

    nativeLanguage: {
      type: String,
      enum: ["english", "korean", "french"],
      default: "english",
    },

    learningLanguages: {
      type: [String],
      enum: ["english", "korean", "french"],
      default: [],
    },

    dailyGoal: {
      type: Number,
      default: 5,
    },

    streak: {
      type: Number,
      default: 0,
    },

    totalExpressionsSaved: {
      type: Number,
      default: 0,
    },

    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
