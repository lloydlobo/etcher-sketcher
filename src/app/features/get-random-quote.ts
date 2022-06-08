import {
    extractOneTypeOfQuotes,
    extractStringFromArray,
    randomIndexForArray,
    readJSON,
} from '..';

export async function getRandomQuote(category: string) {
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
