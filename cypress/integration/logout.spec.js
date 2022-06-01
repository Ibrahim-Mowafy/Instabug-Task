/// <reference types="cypress" />
describe("Logout user", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:8080");
  });

  it("Logout", () => {
    const email = "mohamed6@instabug.com";
    const password = "A12345678";

    cy.get(".form__input").first().type(email);
    cy.get(".form__input").last().type(password);
    cy.get(".form-action__btn").click();
    cy.url().should("be.equal", "http://localhost:8080/welcome");
    cy.get(".container__btn").click();
    cy.url().should("be.equal", "http://localhost:8080/login");
  });
});
