import { loadExpress } from "./express-loader";
import { loadNightmareJS } from "./nightmarejs-loader";
import { configs } from "@/configs/default";

export const init = async () => {
	const PORT = configs.PORT;
	const URL = configs.URL;

	console.log("==> Nightmare.js initializing");
	loadNightmareJS(URL);
	console.log("==> Nightmare.js loaded");

	console.log("==> Express initializing");
	loadExpress();
	console.log("==> Express loaded");

	const app = await loadExpress();

	app.listen(PORT, () => {
		console.log(`==> Listening on port: ${PORT}`);
	});
};
