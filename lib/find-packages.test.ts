import { findPackages } from "./find-packages";
import * as jsdom from "jsdom";

describe("findPackages", () => {
  let document;

  beforeEach(() => {
    document = new jsdom.JSDOM().window.document;
  });

  it("should return the packages nodes", () => {
    const packageDom = document.createElement("div");
    packageDom.innerHTML = `
      <div class="package" />
      <div class="package" />
      <div class="package" />
      <div class="package" />
    `;

    const title = findPackages(packageDom);

    expect(title).toHaveLength(4);
  });
});
