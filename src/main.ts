/* eslint-disable no-console */ /* eslint-disable no-param-reassign */ // cspell:ignore btns eslintno
import './style.css';
import { sleep } from './app'; // import { createButtonInspired } from './createButtonInspired';

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
/// region:      --- HASH MAP STENCIL ---
/// region:      --- START SKETCH GAME LIFE CYCLE ---
/// region:      --- MAIN ---

/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      --- CONSTANTS ---
///
/// /////////////////////////////////////////////////////////////////////////////////

const app = document.querySelector<HTMLDivElement>('#app')!;
const heading1 = `<h1 class="heading">etcher sketcher</h1>`;
app.innerHTML = ` ${heading1} `;

// const htmlBtnGetInspired = `<button id="btnGetInspired">get inspired</button>`; // ${htmlBtnGetInspired}
const MODE_CLASSIC = `classic`;
const MODE_INSPIRED = `inspired`;
const MODE_YIN = `yin`;
const MODE_YANG = `yang`;
const MODE_ZEN = `zen`;

const RESET_BACKGROUND_COLOR = '#EBDBB2';

// prettier-ignore-start
const MODE_SELECT_STYLE = {
  [MODE_CLASSIC]: { backgroundColor: '#fbf1c7', opacity: '1' },
  [MODE_INSPIRED]: { backgroundColor: '#fbf1c7', opacity: '1' },
  [MODE_YIN]: { backgroundColor: '#fbf1c7', opacity: '1' },
  [MODE_YANG]: { backgroundColor: '#fbf1c7', opacity: '1' },
  [MODE_ZEN]: { backgroundColor: '#fbf1c7', opacity: '1' },
}; // prettier-ignore-end

let modeCurrent = '';
modeCurrent = '';

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- BUTTONS ---
///
/// ////////////////////////////////////////////////////////////////////////////

// const btnGetInspired = createButtonInspired(); // bonus feature todo - add a button to get inspired

const btnsSize = document.querySelectorAll<HTMLButtonElement>('#btnsSize');
const btnsMode = document.querySelectorAll<HTMLButtonElement>('#btnsMode');
console.dir({ btnsSize, btnsMode });

export const styleAddClassBtn = ['shrink-border', 'material-bubble'];

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- HELPER FUNCTIONS ---
///
/// ////////////////////////////////////////////////////////////////////////////

async function fade(
  element: HTMLElement,
  speed = 0.1,
  opacity = 0,
  frames = 10,
) {
  // Function declared in a loop contains unsafe references to variable(s) 'opacity'
  for (let i = 0; i < frames; i += 1) {
    // eslint-disable-next-line no-loop-func
    sleep(i * 100).then(() => {
      element.style.opacity = opacity.toString();
      opacity += speed;
    });
  }
}

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- HASHMAP DATA DIV ---
///
/// ////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-unused-vars
let hashMap = new Map();

const getDivHashMap = (): Map<number, HTMLDivElement> => {
  if (!hashMap) {
    hashMap = new Map();
  }
  return hashMap;
};
let map: Map<number, HTMLDivElement>;
// eslint-disable-next-line prefer-const
map = getDivHashMap();
console.dir({ map });

function gridHashMap(index: number, gridChild: HTMLDivElement) {
  // eslint-disable-next-line prefer-const
  const result = getDivHashMap();
  if (result) {
    map.set(index, gridChild);
  }
  // track position of all div in the grid
  hashMap.set(index, gridChild);

  return hashMap;
}

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- GENERATE GRID ---
///
/// ////////////////////////////////////////////////////////////////////////////

function generateGrid(size = 32 * 44, cssClass = 'grid-medium-default') {
  const containerGame = document.getElementById('containerGrid') as HTMLElement;
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
    const div = document.createElement('div') as HTMLDivElement;
    containerGame.appendChild(div);
    gridHashMap(i, div);
  }
}
console.dir({ hashMap });

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- GENERATE ARRAY COORDINATES ---
///
/// ////////////////////////////////////////////////////////////////////////////

let circleLinearArrayOfSize = [];
let circleLinearArrayOfCoordinates = [];
function generateCircleLinearArrayOfCoordinates(size = 32 * 44) {
  circleLinearArrayOfSize = [];
  circleLinearArrayOfCoordinates = [];
  for (let i = 0; i < size; i += 1) {
    circleLinearArrayOfSize.push(i);
    circleLinearArrayOfCoordinates.push(i);
  }
}
function startStencil(mode = `classic`) {
  generateCircleLinearArrayOfCoordinates();
  // eslint-disable-next-line no-param-reassign
  modeCurrent = mode;
}
startStencil();

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
/// region:      --- EVENT LISTENERS MOUSE SKETCH ---
///
/// ////////////////////////////////////////////////////////////////////////////

