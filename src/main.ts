/* eslint-disable no-console */ /* eslint-disable no-param-reassign */ // cspell:ignore btns eslintno
import './scss/style.scss';
import {
  sleep,
  ThemeToggle,
  reflectPreference,
  theme,
  setPreference,
  // gridHashMap,
} from './app'; // import { createButtonInspired } from './createButtonInspired';
import { fade } from './app/helper/fade';
import { getRandomNumber } from './app/helper/get-random-number';

console.log(ThemeToggle);

/// /////////////////////////////////////////////////////////////////////////////
///
/// region:      --- TABLE OF CONTENTS ---
///
/// /////////////////////////////////////////////////////////////////////////////

/// region:      --- CONSTANTS ---
/// region:      --- BUTTONS ---
/// region:      --- HELPER FUNCTIONS ---
/// region:      --- HASHMAP DATA DIV ---
/// region:      --- GENERATE GRID ---
/// region:      --- GENERATE ARRAY COORDINATES ---
/// region:      --- EVENT LISTENERS MOUSE SKETCH ---
/// region:      --- BUTTONS SELECT ---
/// region:      --- EVENTS ---
/// region:      --- Mode MAP STENCIL ---
/// region:      --- START SKETCH GAME LIFE CYCLE ---
/// region:      --- MAIN ---

/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      --- CONSTANTS ---
///
/// /////////////////////////////////////////////////////////////////////////////////

const ROOT = document.querySelector(':root') as HTMLElement;
const mainHeading = document.getElementById(
  'mainHeading',
) as HTMLHeadingElement;
// const app = document.querySelector<HTMLDivElement>('#app')!;
// const heading1 = `<h1 class="heading">etcher sketcher</h1>`;
// app.innerHTML = ` ${heading1} `;
// const htmlBtnGetInspired = `<button id="btnGetInspired">get inspired</button>`; // ${htmlBtnGetInspired}

const MODE_CLASSIC = `classic`;
const MODE_MODERN = `modern`;
const MODE_ZEN = `zen`;

const MODE_YIN = `yin`;
const MODE_YANG = `yang`;

const RESET_BACKGROUND_COLOR = '#EBDBB2';
// pollack diffuse color
// prettier-ignore-start
const MODE_SELECT_STYLE = {
  [MODE_CLASSIC]: { backgroundColor: '#3c3836', opacity: '1' },
  [MODE_MODERN]: {
    colorPallette: [ '#fbf1c7', '#f7f1c7', '#f3f1c7', '#f0f1c7', '#ecf1c7', '#e8f1c7', '#e4f1c7', '#e0f1c7', '#dcf1c7', '#d8f1c7', '#d4f1c7', '#d0f1c7', ], // prettier-ignore
    opacity: '1',
  },

  [MODE_ZEN]: {
    colorPallette: [ '#fbf1c7', '#f7f1c7', '#f3f1c7', '#f0f1c7', '#ecf1c7', '#e8f1c7', '#e4f1c7', '#e0f1c7', '#dcf1c7', '#d8f1c7', '#d4f1c7', '#d0f1c7', ], // prettier-ignore
    opacity: '1',
  },

  // [MODE_ZEN]: { backgroundColor: '#fbf1c7', opacity: '1' },
  [MODE_YIN]: { backgroundColor: '#fbf1c7', opacity: '1' },
  [MODE_YANG]: { backgroundColor: '#fbf1c7', opacity: '1' },
}; // prettier-ignore-end

let modeCurrent = '';

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- BUTTONS ---
///
/// ////////////////////////////////////////////////////////////////////////////

// const btnGetInspired = createButtonInspired(); // bonus feature todo - add a button to get inspired

const controls = document.querySelector('.main__controls') as HTMLDivElement;
const btnsSize = document.querySelectorAll<HTMLButtonElement>('#btnsSize');
const btnsMode = document.querySelectorAll<HTMLButtonElement>('#btnsMode');

