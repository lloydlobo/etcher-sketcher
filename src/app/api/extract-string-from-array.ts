export const extractStringFromArray = async (data: any) => {
  try {
    let zen_quotes, programming_quotes;
    ({ zen_quotes, programming_quotes } = await data);
    return {
      zen_quotes: [...zen_quotes],
      programming_quotes: [...programming_quotes],
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};
