const mongoose = require("mongoose");
const modelSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  taskName: {
    type: String,
    required: [true, "Enter the name!"],
  },
  orderNumber: {
    type: Number,
    default: 0,
    required: [true, "Enter the number!"],
  },
  doneTime: Boolean,
});

module.exports = mongoose.model("usermodel", modelSchema);
