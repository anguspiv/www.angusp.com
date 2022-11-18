describe('about page', () => {
  beforeEach(() => {
    cy.visit('/about');
    cy.injectAxe();
  });

  it('has no a11y violations', () => {
    cy.checkA11y();
  });

  it('has a title', () => {
    cy.findByRole('heading', { name: 'Angus Perkerson' }).should('exist');
  });
});
