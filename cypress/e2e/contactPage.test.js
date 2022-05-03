/// <reference types="Cypress" />
//The /// <reference types="Cypress" /> line at the top gives you autocompletion for the Cypress commands.

describe("Contact page tests", () => {
  it("Visit contact page", () => {
    cy.visit("/contact");
  });
  it("Contact page navbar header exists", () => {
    cy.get("[aria-label='landing-navbar-header']").should("exist");
  });
  it("Contact page navbar header has correct text", () => {
    cy.get("[aria-label='landing-navbar-header']").should("contain", "Contact");
  });
  it("Contact page has only one h1", () => {
    cy.get("h1").should("have.length", 1);
  });

  it("Contains Get started today! in h1 and h1 is color white", () => {
    cy.get("h1").should("contain", "Get started today!");
    cy.get("h1").should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Contact page should have only one contact form", () => {
    cy.get("form").should("have.length", 1);
  });
  it("Contact page should have email label with htmlFor set to email", () => {
    cy.get("[aria-label='contact-email-label']").should("exist");
    cy.get("[aria-label='contact-email-label']").should(
      "have.attr",
      "htmlFor",
      "email"
    );
  });
  it("Contact page should have email input with type email", () => {
    cy.get("[aria-label='contact-email-input']").should("exist");
    cy.get("[aria-label='contact-email-input']").should(
      "have.attr",
      "type",
      "email"
    );
  });
  it("Contact page should have name label", () => {
    cy.get("[aria-label='contact-name-label']").should("exist");
  });
  it("Contact page should have name input", () => {
    cy.get("[aria-label='contact-name-input']").should("exist");
  });
});
