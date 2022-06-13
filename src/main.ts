/* eslint-disable no-param-reassign */

/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-undef */
// cspell:ignore btns
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

const btnsSize = document.querySelectorAll( '#btnsSize') as NodeListOf<HTMLButtonElement>; // prettier-ignore
const btnsMode = document.querySelectorAll('#btnsMode') as NodeListOf<HTMLButtonElement>; // prettier-ignore

let presentMode = '';

function createGrid(size = 32 * 44, classCSS = 'grid-medium-default') {
    const containerGame = document.getElementById(
        'containerGrid',
    ) as HTMLDivElement;

    containerGame.innerHTML = '';

    containerGame?.classList.remove(
        `grid-small`,
        `grid-medium-default`,
        `grid-big`,
    );
}

function generateGrid(size = 32 * 44, cssClass = 'grid-medium-default') {
    const containerGame = document.getElementById(
        'containerGrid',
    ) as HTMLDivElement;

    containerGame.innerHTML = '';

    containerGame.classList.remove(
        'grid-small',
        'grid-medium-default',
        'grid-big',
    );
    containerGame.classList.add(cssClass);

    for (let i = 0; i < size; i += 1) {
        const div = document.createElement('div');
        containerGame.appendChild(div);
    }
}
console.dir(btnsSize, btnsMode);
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
