// region:      --- imports ---
import "./style.css";

import { sleep } from "./app";

// endregion:   --- imports ---

// region:      --- app ---
const app = document.querySelector<HTMLDivElement>("#app")!;
const heading1 = `<h1 class="heading">etcher sketcher</h1>`;
const htmlBtnGetInspired = `<button id="btnGetInspired">get inspired</button>`;
app.innerHTML = `
${heading1}
${htmlBtnGetInspired}
`;

// endregion:   --- app ---

// region:      --- main ---
export function main() {
  sleep(1000).then(() => {
    console.clear();
    console.log("Gloria In Excelsis Deo!");
  });
}

main();

// endregion:   --- main ---

// region:      --- style ---

const styleAddClassBtn = ["shrink-border", "material-bubble"];

// endregion:   --- style ---
// region:      --- buttons ---

const btnGetInspired = document.getElementById(
  "btnGetInspired"
)! as HTMLButtonElement;
console.dir(btnGetInspired.classList);
btnGetInspired.classList.add(...styleAddClassBtn);
// endregion:   --- buttons ---

// region:      --- events ---
btnGetInspired.addEventListener("click", () => {
  console.log("get inspired");
});
// endregion:   --- events ---