const btnGetInspired = document.getElementById(
  'btnGetInspired',
) as HTMLButtonElement;

// const allBtnsSizeAndMode = document.querySelectorAll<HTMLButtonElement>( '#btnsSize, #btnsMode #btnErase',); console.log(allBtnsSizeAndMode);

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- GENERATE GRID ---
///
/// ////////////////////////////////////////////////////////////////////////////

function createContainerGridBorder() {
  const containerBorder = `calc(9 / 16 * 3vw) solid var(--grid-border-color)`;
  ROOT.style.setProperty('--container-border', containerBorder);
}

function generateGrid(size = 32 * 44, cssClass = 'grid-medium-default') {
  const containerGame = document.getElementById('containerGrid') as HTMLElement;
  containerGame.innerHTML = '';

  containerGame.classList.remove(
    'grid-small',
    'grid-medium-default',
    'grid-large',
  );

  createContainerGridBorder();
  containerGame.classList.add(cssClass);
  fade(containerGame, 0.1, 0, 10); // smooth animation that fades in as grid is generated with css on event btnStartSketch

  for (let i = 0; i < size; i += 1) {
    const div = document.createElement('div') as HTMLDivElement;
    containerGame.appendChild(div);
    // gridHashMap(i, div);
  }
}

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- ERASE DIV CHILD BG COLOR ---
///
/// ////////////////////////////////////////////////////////////////////////////

function erase() {
  const containerGridChildren = document.querySelectorAll<HTMLDivElement>( '#containerGrid > div',); // prettier-ignore
  containerGridChildren.forEach((div) => {
    div.style.backgroundColor = RESET_BACKGROUND_COLOR;
    div.style.opacity = '1';
  });
}

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- START SKETCHING EVENT LISTEN ---
///
/// ////////////////////////////////////////////////////////////////////////////

function startSketching(mode: string) {
  const gridChildren = document.querySelectorAll<HTMLDivElement>( '#containerGrid > div',); // prettier-ignore

  // Style the grid with the selected mode
  gridChildren.forEach((gridChild): void => {
    gridChild.addEventListener('mouseover', (event): void => {
      const modeIsClassic = mode === MODE_CLASSIC || modeCurrent === MODE_CLASSIC || modeCurrent === ''; // prettier-ignore
      const modeIsModern = mode === MODE_MODERN;
      const modeIsZen = mode === MODE_ZEN || modeCurrent === MODE_ZEN;

      if (modeIsClassic) {
        (event.target as HTMLDivElement).style.backgroundColor = MODE_SELECT_STYLE[MODE_CLASSIC].backgroundColor; // prettier-ignore
        (event.target as HTMLDivElement).style.opacity = '1';
      } else if (modeIsModern) {
        const colorPalletteModern = [
          '#EF476F',
          '#FFD166',
          '#06D6A0',
          '#118AB2',
          '#073B4C',
        ];
        const randomColor =
          colorPalletteModern[
            Math.floor(Math.random() * colorPalletteModern.length)
          ];
        (event.target as HTMLDivElement).style.backgroundColor = randomColor;
        (event.target as HTMLDivElement).style.opacity = '1';
      } else if (modeIsZen) {
        (event.target as HTMLDivElement).style.backgroundColor =
            MODE_SELECT_STYLE[MODE_ZEN].colorPallette[ getRandomNumber( 0, MODE_SELECT_STYLE[MODE_ZEN].colorPallette.length - 1,) ]; // prettier-ignore
        // const zenPallette = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C',];
        // const randomColor = zenPallette[Math.floor(Math.random() * zenPallette.length)];
        // (event.target as HTMLDivElement).style.backgroundColor = randomColor;
        // (event.target as HTMLDivElement).style.opacity = '1';
      }
    }); // end of mouseover event listener

    // Erase the color of clicked div to default
    (gridChild as HTMLDivElement).oncontextmenu = () => {
      (gridChild as HTMLDivElement).style.backgroundColor = RESET_BACKGROUND_COLOR; // prettier-ignore
      (gridChild as HTMLDivElement).style.opacity = '1';
    };

    // Disable the context-menu event while right-clicking on the div
    gridChild.addEventListener('contextmenu', (e) => e.preventDefault()); // e.stopPropagation(); // e.stopImmediatePropagation(); // https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
  }); // end of gridChildren.forEach
} // end of function startSketching(mode: string)

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- BUTTONS SELECT ---
///
/// ////////////////////////////////////////////////////////////////////////////

