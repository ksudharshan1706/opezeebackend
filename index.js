const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const appRoutes = require("./routes/application.js");
dotenv.config();
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `(config\/db.js) connected to MongoDB database & host is : ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(`Error in db.js file: ${error}`);
  }
};
app.use(express.json());
app.use(cors());

app.use("/api/application", appRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  connectDB();
  console.log(`server running on ${PORT}`);
});
