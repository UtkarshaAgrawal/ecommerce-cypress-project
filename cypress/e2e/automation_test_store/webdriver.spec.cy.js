describe("testing page", () => {
  it("submit form successfully", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document.should("have.property", "charset").and("eq", "UTF-8");
  });
});
