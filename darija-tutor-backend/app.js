const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const lessonRoutes = require("./routes/lessons");
const exerciseRoutes = require("./routes/exercises");

const app = express();

// Connect to the database
mongoose.connect("mongodb://localhost:27017/darija-tutor", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Use routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/lessons", lessonRoutes);
app.use("/exercises", exerciseRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
