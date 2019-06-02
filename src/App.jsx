import React, { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState({
    message: "Nice!"
  });
  useEffect(() => {
    const listener = message => setState(message);
    chrome.runtime.onMessage.addListener(listener);
    return () => chrome.runtime.onMessage.removeListener(listener);
  }, []);
  return <h1>{state.message}</h1>;
};

export default App;