function chooseButton(button: HTMLButtonElement) {
  if (button.classList.contains('mode')) {
    btnsMode.forEach((btnMode) => btnMode.classList.remove('btn-active'));
  } else {
    btnsSize.forEach((btnSize) => btnSize.classList.remove('btn-active'));
  }
  button.classList.add('btn-active');
}

type SizeType = 'grid-small' | 'grid-medium-default' | 'grid-large';
export function refreshGridWithNewSize(
  SMALL: number,
  btnClass: string,
  MODE: SizeType,
  btnSize: HTMLButtonElement,
) {
  erase();
  generateGrid(SMALL, btnClass);
  startSketching(MODE);
  chooseButton(btnSize);
}

function chooseSize() {
  const SMALL = 16 * 22;
  const MEDIUM = 32 * 44;
  const BIG = 64 * 88;

  btnsSize[1].classList.add('btn-active');

  btnsSize.forEach((btnSize) => {
    btnSize.addEventListener('click', () => {
      if (btnSize.classList.contains('small')) {
        // refreshGridWithNewSize(SMALL, MODE_CLASSIC, 'grid-small', btnSize);
        erase();
        generateGrid(SMALL, 'grid-small');
        startSketching(MODE_CLASSIC);
        chooseButton(btnSize);
      } else if (btnSize.classList.contains('medium')) {
        // refreshGridWithNewSize( MEDIUM, MODE_CLASSIC, 'grid-medium-default', btnSize,); // prettier-ignore
        erase();
        generateGrid(MEDIUM, 'grid-medium-default');
        startSketching(MODE_CLASSIC);
        chooseButton(btnSize);
      } else if (btnSize.classList.contains('large')) {
        // refreshGridWithNewSize(BIG, MODE_CLASSIC, 'grid-large', btnSize);
        erase();
        generateGrid(BIG, 'grid-large');
        startSketching(MODE_CLASSIC);
        chooseButton(btnSize);
      }
    });
  });
}

function chooseMode() {
  btnsMode[0].classList.add('btn-active');
  btnsMode.forEach((btnMode) => {
    btnMode.addEventListener('click', () => {
      if (btnMode.classList.contains('classic')) {
        // erase();
        // generateGrid(32 * 44, 'grid-medium-default');
        startSketching(MODE_CLASSIC);
        chooseButton(btnMode);
        modeCurrent = MODE_CLASSIC;
      } else if (btnMode.classList.contains('modern')) {
        // erase();
        // generateGrid(32 * 44, 'grid-medium-default');
        startSketching(MODE_MODERN);
        chooseButton(btnMode);
        modeCurrent = MODE_MODERN;
      } else if (btnMode.classList.contains('zen')) {
        // erase();
        // generateGrid(32 * 44, 'grid-medium-default');
        startSketching(MODE_ZEN);
        chooseButton(btnMode);
        modeCurrent = MODE_ZEN;
      } else if (btnMode.classList.contains('reset')) {
        erase();
        generateGrid(32 * 44, 'grid-medium-default');
        startSketching(MODE_CLASSIC);
        chooseButton(btnMode);
        modeCurrent = MODE_CLASSIC;
      } else {
        try {
          throw new Error('Unknown mode');
        } catch (error) {
          console.error(error);
        }
      }
    });
  });
}

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- EVENTS ---
///
/// ////////////////////////////////////////////////////////////////////////////

