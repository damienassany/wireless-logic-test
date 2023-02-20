import { fetchDocument } from "./lib/fetch-document";
import { findPackages } from "./lib/find-packages";
import { parsePackage } from "./lib/parse-package";
import { sortByAnnualPrice } from "./lib/sort-by-annual-price";

export async function main() {
  const document = await fetchDocument();
  const packages = findPackages(document);
  const parsedPackages = Array.from(packages).map(parsePackage);
  const sortedPackages = sortByAnnualPrice(parsedPackages);

  console.log(sortedPackages);
  return sortedPackages;
}

main();
