import { getRandomQuote } from './app/features';
import { createButtonInspired } from './createButtonInspired';

const btnGetInspired = createButtonInspired();
btnGetInspired.addEventListener('click', async () => {
    await getRandomQuote('zen');
});