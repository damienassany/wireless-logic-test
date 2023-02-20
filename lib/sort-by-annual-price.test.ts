import { sortByAnnualPrice } from "./sort-by-annual-price";

const makeParsedPackage = (price: number, index: number) => ({
  "option title": `title ${index}`,
  description: "description",
  price,
  discount: 0,
});

const mockParsedPackages = [
  makeParsedPackage(50, 0),
  makeParsedPackage(100, 1),
  makeParsedPackage(75, 2),
  makeParsedPackage(25, 3),
];

describe("sortByAnnualPrice", () => {
  it("should return the packages nodes", () => {
    const sortedPackages = sortByAnnualPrice(mockParsedPackages);

    expect(sortedPackages).toEqual([
      makeParsedPackage(100, 1),
      makeParsedPackage(75, 2),
      makeParsedPackage(50, 0),
      makeParsedPackage(25, 3),
    ]);
  });
});
