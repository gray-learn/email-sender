require("dotenv").config();
const express = require("express");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
app.use(express.json());

app.use("/emails", emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing purposes
