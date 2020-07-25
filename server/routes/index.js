import express from "express";
import { run } from "../nightmare/parser";

const router = express.Router();

router.get("/get_img", (req, res) => {
      const nightmare = run();
      nightmare.then((result) => {
            console.log(result);
            let str_JSON = [];
            for (let i = 0; i < result.length; i++) {
                  str_JSON.push(
                        JSON.parse(
                              result[i].substring(
                                    result[i].indexOf("{"),
                                    result[i].lastIndexOf("}") + 1
                              )
                        ).temp
                  );
            }
            res.send(str_JSON);
      });
});

module.exports = router;
