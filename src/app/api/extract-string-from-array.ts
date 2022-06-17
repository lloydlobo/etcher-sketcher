export const extractStringFromArray = async (data: any) => {
  try {
    let quotesZen = null;
    let quotesProgramming = null;
    ({ zen_quotes: quotesZen, programming_quotes: quotesProgramming } =
      await data);
    return {
      zen_quotes: [...quotesZen],
      programming_quotes: [...quotesProgramming],
    };
  } catch (error) {
    throw new Error("Error: 'extractStringFromArray', fetch failed");
  }
};
