const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    rollNumber: {
      type: String,
      required: true,
      unique: true
    },
    department: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true // adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model("Student", studentSchema);