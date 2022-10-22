describe("inspect automation", () => {
  it("", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      //cy.log("Index is :" + index + ": " + $el.text() + ": " + $list.text());

      if ($el.text().includes("BeneFit Girl Meets Pearl")) {
        cy.wrap($el).click();
      }
    });
  });
});
