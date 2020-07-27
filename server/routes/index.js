import express from "express";
import { run } from "../nightmare/parser";

const router = express.Router();

router.get("/get_img", (req, res) => {
      const nightmare = run();
      nightmare.then((result) => {
            let str_JSON = [];
            for (let i = 0; i < result.length; i++) {
                  try {
                        const firstIndex = result[i].indexOf("{");
                        const lastIndex = result[i].lastIndexOf("}") + 1;

                        str_JSON.push(
                              JSON.parse(
                                    result[i].substring(firstIndex, lastIndex)
                              ).temp.x
                        );
                  } catch (e) {
                        continue;
                  }
            }
            res.send(str_JSON);
            res.end();
      });
});

module.exports = router;
