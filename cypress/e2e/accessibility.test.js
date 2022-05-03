/// <reference types="Cypress" />
//The /// <reference types="Cypress" /> line at the top gives you autocompletion for the Cypress commands.

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("Navigates to page 2 and checks for accessibility violations", () => {
    cy.findByText(/go to page 2/i)
      .click()
      .checkA11y();
  });
});
