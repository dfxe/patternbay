/// <reference types="Cypress" />
//The /// <reference types="Cypress" /> line at the top gives you autocompletion for the Cypress commands.

describe("Control Panel tests", () => {
  it("Visit control panel", () => {
    cy.visit("/bay").get("main").injectAxe();
  });
  it("Click Circlezs button with aria label", () => {
    cy.get("[aria-label='Circlezs Menu']").click();
  });
  it("Click Aestheticz button with aria label", () => {
    cy.get("[aria-label='Aestheticz Menu']").click();
  });
  it("Click export button with aria label", () => {
    cy.get(`[aria-label='Export Circlezs']`).click();

    cy.get(`[aria-label='Done Export']`).click();
  });
  it("Click what is this button with aria label", () => {
    cy.get("[aria-label='What is this']").click();
  });
});
