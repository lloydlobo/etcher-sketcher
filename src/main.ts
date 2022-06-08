// region:      --- imports ---
import './style.css';

import { sleep } from './app';
// import { createButtonInspired } from './createButtonInspired';

// endregion:   --- imports ---

// region:      --- app ---
const app = document.querySelector<HTMLDivElement>('#app')!;
const heading1 = `<h1 class="heading">etcher sketcher</h1>`;
// const htmlBtnGetInspired = `<button id="btnGetInspired">get inspired</button>`;
app.innerHTML = `
${heading1}
`;
// ${htmlBtnGetInspired}

// endregion:   --- app ---

// region:      --- style ---

export const styleAddClassBtn = ['shrink-border', 'material-bubble'];

// endregion:   --- style ---

// region:      --- buttons ---
// const btnGetInspired = createButtonInspired();

// endregion:   --- buttons ---
// region:      --- helper functions ---
// endregion:   --- helper functions ---
// region:      --- events ---
function createButtonSketching() {
    const btn = document.createElement('button') as HTMLButtonElement;
    btn.innerHTML = 'start sketching';
    btn.classList.add(...styleAddClassBtn);
    app.appendChild(btn);
    return btn;
}

// region:      --- main ---
export function main() {
    sleep(1000).then(() => {
        createButtonSketching();
        // console.clear()
        // console.log('Gloria In Excelsis Deo!')
    });
}

main();

// endregion:   --- main ---
