import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { ReactLenis } from "lenis/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </StrictMode>
);