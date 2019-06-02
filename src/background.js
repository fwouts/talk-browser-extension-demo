import nicejob from "nicejob";

setInterval(() => {
  chrome.runtime.sendMessage({
    message: nicejob()
  });
}, 1000);
