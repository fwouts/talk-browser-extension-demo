import React, { useState, useEffect } from "react";
import { chrome } from "./chrome";
import { hot } from "react-hot-loader/root";

const App = () => {
  const [state, setState] = useState({
    message: "Nice!"
  });
  useEffect(() => {
    const listener = (message: { message: string }) => setState(message);
    chrome.runtime.onMessage.addListener(listener);
    return () => chrome.runtime.onMessage.removeListener(listener);
  }, []);
  return <h1>{state.message}</h1>;
};

export default hot(App);
