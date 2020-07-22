import express from "express";
import "dotenv/config";

const Nightmare = require("nightmare");
const nightmare = Nightmare({
      show: false,
});

nightmare
      .goto("https://vk.com/eternalclassic")
      .wait(2000)

      .wait(2000)
      .scrollTo(999999999999999999999999999, 0)
      .wait(5000)
      .evaluate(function () {
            const page_post_thumb_wrap = document.getElementsByClassName(
                  "page_post_thumb_wrap"
            );
            return document
                  .getElementsByClassName("page_post_thumb_wrap")[0]
                  .getAttribute("onclick");
      })
      .end()
      .then(function (result) {
            console.log(result);
      });
const PORT = process.env.PORT;
const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
      res.sendFile(__dirname + "/views/index.html");
});

app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
});
