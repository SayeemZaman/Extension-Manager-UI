import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
  </StrictMode>
);
