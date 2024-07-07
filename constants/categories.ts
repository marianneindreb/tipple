import { icons } from "./icons";
import { ImageSourcePropType } from "react-native";

const categories: {
  id: string;
  title: string;
  icon: ImageSourcePropType;
}[] = [
  { id: "2", title: "Cocktails", icon: icons.cocktail },
  { id: "3", title: "Shaken", icon: icons.shaker },
  { id: "4", title: "Shots", icon: icons.shot },
  { id: "5", title: "Drinks", icon: icons.drink },
  { id: "6", title: "Liqours", icon: icons.liqour },
  { id: "7", title: "Punch", icon: icons.punch },
  { id: "8", title: "Soft Drinks", icon: icons.softDrink },
];

export default categories;
