export function findPackageDescription(packageDom: Element) {
  return packageDom.querySelector(".package-description")?.innerHTML;
}
