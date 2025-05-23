import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import emailRoutes from "./routers/emailRouters.js";
import dotenv from "dotenv";



dotenv.config();
const app = express();

app.use(cors());


app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api", emailRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
