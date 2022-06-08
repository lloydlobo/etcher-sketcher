// region:      --- imports ---
import "./style.css";

import { sleep } from "./app";

// endregion:   --- imports ---

// region:      --- app ---

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1 class="heading">etcher sketcher</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

// endregion:   --- app ---

// region:      --- main ---
export function main() {
  sleep(1000).then(() => {
    // app.innerHTML = "Hello World!";
    console.log("Hello World!");
  });
}

main();

// endregion:   --- main ---
