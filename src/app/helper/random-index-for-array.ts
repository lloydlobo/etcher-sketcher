export const randomIndexForArray = async (array: []) => {
  try {
    return Math.floor(Math.random() * array.length) as number;
  } catch (error) {
    throw new Error(
      'Error: "randomIndexForArray", array is empty or undefined'
    );
  }
};
