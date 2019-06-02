import nicejob from "nicejob";
import { chrome } from "./chrome";

setInterval(() => {
  chrome.runtime.sendMessage({
    message: nicejob()
  });
}, 1000);
