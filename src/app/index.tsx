import { createRoot } from "react-dom/client";

import { AppProvider } from "./providers";

import "../shared/index.less";

createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider/>
);
