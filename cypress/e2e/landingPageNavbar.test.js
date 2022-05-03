/// <reference types="Cypress" />
//The /// <reference types="Cypress" /> line at the top gives you autocompletion for the Cypress commands.

describe("Landing page navbar tests", () => {
  it("Visit landing page", () => {
    cy.visit("/");
  });
  it("Landing navbar header exists", () => {
    cy.get("[aria-label='landing-navbar-header']").should("exist");
  });

  it("landing navbar header has at least one child", () => {
    cy.get("[aria-label='landing-navbar-header']")

      .children()
      .should("have.length.gte", 1);
  });

  it("landing navbar header has at least one div element", () => {
    cy.get("[aria-label='landing-navbar-header']")
      .find("div")
      .should("have.length.gte", 1);
  });

  it("landing navbar header has only one h1 element", () => {
    cy.get("[aria-label='landing-navbar-header']")
      .find("h1")
      .should("have.length", 1);
  });

  it("landing navbar header has at least one h2 element", () => {
    cy.get("[aria-label='landing-navbar-header']")
      .find("h2")
      .should("have.length.gte", 1);
  });

  it("Landing brand link exists", () => {
    cy.get("[aria-label='landing-brand-link']").should("exist");
  });
  it("Landing brand logo exists", () => {
    cy.get("[aria-label='landing-brand-logo']").should("exist");
  });
  it("Landing brand name exists", () => {
    cy.get("[aria-label='landing-brand-name']").should("exist");
  });
  it("Landing brand name is Pattern Bay", () => {
    cy.get("[aria-label='landing-brand-name']").should(
      "have.text",
      "Pattern Bay"
    );
  });
  it("Landing nav exists", () => {
    cy.get("[aria-label='landing-nav']").should("exist");
  });
  it("Landing contact page link within nav exists", () => {
    cy.get("[aria-label='landing-contact-page-link']").should("exist");
  });
  it("Landing page contact link loads contact page", () => {
    cy.get("[aria-label='landing-contact-page-link']").click();
    cy.url().should("include", "/contact");
  });

  it("Can go back from contact page to landing page", () => {
    cy.get("[aria-label='landing-contact-page-link']").click();
    cy.get("[aria-label='landing-navbar-header']").click();
    cy.url().should("include", "/");
  });

  it("Landing app page link within nav exists", () => {
    cy.get("[aria-label='landing-app-page-link']").should("exist");
  });
  it("Landing app page link contains span with text 'Go to Bay' ", () => {
    cy.get("[aria-label='landing-app-page-link']").contains("Go to Bay");
  });
  it("Landing app page link loads app page", () => {
    cy.get("[aria-label='landing-app-page-link']").click();
    cy.url().should("include", "/bay");
  });
  it("Can go back from app page to landing page", () => {
    cy.get("[aria-label='landing-app-page-link']").click();
    cy.get("[aria-label='landing-navbar-header']").click();
    cy.url().should("include", "/");
  });
});
