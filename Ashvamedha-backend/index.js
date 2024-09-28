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
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config("./.env");
// middlewares
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
dbConnect();
if (process.env.NODE_ENV == "productions") {
  app.use((req, res, next) => {
    const allowedOrigins = ["http://localhost:3000", "https://ashvamedha.in"];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header("Access-Control-Allow-Methods", " POST, PUT, GET, OPTIONS");
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
const port = process.env.PORT || 4003;
app.listen(port, () => {
  console.log(`server has started at the port ${port}`);
});
