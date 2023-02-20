import { findPackageTitle } from "./find-package-title";
import * as jsdom from "jsdom";

describe("findPackageTitle", () => {
  let document;

  beforeEach(() => {
    document = new jsdom.JSDOM().window.document;
  });

  it("should return the package name", () => {
    const packageDom = document.createElement("div");
    packageDom.innerHTML = `
      <div class="header dark-bg">
        <h3>Basic: 500MB Data - 12 Months</h3>
      </div>
    `;

    const title = findPackageTitle(packageDom);

    expect(title).toEqual("Basic: 500MB Data - 12 Months");
  });
});
