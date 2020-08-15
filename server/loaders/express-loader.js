import express from "express";
import path from "path";

export const loadExpress = async () => {
	const pathToViews = path.join(process.cwd(), "server/views/index.html");
	const app = express();

	app.use("/api", require("@/routes/index"));
	app.use(express.static("build"));

	app.get("*", (req, res) => {
		res.sendFile(pathToViews);
	});

	return app;
};
