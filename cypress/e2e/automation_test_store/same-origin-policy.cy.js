describe("inspect automation", () => {
  it.skip("validate visiting 2 different domains", () => {
    cy.visit("https://www.google.com/");
    cy.visit("https://www.apple.com/");
  });

  it("origin command", () => {
    cy.origin("www.google.com/", () => {
      cy.visit("/");
    });
    cy.origin("webdriveruniversity.com/", () => {
      cy.visit("/");
    });
  });
});
