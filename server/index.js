import express from "express";
import nightmare from "./nightmare/parser";
import "dotenv/config";

nightmare.then((result) => {
      console.log("Done!");
      let str_JSON = [];
      for (let i = 0; i < result.length; i++) {
            for (let k = 0; k < result[i].length; k++) {
                  if (result[i][k] === "{") {
                        str_JSON.push(result[i].substring(k, result[i].length));
                  }
            }
      }
      console.log(str_JSON);
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
