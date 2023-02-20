import { findPackageAnnualPrice } from "./find-package-annual-price";
import { findPackageDescription } from "./find-package-description";
import { findPackageDiscount } from "./find-package-discount";
import { findPackageTitle } from "./find-package-title";
import { ParsedPackage } from "./types";

export function parsePackage(packageDom: Element): ParsedPackage {
  const title = findPackageTitle(packageDom);
  const description = findPackageDescription(packageDom);
  const annualPrice = findPackageAnnualPrice(
    packageDom,
    title.includes("Months")
  );
  const discount = findPackageDiscount(packageDom);

  return {
    "option title": title,
    description,
    price: annualPrice,
    discount,
  };
}
