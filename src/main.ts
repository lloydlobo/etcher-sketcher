// region:      --- imports ---
import './style.css';

import {
    extractOneTypeOfQuotes,
    extractStringFromArray,
    randomIndexForArray,
    readJSON,
    sleep,
} from './app';

// endregion:   --- imports ---

// region:      --- app ---
const app = document.querySelector<HTMLDivElement>('#app')!;
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
        // console.clear()
        // console.log('Gloria In Excelsis Deo!')
    });
}

main();

// endregion:   --- main ---

// region:      --- style ---

const styleAddClassBtn = ['shrink-border', 'material-bubble'];

// endregion:   --- style ---

// region:      --- buttons ---

const btnGetInspired = document.getElementById(
    'btnGetInspired',
)! as HTMLButtonElement;
btnGetInspired.classList.add(...styleAddClassBtn);
// endregion:   --- buttons ---

// region:      --- helper functions ---
async function getRandomQuote(category: string) {
    const data = await readJSON('src/assets/quotes.json');
    const dataToStrings = await extractStringFromArray(data);
    const quotes: string[] = await extractOneTypeOfQuotes(
        dataToStrings,
        category,
    ).then((zen) => zen);
    const randomIndex = await randomIndexForArray(quotes);
    const quote = quotes[randomIndex];
    // eslint-disable-next-line no-console
    console.log(quote);
    return quote;
}
// endregion:   --- helper functions ---

// region:      --- events ---

btnGetInspired.addEventListener('click', async () => {
    await getRandomQuote('zen');
});

// endregion:   --- events ---
