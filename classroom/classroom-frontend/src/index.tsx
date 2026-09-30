import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

window.onerror = (msg, src, line, col, err) => {
  document.body.innerHTML = `<pre style="color:red">${msg}\n${err?.stack}</pre>`;
};

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
