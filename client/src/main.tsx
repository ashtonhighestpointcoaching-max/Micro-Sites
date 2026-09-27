import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
// Prerendered HTML is present on first load -> hydrate. Otherwise mount.
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);
