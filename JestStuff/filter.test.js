var filterArray = require("./filter");

describe("filterArray", () => {
  /* Verify that if null is passed to this function,
   * the function returns null. Use the toBeNull() matcher for this. */
  it("will return null if passed null.", () => {
    expect(filterArray(null)).toBeNull();
  });

  /* Verify that if [1, 2, 3, 4] is passed, an array with a length of 4
   * is returned and each of the values match. Use the toEqual() matcher for this. */
  it("will return all numbers lower than 100.", () => {
    expect(filterArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(filterArray([1, 2, 3, 4]).length).toEqual(4);
    expect(filterArray([1, 2, 3, 4])).not.toEqual([4, 3, 2, 1]);
  });

  /* Verify that if [50, 75, 100, 125] is passed, the array will not contain 125.
   * Combine the not method and the toContain() matcher for this. */
  it("will replace all numbers >= 100 with 100.", () => {
    expect(filterArray([50, 75, 100, 125])).not.toContain(125);
  });
});
