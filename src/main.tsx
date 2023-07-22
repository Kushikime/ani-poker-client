import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import "./shared/index.less";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
