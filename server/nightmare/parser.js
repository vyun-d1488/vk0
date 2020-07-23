import Nightmare from "nightmare";

const nightmare = Nightmare({
      show: false,
});

nightmare
      .goto("https://vk.com/radicalmemers")
      .wait(2000)
      .scrollTo(999999999999999999999999999, 0)
      .wait(2000)
      .scrollTo(999999999999999999999999999, 0)
      .wait(2000)
      .evaluate(function () {
            const elements = document.getElementsByClassName(
                  "page_post_thumb_wrap"
            );
            let attributes = [];
            for (let i = 0; i < elements.length; i++) {
                  attributes.push(elements[i].getAttribute("onclick"));
            }
            return attributes;
      })
      .end();

export default nightmare;
