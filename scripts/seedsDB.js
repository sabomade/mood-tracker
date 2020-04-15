const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MoodTracker");

const demoStudents = [
  {
    name: "student0",
    attendance: [
      {
        date: Date.now(),
        present: true,
      },
    ],
    mood: [
      {
        date: Date.now(),
        feel: "happy",
      },
    ],
  },
  {
    name: "student1",
    attendance: [
      {
        date: Date.now(),
        present: true,
      },
    ],
    mood: [
      {
        date: Date.now(),
        feel: "happy",
      },
    ],
  },
  {
    name: "student2",
    attendance: [
      {
        date: Date.now(),
        present: true,
      },
    ],
    mood: [
      {
        date: Date.now(),
        feel: "neutral",
      },
    ],
  },
  {
    name: "student3",
    attendance: [
      {
        date: Date.now(),
        present: true,
      },
    ],
    mood: [
      {
        date: Date.now(),
        feel: "unhappy",
      },
    ],
  },
  {
    name: "student4",
    attendance: [
      {
        date: Date.now(),
        present: true,
      },
    ],
    mood: [
      {
        date: Date.now(),
        feel: "unhappy",
      },
    ],
  },
  {
    name: "student5",
    attendance: [
      {
        date: Date.now(),
        present: true,
      },
    ],
    mood: [
      {
        date: Date.now(),
        feel: "happy",
      },
    ],
  },
];

db.Demo.remove({})
  .then(() => db.Demo.collection.insertMany(demoStudents))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
