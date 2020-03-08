describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('has no detectable a11y violations on load', () => {
    cy.checkA11y();
  });
});
