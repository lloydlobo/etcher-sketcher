export const extractOneTypeOfQuotes = async (
  data: any,
  categoryQuote: string
) => {
  try {
    const { zen_quotes, programming_quotes } = data;
    const zen = await zen_quotes;
    const programming = await programming_quotes;
    if ((categoryQuote = `zen`)) {
      return zen;
    } else if ((categoryQuote = `programming`)) {
      return programming;
    } else {
      // return "no such category";
      throw new Error("🚀 ~ file: main.ts ~ line 82 ~ extractOneTypeOfQuotes");
    }
  } catch (error) {
    console.error(error);
    throw new Error("🚀 ~ file: main.ts ~ line 82 ~ extractOneTypeOfQuotes");
  }
};
