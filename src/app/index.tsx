import { createRoot } from "react-dom/client";

import { AppProvider } from "./providers";

createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider/>
);