function startSketching(mode: string) {
  const gridChildren = document.querySelectorAll<HTMLDivElement>(
    '#containerGrid > div',
  );
  // Style the grid with the selected mode
  gridChildren.forEach((gridChild): void => {
    // gridChild.style.backgroundColor = RESET_BACKGROUND_COLOR;

    /// /////////////////////////////////////////////////////////////////////////////
    ///
    /// region:      --- STYLE GRID ---
    ///
    /// /////////////////////////////////////////////////////////////////////////////
    gridChild.addEventListener('mouseover', (event): void => {
      if (
        mode === MODE_CLASSIC ||
        modeCurrent === MODE_CLASSIC ||
        modeCurrent === ''
      ) {
        (event.target as HTMLDivElement).style.backgroundColor =
          MODE_SELECT_STYLE[MODE_CLASSIC].backgroundColor;

        (event.target as HTMLDivElement).style.opacity = '1';
      } else if (mode === MODE_INSPIRED) {
        (event.target as HTMLDivElement).style.backgroundColor =
          MODE_SELECT_STYLE[MODE_INSPIRED].backgroundColor;
      } else if (mode === MODE_ZEN || modeCurrent === MODE_ZEN) {
        const zenPallette = [
          '#EF476F',
          '#FFD166',
          '#06D6A0',
          '#118AB2',
          '#073B4C',
        ];
        const randomColor =
          zenPallette[Math.floor(Math.random() * zenPallette.length)];
        (event.target as HTMLDivElement).style.backgroundColor = randomColor;
        (event.target as HTMLDivElement).style.opacity = '1';
      }
    }); // end of mouseover event listener

    /// /////////////////////////////////////////////////////////////////////////
    ///
    /// region:      --- EVENT LISTENERS MOUSE SKETCH ---
    ///
    /// ////////////////////////////////////////////////////////////////////////////

    // erase the color of clicked div to default
    (gridChild as HTMLDivElement).oncontextmenu = () => {
      (gridChild as HTMLDivElement).style.backgroundColor = RESET_BACKGROUND_COLOR; // prettier-ignore
      (gridChild as HTMLDivElement).style.opacity = '1';
    };

    // disables the context-menu event while right-clicking on the div
    gridChild.addEventListener('contextmenu', (e) => e.preventDefault()); // e.stopPropagation(); // e.stopImmediatePropagation(); // https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
  }); // gridChildren.forEach
} // end of function startSketching(mode: string)

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- BUTTONS SELECT ---
///
/// ////////////////////////////////////////////////////////////////////////////

function chooseButton(button: HTMLButtonElement) {
  if (button.classList.contains('mode')) {
    btnsMode.forEach((btnMode) => {
      btnMode.classList.remove('btn-active');
    });
  } else {
    btnsSize.forEach((btnSize) => {
      btnSize.classList.remove('btn-active');
    });
  }
  button.classList.add('btn-active');
}

function chooseSize() {
  const SMALL = 16 * 22;
  const MEDIUM = 32 * 44;
  const BIG = 64 * 88;

  btnsSize[1].classList.add('btn-active');

  btnsSize.forEach((btnSize) => {
    btnSize.addEventListener('click', () => {
      if (btnSize.classList.contains('small')) {
        erase();
        generateGrid(SMALL, 'grid-small');
        startSketching(MODE_CLASSIC);
        chooseButton(btnSize);
      } else if (btnSize.classList.contains('medium')) {
        erase();
        generateGrid(MEDIUM, 'grid-medium-default');
        startSketching(MODE_CLASSIC);
        chooseButton(btnSize);
      } else if (btnSize.classList.contains('big')) {
        erase();
        generateGrid(BIG, 'grid-big');
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
      } else if (btnMode.classList.contains('inspired')) {
        // erase();
        // generateGrid(32 * 44, 'grid-medium-default');
        startSketching(MODE_INSPIRED);
        chooseButton(btnMode);
        modeCurrent = MODE_INSPIRED;
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

function createButtonSketching() {
  const btn = document.createElement('button') as HTMLButtonElement;
  btn.innerHTML = 'start sketching';
  btn.classList.add(...styleAddClassBtn);
  btn.id = 'btnStartSketching';
  app.appendChild(btn);
  return btn;
}

function eraseEvent() {
  const btnErase = document.getElementById('btnErase') as HTMLButtonElement;
  btnErase.addEventListener('click', erase);
}

/// ////////////////////////////////////////////////////////////////////////////
///
// region:      --- HASH MAP STENCIL ---
///
/// ////////////////////////////////////////////////////////////////////////////

function colorDivHashMap(color: string) {
  const gridChildren = document.querySelectorAll<HTMLDivElement>(
    '#containerGrid > div',
  );
  map.forEach((index) => {
    console.log({ index });
    const arr = new Array(index);
    // pick out divs with the index value which matches the sequence in an array
    if (index === hashMap.keys().next().value) {
      gridChildren.forEach((gridChild) => {
        arr.push(gridChild);
      });
      arr.forEach((gridChild) => {
        gridChild.style.backgroundColor = color;
      });

      console.log({ index });
    }
  });
}

/// ////////////////////////////////////////////////////////////////////////////
///
// region:      --- START SKETCH GAME LIFE CYCLE ---
///
/// ////////////////////////////////////////////////////////////////////////////

function startSketchGame() {
  generateGrid();
  startSketching(`classic`);
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
  createButtonSketching();
  const btnStartSketching = document.getElementById( `btnStartSketching`,) as HTMLButtonElement; // prettier-ignore
  // prettier-ignore
  btnStartSketching.addEventListener( 'mousedown', () => {
    sleep(300).then(() => startSketchGame());
    colorDivHashMap(MODE_SELECT_STYLE[MODE_CLASSIC].backgroundColor);
    },
    { once: true },
  );
}

/// ! FOR DEBUGGING DEVELOPMENT ONLY !  // runOnce(main);
startSketchGame(); // !!!! remove after debugging and serving for production
/// ! FOR DEBUGGING DEVELOPMENT ONLY !  // runOnce(main);

main();

/// ///////////////////////////////////////////////////////////////////////////
///
/// region:      --- END ---
///
/// ///////////////////////////////////////////////////////////////////////////

// cspell:disable-next-line // immutable data structures --> mori, immutable.js for PERSISTANT DATA STRUCTURES ... other FP lib are underscore Lodash Ramda.... --> Context: JSUnconf Anana Vakil Learn Functional Programming WIt Javascript // https://crates.io/crates/persistence Rust lib does something similar?
