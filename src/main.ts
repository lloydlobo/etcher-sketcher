/* eslint-disable no-param-reassign */

/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-undef */
// cspell:ignore btns eslintno
// region:      --- imports ---
import './style.css';

import { sleep } from './app';
// import { runOnce } from 'vitest';
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

// region:      --- helper functions ---

// helpers:     --- fade for loop
async function fade(
    element: HTMLElement,
    speed = 0.1,
    opacity = 0,
    frames = 10,
) {
    // Arrow functions establish "this" based on the scope the Arrow function is defined within. from Arrow function e // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // Function declared in a loop contains unsafe references to variable(s) 'opacity', 'opacity'.eslintno-loop-func
    for (let i = 0; i < frames; i += 1) {
        // eslint-disable-next-line no-loop-func
        sleep(i * 100).then(() => {
            element.style.opacity = opacity.toString();
            opacity += speed;
        });
    }
}

// endregion:   --- helper functions ---
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

    // smooth animation that fades in as grid is
    // generated with css on event btnStartSketch
    fade(containerGame, 0.1, 0, 10);

    for (let i = 0; i < size; i += 1) {
        const div = document.createElement('div');
        containerGame.appendChild(div);
    }
}

function erase() {
    const containerGridChildren = document.querySelectorAll(
        '#containerGrid > div',
    ) as NodeListOf<HTMLDivElement>;

    containerGridChildren.forEach((div) => {
        div.style.backgroundColor = '#fbf1c7';
        div.style.opacity = '1';
    });

    console.info('erase');
}

// endregion:   --- buttons ---
// region:      --- events ---
function createButtonSketching() {
    const btn = document.createElement('button') as HTMLButtonElement;
    btn.innerHTML = 'start sketching';
    btn.classList.add(...styleAddClassBtn);
    app.appendChild(btn);
    // add an id to the btn
    btn.id = 'btnStartSketching';
    return btn;
}
// region:      --- erase event ---
function eraseEvent() {
    const btnErase = document.getElementById('btnErase') as HTMLButtonElement;

    btnErase.addEventListener('click', erase);
}

// region:      --- game events ---
function startSketchGame() {
    generateGrid();
    // startSketching(`classic`);
    // changeSize();
    // changeMode();
    eraseEvent();
}
// region:      --- main ---
export function main() {
    createButtonSketching();
    sleep(0).then(() => {
        console.clear();
        console.log('Gloria In Excelsis Deo!');
    });
    const btnStartSketching = document.getElementById(
        `btnStartSketching`,
    ) as HTMLButtonElement;
    btnStartSketching.addEventListener(
        'click',
        () => {
            sleep(300).then(() => {
                console.clear();
                console.info(`btnStartSketching clicked`);
                startSketchGame();
            });
        },
        { once: true }, // https://www.educative.io/answers/how-to-ensure-an-event-listener-is-only-fired-once-in-javascript
    );
}

main();

// endregion:   --- main ---
