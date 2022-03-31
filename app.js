const express = require("express");
const app = express();
const cors = require("cors");
const compression = require("compression");
const { sequelize } = require("./models");
//const { User } = require("./models");
const Router = require("./routes");

sequelize
  .authenticate()
  .then(async () => {
    console.log("연결");
    await sequelize.sync({ force: false });
  })
  .catch((err) => {
    console.log("db" + err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use("/", Router.UserRoute);
app.use("/", Router.kakaoRoute);

app.listen(8001, () => {
  console.log("실행");
});
