var getUserById = require("./getUserById");

describe("getUserById", () => {
  /* Test that if an id is passed that is present in the users list,
   * getUserById() will successfully return the user object. Make sure
   * to validate that the user's id, firstName and lastName are all present
   * in the user object and match what you expect from the id you passed. */
  it("returns a valid user object for a valid ID.", async () => {
    const mariaId = 3;
    const mariaUserObject = await getUserById(mariaId);
    expect(mariaUserObject).not.toBeNull();
    expect(mariaUserObject.id).toEqual(3);
    expect(mariaUserObject.firstName).toEqual("Maria");
    expect(mariaUserObject.lastName).toEqual("Santos");
  });

  /* Test that if an invalid id which is not present in the users list is
   * passed, getUserById() will reject with an error. Make sure to validate
   * that the text of the error returned. */
  it("rejects an invalid ID.", async () => {
    const invalidId = 1000;
    await expect(getUserById(invalidId)).rejects.toEqual(
      "User with ID 1000 not found."
    );
  });
});
