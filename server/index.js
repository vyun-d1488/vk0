import express from "express";
import "dotenv/config";

const PORT = process.env.PORT;
const app = express();

app.use("/api", require("./routes/index"));
app.use(express.static("build"));

app.get("*", (req, res) => {
      res.sendFile(__dirname + "/views/index.html");
});

app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
});
