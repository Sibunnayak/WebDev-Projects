const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");
console.log(date);

const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
let day = "";
let items = [];
let workitems = [];
app.get("/", function (req, res) {
  //   today.setFullYear(98);
  //   console.log(today.getFullYear());//print 98 only
  //   today.setYear(97);
  //   console.log(today.toDateString());

  //   if (today.getDay() == 6 || today.getDay() == 0) {
  //     day = "weekend";
  //     // res.sendFile(__dirname + "/index.html");
  //   } else {
  //     day = "weeday";
  //     // res.send("it's not a Weekend!");
  //   }
  //   switch (today.getDay()) {
  //     case 0:
  //       day = "SunDay";
  //       break;
  //     case 0:
  //       day = "SunDay";
  //       break;
  //     case 1:
  //       day = "MonDay";
  //       break;
  //     case 2:
  //       day = "TuesDay";
  //       break;
  //     case 3:
  //       day = "WednesDay";
  //       break;
  //     case 4:
  //       day = "ThursDay";
  //       break;
  //     case 5:
  //       day = "FriDay";
  //       break;
  //     case 6:
  //       day = "SaturDay";
  //       break;
  //     default:
  //       break;
  //   }
  day = date.getdate;
  res.render("list", { listTitle: day, todo: items });
});

app.post("/", function (req, res) {
  console.log(req.body);
  let item = req.body.t1;
  //   console.log(item);
  if (req.body.list == "Work") {
    console.log("hii");
    workitems.push(item);
    res.redirect("/work");
  } else {
    console.log("bye");
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", todo: workitems });
});
// app.post("/work", function (req, res) {
//   let item = req.body.t1;
//   workitems.push(item);
//   res.redirect("/work");
// });
app.get("/about", function (req, res) {
  res.render("about");
});
app.listen(5000, function () {
  console.log("Server started on port 5000!!");
});
