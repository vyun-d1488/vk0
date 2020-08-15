import Nightmare from "nightmare";
import { setConfig } from "@/configs/default";

export const loadNightmareJS = (url) => {
	const nightmare = Nightmare({
		show: false,
	});
	nightmare.goto(url);

	setConfig("lib", nightmare);
};
