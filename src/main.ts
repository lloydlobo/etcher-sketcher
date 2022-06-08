import "./style.css";

import { sleep } from "./helper";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>etcher sketcher</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

function main() {
  sleep(1000).then(() => {
    // app.innerHTML = "Hello World!";
    console.log("Hello World!");
  });
}

main();
