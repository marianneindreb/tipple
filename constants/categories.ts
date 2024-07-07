import { icons } from "./icons";
import { ImageSourcePropType } from "react-native";

const categories: {
  id: string;
  title: string;
  icon: ImageSourcePropType;
}[] = [
  { id: "1", title: "Popular", icon: icons.popular },
  { id: "2", title: "Cocktail", icon: icons.cocktail },
  { id: "3", title: "Shaken", icon: icons.shaker },
  { id: "4", title: "Shots", icon: icons.shot },
  { id: "5", title: "Drink", icon: icons.drink },
  { id: "6", title: "Liqour", icon: icons.liqour },
  { id: "7", title: "Punch", icon: icons.punch },
  { id: "8", title: "Soft Drink", icon: icons.softDrink },
];

export default categories;
