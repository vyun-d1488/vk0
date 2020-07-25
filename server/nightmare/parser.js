import { nightmare } from "./nightmare";

export function run() {
      nightmare.scrollTo(999999999999999999999999999, 0).evaluate(function () {
            const elements = document.getElementsByClassName(
                  "page_post_thumb_wrap"
            );
            let attributes = [];
            for (let i = 0; i < elements.length; i++) {
                  attributes.push(elements[i].getAttribute("onclick"));
            }
            return attributes;
      });

      return nightmare;
}
