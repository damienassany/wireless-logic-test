import { ParsedPackage } from "./types";

export function sortByAnnualPrice(packages: ParsedPackage[]) {
  return [...packages].sort((a, b) => b.price - a.price);
}
