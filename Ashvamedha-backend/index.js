const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
const dotenv = require("dotenv");
const adminRouter = require("./routers/adminRouter");
const collegeRouter = require("./routers/collegeRouter");
const matchRouter = require("./routers/matchRouter");
const userRouter = require("./routers/userRouter");
const uploadRouter = require("./routers/uploadRouter");
const sportsRouter = require("./routers/sportsRouter");
const cronRouter = require("./routers/cronRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cron = require("node-cron");
const http = require("http")
const https = require("https")

dotenv.config("./.env");
// middlewares
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
dbConnect();
if (process.env.NODE_ENV == "productions") {
  app.use((req, res, next) => {
    const allowedOrigins = ["http://localhost:3000", "https://ashvamedha.in", "https://k8j373m0-3000.inc1.devtunnels.ms"];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header("Access-Control-Allow-Methods", " POST, PUT, GET, DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    return next();
  });
}
app.use("/user", userRouter);
app.use("/upload", uploadRouter);
app.use("/admin", adminRouter);
app.use("/college", collegeRouter);
app.use("/match", matchRouter);
app.use("/sport", sportsRouter);
app.use("/cron", cronRouter);

const backendUrl = "http://localhost:8000/cron/testcron";
cron.schedule("*/15 * * * * *", function () {
  console.log("Restarting server");

  http
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Restarted");;
        
      } else {
        console.error(`failed to restart with status code: ${res.statusCode}`);
      }
    })
    .on("error", (err) => {
      console.error("Error ", err.message);
    });
});

const port = process.env.PORT || 4003;
app.listen(port, () => {
  console.log(`server has started at the port ${port}`);
});
