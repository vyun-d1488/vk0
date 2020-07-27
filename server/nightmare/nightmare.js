import Nightmare from "nightmare";

const nightmare = Nightmare({
      show: false,
});

nightmare.goto("https://vk.com/eternalclassic");
export { nightmare };
