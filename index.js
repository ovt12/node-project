import bodyParser from "body-parser";
import express from "express";
import router from "./routes/list.js";
import { sequelize } from "./db/index.js";

// Creating our express App
const app = express();
// Setting up a port
// One from env or port 3000
const port = process.env.PORT || 3000;

try {
  // try to connect to mysql database
  const result = await sequelize.sync();
  console.log(result);
} catch (error) {
  console.log(error);
}

app.use(bodyParser.json());

// NEED TO USE THE ROUTER
app.use("/list", router);

app.get("/", (req, res) => {
  res.send("Hello Oliver from GCP");
});

app.listen(port, () => {
  console.log("Server is running on port" + port);
});
