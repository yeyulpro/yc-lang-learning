import mongoose from "mongoose";
const { Schema } = mongoose;

const expressionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    originalText: {
      type: String,
      required: true,
      trim: true,
    },

    targetLanguage: {
      type: String,
      required: true,
      enum: ["English", "Korean", "French"],
    },

    explainLanguage: {
      type: String,
      required: true,
      enum: ["English", "Korean", "French"],
    },

    inputType: {
      type: String,
      enum: ["text", "voice"],
      default: "text",
    },

    naturalMeaning: String,
    definition: String,
    context: String,

    formality: {
      type: String,
      enum: ["casual", "neutral", "formal"],
      default: "neutral",
    },

    politeness: String,
    emotion: String,

    registers: {
      type: [String],
      enum: [
        "slang",
        "idiom",
        "business",
        "academic",
        "internet",
        "formal",
        "casual",
        "literary",
        "legal",
        "technical",
        "sarcastic",
        "romantic",
        "humorous",
      ],
      default: [],
    },

    romanization: String,

    commonMistakes: [String],
    similarExpressions: [String],
    oppositeExpressions: [String],

    examples: [
      {
        sentence: String,
        translation: String,
        situation: String,
      },
    ],

    savedDate: {
      type: String,
      required: true,
      index: true,
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },

    userNote: String,
  },
  { timestamps: true },
);

const Expression = mongoose.model("Expression", expressionSchema);
export default Expression;
