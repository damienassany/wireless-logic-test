import { fetchDocument } from "./fetch-document";
import { findPackages } from "./find-packages";
import { parsePackage } from "./parse-package";
import { sortByAnnualPrice } from "./sort-by-annual-price";

export async function parseAndSortPackages() {
  const document = await fetchDocument();
  const packages = findPackages(document);
  const parsedPackages = Array.from(packages).map(parsePackage);
  const sortedPackages = sortByAnnualPrice(parsedPackages);

  console.log(sortedPackages);
  return sortedPackages;
}
