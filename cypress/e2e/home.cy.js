describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('has no a11y violations', () => {
    cy.checkA11y();
  });

  it('renders the home page content', () => {
    cy.findByRole('heading', { name: "Hi, I'm Angus!" }).should('exist');
    cy.findByRole('link', { name: 'about me' }).should('exist');
    cy.findByRole('link', { name: 'resume' }).should('exist');
    cy.findByRole('link', { name: 'posts' }).should('exist');
    cy.findByRole('heading', { name: 'Recent Posts' }).should('exist');
  });
});
