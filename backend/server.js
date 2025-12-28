import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import rootDir from "./utils/path.js";
import MySQLConnect from "express-mysql-session";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import timelessRoutes from "./routes/timeless.js";
import userRoutes from "./routes/user.js";

import path from "path";
import multer from "multer";
const app = express();

const con = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "timeless",
};
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const Timeless = MySQLConnect(session);

const sessionTimeless = new Timeless(con);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    name: "session_id_name",
    store: sessionTimeless,
  })
);

sessionTimeless
  .onReady()
  .then(() => {
  
    console.log("Timeless ready");
  })
  .catch((error) => {
   
    console.error(error);
  });

app.set("view engine", "ejs");

app.set("views", "views");

app.use(cors());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).fields([
    { name: "imageGold", maxCount: 1 },
    { name: "imageSilver", maxCount: 1 },
    { name: "imageRoseGold", maxCount: 1 },
  ])
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.json());
app.use("/images", express.static(path.join(rootDir, "images")));

app.use(
  "/products/images",
  express.static(path.join(rootDir, "images"))
);

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/", timelessRoutes);
app.use("/user", userRoutes);



app.use((req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "THIS PAGE IS NOT FOUND",
    isAuthenticated: req.session.isLoggedIn,
    role: req.session.role,
  });
});
app.listen(8000, "localhost", () =>
  console.log("server listening on port 8000")
);