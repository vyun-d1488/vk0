import "dotenv/config";
import Nightmare from "nightmare";

export const configs = {
	PORT: process.env.PORT,
	URL: "https://vk.com/eternalclassic",
	lib: Nightmare,
};

export function setConfig(key, value) {
	if (key && value) {
		console.log(`> Configuration update at ${key} by: ${typeof configs[key]} --> ${typeof value}`);
		configs[key] = value;
	}
}
