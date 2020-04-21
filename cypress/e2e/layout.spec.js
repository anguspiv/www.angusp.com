describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should have have a profile picture', () => {
    cy.get('[data-test-id="profile-image"]').should('exist');
  });

  it('should have a site title', () => {
    cy.get('[data-test-id="site-title"]').should('be', 'Angus Perkerson');
  });
});
