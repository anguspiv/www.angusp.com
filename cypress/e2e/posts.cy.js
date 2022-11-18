describe('posts page', () => {
  beforeEach(() => {
    cy.visit('/posts');
    cy.injectAxe();
  });

  it('should render the posts page', () => {
    cy.findByRole('heading', { name: 'Posts' }).should('exist');

    cy.findByRole('heading', { name: 'Featured' }).should('exist');
  });
});
