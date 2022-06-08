/* eslint-disable no-undef */
// cspell ignore 'extract-one-type-of-quotes'
export const extractOneTypeOfQuotes = async (
    dataToStrings: any,
    categoryQuote: string,
): Promise<any> => {
    const category = categoryQuote.toLowerCase();
    try {
        // cspell:disable
        // eslint-disable-next-line camelcase
        const { zen_quotes, programming_quotes } = dataToStrings;
        // eslint-disable-next-line camelcase
        const zen = await zen_quotes;
        // eslint-disable-next-line camelcase
        const programming = await programming_quotes;
        // cspell:enable
        if (category === `zen`) {
            return zen;
        }
        if (category === `programming`) {
            return programming;
        }
        // return "no such category";
        throw new Error('no such category');
    } catch (error) {
        // console.error(error);
        throw new Error('no such category');
    }
};

// region:      --- UNIT TEST SUITE ---

// const vitest = import.meta.vitest;
const { vitest } = import.meta;
if (vitest) {
    describe('extractOneTypeOfQuotes', () => {
        test('extractOneTypeOfQuotes([], `zen`) to be instance of a Promise<any>', () => {
            expect(extractOneTypeOfQuotes([], `zen`)).toBeInstanceOf(Promise);
        });

        it('category is lowercase when categoryQuote is "Zen"', async () => {
            const categoryQuote = 'Zen';
            const category = categoryQuote.toLowerCase();
            expect(category).toBe(`zen`);
        });

        it('category is lowercase when categoryQuote is "Programming"', async () => {
            const categoryQuote = 'Programming';
            const category = categoryQuote.toLowerCase();
            expect(category).toBe(`programming`);
        });

        it('throws an error if the second argument is not "Zen" or "Programming"', async () => {
            const categoryQuote = 'NoSuchCategory';
            await expect(
                extractOneTypeOfQuotes([], categoryQuote),
            ).rejects.toThrow('no such category');
        });

        it("should return instance of array when initiated to a variable 'quotes' ", async () => {
            const categoryQuote = 'Zen';
            const category = categoryQuote.toLowerCase();
            const dataToStrings = {
                zen_quotes: ['a', 'b', 'c'],
                programming_quotes: ['d', 'e', 'f'],
            };
            const quotes = await extractOneTypeOfQuotes(
                dataToStrings,
                category,
            );
            expect(quotes).toBeInstanceOf(Array);
            expect(quotes).toBeTruthy();
        });
    });
}

// endregion:   --- UNIT TEST SUITE ---
