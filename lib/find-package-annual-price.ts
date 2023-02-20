export function findPackageAnnualPrice(
  packageDom: Element,
  isMonthly: boolean
) {
  return (
    Number(
      packageDom.querySelector(".price-big").textContent.replace(/£/g, "")
    ) * (isMonthly ? 12 : 1)
  );
}
