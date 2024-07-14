import { CategoryTitle } from "@/constants/categories";
import { CategoryMap, Drink } from "./types";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

interface DrinkResponse {
  drinks: Drink[];
}

export const fetchDrinksByQuery = async (
  searchText: string
): Promise<Drink[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${searchText}`);
    const data: DrinkResponse = await response.json();
    return data.drinks;
  } catch (error) {
    console.error("Error fetching searched drinks: ", error);
    return [];
  }
};

const apiCategoriesMap: CategoryMap = {
  Cocktails: "Cocktail",
  Shakes: "Shake",
  Shots: "Shot",
  Drinks: "Ordinary Drink",
  Liqours: "Homemade Liqueur",
  Punch: "Punch / Party Drink",
};

export const fetchDrinksByCategory = async (
  category: Exclude<CategoryTitle, "All drinks">
): Promise<Drink[]> => {
  try {
    const apiCategory = apiCategoriesMap[category];
    let url = `${BASE_URL}/filter.php?c=${apiCategory}`;
    if (!apiCategory) {
      url = `${BASE_URL}/search.php?s=`;
    }
    const response = await fetch(url);
    const data: DrinkResponse = await response.json();
    return data.drinks;
  } catch (error) {
    console.error("Error fetching drinks by category: ", error);
    return [];
  }
};

export const fetchDrinkById = async (id: string): Promise<Drink> => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data: DrinkResponse = await response.json();
    return data.drinks[0];
  } catch (error) {
    console.error("Error fetching drink details: ", error);
    return {} as Drink;
  }
};
