// region:      --- fetch ---
export const readJSON = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error: "readJSON", fetch failed, ${error}`);
  }
};

// endregion:   --- fetch ---
