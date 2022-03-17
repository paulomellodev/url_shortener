import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connection from "./database";
import urlRouter from "./routes/url.routes";

const app = express();
app.use(json());
app.use(cors());

app.use(urlRouter);

connection()
  .then(() => {
    console.log("Database connected!");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log({ msg: "App NOT running!", error: err });
  });

export default app;
