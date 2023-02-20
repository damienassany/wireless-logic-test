import { findPackageDescription } from "./find-package-description";
import * as jsdom from "jsdom";

describe("findPackageDescription", () => {
  let document;

  beforeEach(() => {
    document = new jsdom.JSDOM().window.document;
  });

  it("should return the package description", () => {
    const packageDom = document.createElement("div");
    packageDom.innerHTML = `
      <div class="package-description">This is a fake description</div>
    `;

    const description = findPackageDescription(packageDom);

    expect(description).toEqual("This is a fake description");
  });
});
