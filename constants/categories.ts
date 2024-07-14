import { icons } from "./icons";
import { ImageSourcePropType } from "react-native";

export type CategoryTitle =
  | "All drinks"
  | "Cocktails"
  | "Shakes"
  | "Shots"
  | "Drinks"
  | "Liqours"
  | "Punch";

export interface Category {
  id: string;
  title: CategoryTitle;
  icon: ImageSourcePropType;
}

export const CATEGORIES: Category[] = [
  { id: "1", title: "All drinks", icon: icons.allDrinks },
  { id: "2", title: "Cocktails", icon: icons.cocktail },
  { id: "3", title: "Shakes", icon: icons.shake },
  { id: "4", title: "Shots", icon: icons.shot },
  { id: "5", title: "Drinks", icon: icons.drink },
  { id: "6", title: "Liqours", icon: icons.liqour },
  { id: "7", title: "Punch", icon: icons.punch },
];
