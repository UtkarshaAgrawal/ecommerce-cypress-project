/// <reference types = "cypress"/>
describe("Test contact us form via Automation Test Store", () => {
  it("should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm_first_name").type("joe");
    cy.get("#ContactUsFrm_email").type("joe123@gmail.com");
    cy.get("#ContactUsFrm_enquiry").type(
      "query regarding discount on face product"
    );
    cy.get(".col-md-6 > .btn").click();
    cy.get(".mb40 > .btn").click();
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=68"]'
    ).click();
    cy.get("ul.thumbnails > :nth-child(2) > :nth-child(1) > img").click();
    cy.get(":nth-child(6) > .thumbnail > :nth-child(1) > img").click();
    cy.get(".cart").click();
    //adding code for makeup
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=36"]'
    ).click();
    cy.get(":nth-child(3) > :nth-child(1) > img").click();
    cy.get(":nth-child(2) > .thumbnail > :nth-child(1) > img").click();
    cy.get(".cart").click();
    cy.get("#cart_quantity58").clear().type("6");
    //adding code for fragrance section
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=49"]'
    ).click();
    cy.get("ul.thumbnails > :nth-child(2) > :nth-child(1) > img").click();
    cy.get(":nth-child(1) > .thumbnail > :nth-child(1) > img").click();
    cy.get(".cart").click();
    cy.get("#cart_quantity649f00c3e9cebe257a0d8aeac09dc4b5dd")
      .clear()
      .type("2");
    cy.get("#cart_update").click();
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=52"]'
    ).click();
    cy.get(":nth-child(3) > .thumbnail > :nth-child(1) > img").click();
    cy.get("a[class='cart']").click();
    //books
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=65"]'
    ).click();
    cy.get(".block_7 > .nav > .dropdown > .dropdown-toggle").click();
    cy.get("#cart_checkout1").click();
    cy.get("#accountFrm_accountguest").click();
    cy.get("#accountFrm > fieldset > .btn").click();
    //ordering after guest checkout
    cy.get("#guestFrm_firstname").type("Joe");
    cy.get("#guestFrm_lastname").type("Jackson");
    cy.get("#guestFrm_email").type("joe@gmail.com");
    cy.get("#guestFrm_telephone").type("3458762239");
    cy.get("#guestFrm_company").type("joe steels");
    cy.get("#guestFrm_address_1").type("67 North Ave North York");
    cy.get("#guestFrm_city").type("Toronto");
    cy.get("#guestFrm_postcode").type("Majestic");
    cy.get(".col-md-12 > .btn-orange").click();
  });
  it("should be able to submit a successful submission via contact us form", () => {});
});
