import mongoose from "mongoose";

const nominationSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Year: { type: String, required: true },
  Poster: { type: String, required: true },
}, {
    timestamps: true
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    nominations: [nominationSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
