import Nightmare from "nightmare";

const nightmare = Nightmare({
      show: false,
});

nightmare.goto("https://vk.com/radicalmemers");
export { nightmare };
