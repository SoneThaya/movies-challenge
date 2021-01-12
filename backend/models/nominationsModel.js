import mongoose from "mongoose";

const nominationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    nominations: [
      {
        Title: { type: String, required: true },
        Year: { type: String, required: true },
        Poster: { type: String, required: true },
        imdbID: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Nomination = mongoose.model("Nomination", nominationSchema);

export default Nomination;
