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

/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      --- constants ---
///
/// /////////////////////////////////////////////////////////////////////////////////

const MODE_CLASSIC = `classic`;
const MODE_INSPIRED = `inspired`;
const MODE_YIN = `yin`;
const MODE_YANG = `yang`;
const MODE_ZEN = `zen`;

const RESET_BACKGROUND_COLOR = '#EBDBB2';
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

let modeCurrent = '';

function generateGrid(size = 32 * 44, cssClass = 'grid-medium-default') {
    const containerGame = document.getElementById( 'containerGrid',) as HTMLElement; // prettier-ignore
    containerGame.innerHTML = '';

    containerGame.classList.remove(
        'grid-small',
        'grid-medium-default',
        'grid-big',
    );
    containerGame.classList.add(cssClass);

    // smooth animation that fades in as grid is generated with css on event btnStartSketch
    fade(containerGame, 0.1, 0, 10);

    for (let i = 0; i < size; i += 1) {
        const div = document.createElement('div');
        containerGame!.appendChild(div);
    }
}

function erase() {
    const containerGridChildren = document.querySelectorAll( '#containerGrid > div',) as NodeListOf<HTMLDivElement>; // prettier-ignore

    containerGridChildren.forEach((div) => {
        div.style.backgroundColor = RESET_BACKGROUND_COLOR;
        div.style.opacity = '1';
    });

    console.info('erase');
}

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- start sketching ---
///
/// ////////////////////////////////////////////////////////////////////////////

function startSketching(mode: string) {
    const gridChildren = document.querySelectorAll('#containerGrid > div');

    gridChildren.forEach((gridChild): void => {
        (gridChild as HTMLDivElement).oncontextmenu = () => {
            (gridChild as HTMLDivElement).style.backgroundColor =
                RESET_BACKGROUND_COLOR;
            (gridChild as HTMLDivElement).style.opacity = '1';
        }; // console.log(child); // => <div></div>
        gridChild.addEventListener('mousedown', (event): void => {
            if (
                mode === MODE_CLASSIC ||
                modeCurrent === MODE_CLASSIC ||
                modeCurrent === ''
            ) {
                console.dir(typeof event.target); // => object
                console.dir(event.target); // => <div></div>
                // https://stackoverflow.com/questions/66255166/expected-str-found-char-with-rust // https://angular.io/docs/ts/latest/guide/user-input.html#!#type-the--*event*
                (event.target as HTMLDivElement).style.backgroundColor = '#fbf1c7'; // prettier-ignore
            }
        });
        // disables the context-menu event while right-clicking on the div
        gridChild.addEventListener('contextmenu', (e) => {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
            e.preventDefault();
            // e.stopPropagation();
            // e.stopImmediatePropagation();
            console.log(e);
        });
    });
}

// cspell:disable-next-line
// immutable data structures --> mori, immutable.js for PERSISTANT DATA STRUCTURES ... other FP lib are underscore Lodash Ramda.... --> Context: JSUnconf Anana Vakil Learn Functional Programming WIt Javascript
// https://crates.io/crates/persistence Rust lib does something similar?

startSketching(`classic`);

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
    startSketching(`classic`);
    // changeSize();
    // changeMode();
    eraseEvent();
}
// region:      --- main ---
function main() {
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

// ! FOR DEBUGGING DEVELOPMENT ONLY !
// runOnce(main);
// remove after debugging and serving for production
startSketchGame(); // <<<<<<<<<<<<<<<<<<< DEBUG ONLY >>>>>>>>>>>>>>>>>>>>>>>> !!!

main();

// endregion:   --- main ---
