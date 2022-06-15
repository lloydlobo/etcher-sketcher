// cspell:disable
/* eslint-disable camelcase */
// cspell:enable
export const extractStringFromArray = async (data: any) => {
  try {
    let zen_quotes = null;
    let programming_quotes = null;
    ({ zen_quotes, programming_quotes } = await data);
    // cspell:enable
    return {
      zen_quotes: [...zen_quotes],
      programming_quotes: [...programming_quotes],
    };
  } catch (error) {
    throw new Error("Error: 'extractStringFromArray', fetch failed");
  }
};
