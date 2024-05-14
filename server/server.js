require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/routes");
const connectDB = require("./utils/db");
const app = express();

const corsOptions = {
  origin: [
    "https://satyajeet-das.vercel.app",
    "https://satyajeet-das.vercel.app/contact",
    "https://satyajeet-das.vercel.app/",
    "https://satyajeet-das.vercel.app/#home",
    "https://satyajeet-das.vercel.app/#skills",
    "https://satyajeet-das.vercel.app/#projects",
  ],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", router);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  });
});
