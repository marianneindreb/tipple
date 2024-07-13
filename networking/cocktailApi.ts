const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

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

interface CategoryMap {
  [key: string]: string;
}

const categoryMap: CategoryMap = {
  "All drinks": "",
  Cocktails: "Cocktail",
  Shakes: "Shake",
  Shots: "Shot",
  Drinks: "Ordinary Drink",
  Liqours: "Homemade Liqueur",
  Punch: "Punch / Party Drink",
};

export const fetchDrinksByCategory = async (category: string) => {
  try {
    const apiCategory = categoryMap[category];
    let url = `${BASE_URL}/filter.php?c=${apiCategory}`;
    if (!apiCategory) {
      url = `${BASE_URL}/search.php?s=`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error("Error fetching drinks by category: ", error);
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
