const mongoose = require("mongoose");

let url = "mongodb://localhost:27017/Pokemon";

mongoose.connect(url, (err) => {
  if (err) {
    console.log(err, "connect error");
  } else {
    console.log("connect success");
  }
});
