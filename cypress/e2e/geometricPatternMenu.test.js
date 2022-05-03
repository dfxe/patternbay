/// <reference types="Cypress" />
//The /// <reference types="Cypress" /> line at the top gives you autocompletion for the Cypress commands.

describe('Aestheticz tests', () => {
  it('Visit control panel', () => {
    cy.visit('/bay').get('main').injectAxe();
  });

  it('Click Aestheticz button with aria label', () => {
    cy.get("[aria-label='Aestheticz Menu']").click();
  });

  it('Does not contain the Circlez sliders, from Circlez menu', () => {
    cy.get("[aria-label='Circlezs Menu Sliders']").should('not.exist');
  });
  it('Display panel exists', () => {
    cy.get("[aria-label='Aestheticz Display Panel']").should('exist');
  });
  it('Display panel has at least one div element', () => {
    //cy.get("[aria-label='Aestheticz Display Panel']").should('have.attr', 'aria-label', 'Aestheticz Display Panel');
    cy.get("[aria-label='Aestheticz Display Panel']")
      .find('div')
      .should('have.length.gte', 1);
  });
  it('Display panel should have at least one child', () => {
    cy.get("[aria-label='Aestheticz Display Panel']")
      .children()
      .should('have.length.gte', 1);
  });

  it('Click Aestheticz button with aria label 5 times', () => {
    cy.get("[aria-label='Aestheticz Menu']").click();
    cy.get("[aria-label='Aestheticz Menu']").click();
    cy.get("[aria-label='Aestheticz Menu']").click();
    cy.get("[aria-label='Aestheticz Menu']").click();
    cy.get("[aria-label='Aestheticz Menu']").click();
  });

  it('Does not contain the Circlez sliders, from Circlez menu', () => {
    cy.get("[aria-label='Circlezs Menu Sliders']").should('not.exist');
  });

  it('Display panel exists 2', () => {
    cy.get("[aria-label='Aestheticz Display Panel']").should('exist');
  });

  it('Click Aestheticz button with aria label', () => {
    cy.get("[aria-label='Aestheticz Menu']").click();
  });

  it('Check if the panel contains Aestheticz text and generate button', () => {
    cy.contains('Aestheticz')
      .parent()
      .find('button')
      .contains('Generate')
      .click();
  });

  it('Has a menu of six color pattern buttons, one is another opens an overlay', () => {
    cy.get('[aria-label="Color Palette Menu"]').should('have.length', 6);
    cy.get('[aria-label="Color Pallete Overlay"]')
      .contains('Color Pattern Menu Button')
      .click();
  });
});
