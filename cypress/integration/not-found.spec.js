/// <reference types="cypress" />
describe("404 Redirection", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:8080/fakeRoute");
  });

  it("Not Found Page", () => {
    cy.url().should("be.equal", "http://localhost:8080/404");
  });
});
