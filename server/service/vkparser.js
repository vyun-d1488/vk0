import { configs } from "@/configs/default";
import { validateURL } from "@/utils/validate-url";

export class VKparser {
	nightmare = configs.lib;

	async scrollDown() {
		return await new Promise((resolve, reject) => {
			this.nightmare.scrollTo(999999999999999999999999999, 0).evaluate(function () {
				const elements = document.getElementsByClassName("page_post_thumb_wrap");
				let attributes = [];
				for (let i = 0; i < elements.length; i++) {
					attributes.push(elements[i].getAttribute("onclick"));
				}
				return attributes;
			});
			resolve(this.nightmare);
		});
	}

	async pictrureAttributes(callback) {
		const pictrures = await this.scrollDown()
			.then((result) => {
				let extractedResults = [];
				for (let i = 0; i < result.length; i++) {
					const firstIndex = result[i].indexOf("{");
					const lastIndex = result[i].lastIndexOf("}") + 1;
					extractedResults.push(JSON.parse(result[i].substring(firstIndex, lastIndex)).temp);
				}
				return extractedResults;
			})
			.then((extractedResults) => {
				extractedResults.reduce((accum, current, i) => {
					current ? (extractedResults[i] = current.x) : extractedResults.pop(i);
				});
				return extractedResults;
			});

		return callback(pictrures);
	}
}
