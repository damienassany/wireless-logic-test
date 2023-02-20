import { findPackageAnnualPrice } from "./find-package-annual-price";
import * as jsdom from "jsdom";

describe("findPackageAnnualPrice", () => {
  let document;

  beforeEach(() => {
    document = new jsdom.JSDOM().window.document;
  });

  it("should return the annual price", () => {
    const packageDom = document.createElement("div");
    packageDom.innerHTML = `
      <div class="price-big">£10</div>
    `;

    const annualPrice = findPackageAnnualPrice(packageDom, false);

    expect(annualPrice).toEqual(10);
  });

  it("should return the annual price for monthly packages", () => {
    const packageDom = document.createElement("div");
    packageDom.innerHTML = `
      <div class="price-big">£10</div>
    `;
    const annualPrice = findPackageAnnualPrice(packageDom, true);

    expect(annualPrice).toEqual(120);
  });
});
