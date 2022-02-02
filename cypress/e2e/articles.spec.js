describe('Articles Page', () => {
  beforeEach(() => {
    cy.visit('/articles');
  });

  it('has no detectable a11y violations on load', () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it('should display the page title', () => {
    cy.findByRole('heading', { name: /Articles/i }).should('exist');
  });
});