// function createButtonSketching() { const btn = document.createElement('button') as HTMLButtonElement; btn.innerHTML = 'start sketching'; btn.classList.add(...styleAddClassBtn); btn.id = 'btnStartSketching'; app.appendChild(btn); return btn; }

function eraseEvent() {
  const btnErase = document.getElementById('btnErase') as HTMLButtonElement;
  btnErase.addEventListener('click', erase);
}

function displayAllControlButtons() {
  controls.dataset.hidden = 'false';
}

interface HTMLOrSVGElement {
  autofocus: boolean;
  readonly dataset: DOMStringMap;
  nonce?: string;
  tabIndex: number;
  blur(): void;
  // focus(options?: FocusOptions): void;
}

function changeDatasetState(
  data: HTMLOrSVGElement,
  attribute: string,
  state: boolean,
) {
  if (state) {
    data.dataset[attribute] = 'true';
  } else {
    data.dataset[attribute] = 'false';
  }
  // if (state) data.dataset.attribute = 'true';
  // else data.dataset.hidden = 'false';
}

function displayGridLayout() {
  const containerGrid = document.getElementById(
    'containerGrid',
  ) as HTMLDivElement;

  if (containerGrid.dataset.ruler === 'false') {
    containerGrid.dataset.ruler = 'true';
  } else if (containerGrid.dataset.ruler === 'true') {
    containerGrid.dataset.ruler = 'false';
  }
}
// Result on HTML: <div id="user" data-id="1234567890" data-user="john" data-some-data-attr="data">John Doe</div>
// Result on JS: 'someDataAttr' in el.dataset === true

const btnShowGridLayout = document.getElementById(
  'btnShowGridLayout',
) as HTMLButtonElement;
btnShowGridLayout.addEventListener('click', displayGridLayout);

function toggleThemeOnWindowLoad() {
  window.onload = (): void => {
    reflectPreference();
    const btnThemeToggle = document.querySelector(
      '#themeToggle',
    ) as HTMLElement;
    btnThemeToggle.addEventListener('click', (event) => {
      console.log('clicked', event);
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      setPreference();
    });
  };
}

/// ////////////////////////////////////////////////////////////////////////////
///
// region:      --- START SKETCH GAME LIFE CYCLE ---
///
/// ////////////////////////////////////////////////////////////////////////////
function startSketchGame() {
  generateGrid();
  startSketching(`classic`);
  displayAllControlButtons();
  chooseSize();
  chooseMode();
  eraseEvent();
}

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- MAIN ---
///
/// ////////////////////////////////////////////////////////////////////////////

function main() {
  // createButtonSketching();
  const btnStartSketching = document.getElementById( `btnStartSketching`,) as HTMLButtonElement; // prettier-ignore
  // prettier-ignore
  btnStartSketching.addEventListener( 'mousedown', () => {
        btnStartSketching.remove();
        changeDatasetState(mainHeading, `transparent`, true);
        changeDatasetState(btnGetInspired, `transparent`, false);
      sleep(100).then(() => startSketchGame());
    },
    { once: true },
    )
  reflectPreference(); // helps to avoid flashing the page when the user changes the theme or onload
  toggleThemeOnWindowLoad();
}

main();

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- END ---
///
/// ////////////////////////////////////////////////////////////////////////////

// console.dir(ROOT.style.);
// const getROOTStyleVariables = () => {
//   // const style = window.getComputedStyle(ROOT);
//   const { style } = ROOT;
//   // const style = ROOT.getAttributeNames();

//   const styleVariables = [];
//   for (let i = 0; i < style.length; i += 1) {
//     const key = style[i];
//     const value = style.getPropertyValue(key);
//     styleVariables[i] = value;
//   }
//   return styleVariables;
// };

// const rootVariables = getROOTStyleVariables();
// console.dir(rootVariables);
