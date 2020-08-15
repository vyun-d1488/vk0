import { Router } from "express";
import { VKparser } from "@/service/vkparser";

const router = Router();
const parser = new VKparser();

router.get("/get_img", (req, res) => {
	parser.pictrureAttributes((pictures) => {
		res.send(pictures);
	});
});

module.exports = router;
