import mongoose from "mongoose";

const dailyNoteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    expressionIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Expression",
      },
    ],

    summary: {
      type: String,
      default: "",
    },

    totalExpressions: {
      type: Number,
      default: 0,
    },

    tags: {
      type: [String],
      default: [],
    },

    exportedToPDF: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const DailyNote = mongoose.model("DailyNote", dailyNoteSchema);

export default DailyNote;