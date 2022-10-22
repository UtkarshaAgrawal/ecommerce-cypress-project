describe("inspect automation", () => {
  it("able to inspect a particular element using chain of commands", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
    ).click();
  });

  it.only("click on first item using item header using chaining commands", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (linktext) {
        cy.log("click on link") + linktext.text();
      });
  });

  it.only("click on first item using item header using index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });
});
