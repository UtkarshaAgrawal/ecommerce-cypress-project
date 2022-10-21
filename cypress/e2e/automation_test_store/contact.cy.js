/// <reference types = "cypress"/>

describe("test contact us form", () => {
  it("should be able to submit submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm_first_name").type("Joe");
    cy.get("#ContactUsFrm_email").type("joebuckle@gmail.com");
    cy.get("#ContactUsFrm_enquiry").type("provide additional discount?");
    cy.get(".col-md-6 > .btn").click();
  });
});
