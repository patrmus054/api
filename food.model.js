var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var foodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    calories: {
      type: Number,
      required: true
    },
    protein: {
      type: Number,
      required: true
    },
    fat: {
      type: Number,
      required: true
    },
    carbohydrates: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

exports.Food = mongoose.model("food", foodSchema);
