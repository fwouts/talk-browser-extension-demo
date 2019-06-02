import realChrome from "./real-chrome";

let fakeChrome: Chrome;

export const chrome = getChromeApi();

function getChromeApi() {
  if (process.env.NODE_ENV === "development" || !realChrome) {
    fakeChrome = fakeChrome || buildFakeChrome();
    return fakeChrome;
  } else {
    return realChrome;
  }
}

function buildFakeChrome(): Chrome {
  let listeners: MessageListener[] = [];
  return {
    runtime: {
      onMessage: {
        addListener(listener) {
          listeners.push(listener);
        },
        removeListener(listener) {
          listeners = listeners.filter(l => l !== listener);
        }
      },
      sendMessage(message) {
        for (const listener of listeners) {
          listener(message);
        }
      }
    }
  };
}

export interface Chrome {
  runtime: {
    onMessage: {
      addListener(listener: MessageListener): void;
      removeListener(listener: MessageListener): void;
    };
    sendMessage(message: any): void;
  };
}

export type MessageListener = (message: any) => void;
