export function findPackageDiscount(packageDom: Element) {
  const priceRegex = /£\d{1,}.\d{2}/g;

  const discountContent =
    packageDom.querySelector(".package-price p")?.textContent || "-";

  if (discountContent === "-") {
    return 0;
  }

  return Number(discountContent.match(priceRegex)[0].replace(/£/g, ""));
}
