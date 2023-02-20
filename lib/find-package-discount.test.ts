import { findPackageDiscount } from "./find-package-discount";
import * as jsdom from "jsdom";

describe("findPackageDiscount", () => {
  let document;

  beforeEach(() => {
    document = new jsdom.JSDOM().window.document;
  });

  it("should return the package discount amount if any is found", () => {
    const packageDom = document.createElement("div");
    packageDom.innerHTML = `
        <div class="package-price">
            <span class="price-big">£66.00</span><br>(inc. VAT)<br>Per Year
            <p style="color: red">Save £5.86 on the monthly price</p>
        </div>
    `;

    const discountAmount = findPackageDiscount(packageDom);

    expect(discountAmount).toEqual(5.86);
  });

  it("should return 0 if no discount has been found", () => {
    const packageDom = document.createElement("div");
    packageDom.innerHTML = `
        <div class="package-price">
            <span class="price-big">£5.99</span><br>(inc. VAT)<br>Per Month
        </div>
    `;

    const discountAmount = findPackageDiscount(packageDom);

    expect(discountAmount).toEqual(0);
  });
});
