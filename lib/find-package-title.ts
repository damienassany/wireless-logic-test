export function findPackageTitle(packageDom: Element) {
  return packageDom.querySelector(".header h3").textContent;
}
