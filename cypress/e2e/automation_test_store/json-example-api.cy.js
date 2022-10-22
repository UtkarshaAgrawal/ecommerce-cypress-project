describe("JSON", () => {
  it("JSON Object erxamples", () => {
    const exampleObject = { key: "Tim", key2: "Joe" };
    const exampleArrayofValues = ["Sophie", "Rose", "Howard"];
    const users = {
      firtstName: "JOe",
      LastName: "Blogs",
      Age: "30",
      students: [
        {
          firstName: "Jim",
          LastName: "Cary",
        },
        {
          firstName: "Ian",
          LastName: "Somelhder",
        },
      ],
    };

    cy.log(exampleObject["key"]);
    cy.log(exampleObject["key2"]);
    cy.log(exampleObject.key2);

    cy.log(exampleArrayofValues[0]);
    cy.log(exampleArrayofValues[1]);

    cy.log(users.firtstName);
    cy.log(users.students[1].firstName);
  });
});
