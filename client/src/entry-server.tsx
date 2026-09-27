import { renderToString } from "react-dom/server";
import App from "./App";
export { allRoutes } from "./routes";
export { schemaFor } from "./lib/schema";

export function render(path: string) {
  return renderToString(<App ssrPath={path} />);
}
