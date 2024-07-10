const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list.php?c=list`);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    return [];
  }
};

export const fetchSearchedDrinks = async (searchText: string) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${searchText}`);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error("Error fetching searched drinks: ", error);
    return [];
  }
};

export const fetchDrinkDetails = async (drinkId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${drinkId}`);
    const data = await response.json();
    return data.drinks[0];
  } catch (error) {
    console.error("Error fetching drink details: ", error);
    return {};
  }
};
