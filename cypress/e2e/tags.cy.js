describe('tags page', () => {
  beforeEach(() => {
    cy.visit('/tags');
    cy.injectAxe();
  });

  it('should render the tags page', () => {
    cy.findByRole('heading', { name: 'Tags' }).should('exist');
  });
});
