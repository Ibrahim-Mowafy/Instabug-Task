/// <reference types="cypress" />

describe("Login user", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:8080");
  });
  it("Scenario 1", () => {
    const email = "ibrahim@test.com";
    const password = "IB123456";

    cy.get(".form__input").first().type(email);
    cy.get(".form__input").last().type(password);
    cy.get(".form-action__btn").click();
    cy.get(".error-message").should("be.visible");
  });

  it("Scenario 2", () => {
    const email = "mohamed6@instabug.com";
    const password = "IB123456";

    cy.get(".form__input").first().type(email);
    cy.get(".form__input").last().type(password);
    cy.get(".form-action__btn").click();
    cy.get(".error-message").should("be.visible");
  });

  it("Scenario 3", () => {
    const email = "mohamed6@instabug.com";
    const password = "A12345678";

    cy.get(".form__input").first().type(email);
    cy.get(".form__input").last().type(password);
    cy.get(".form-action__btn").click();
    cy.url().should("be.equal", "http://localhost:8080/welcome");
  });

  it("Scenario 4", () => {
    const email = "dddd";
    cy.get(".form__input").first().type(email).blur();
    cy.get(".error").should("be.visible");
    cy.get(".form__input-is-invalid")
      .first()
      .should("have.css", "border-color", "rgb(242, 66, 32)");
  });
});
