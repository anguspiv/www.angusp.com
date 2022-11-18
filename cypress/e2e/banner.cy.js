describe('site banner', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('displays the global site banner', () => {
    cy.checkA11y();

    cy.findByRole('link', { name: 'Angus Perkerson' }).should('exist');
    cy.findByRole('link', { name: 'About' }).should('exist');
    cy.findByRole('link', { name: 'Resume' }).should('exist');
    cy.findByRole('link', { name: 'Posts' }).should('exist');
    cy.findByRole('link', { name: 'Home' }).should('exist');
    cy.findByRole('link', { name: 'Email angusp@angusp.com' }).should('exist');
    cy.findByRole('link', { name: 'Github Profile' }).should('exist');
    cy.findByRole('link', { name: 'Twitter Profile' }).should('exist');
    cy.findByRole('link', { name: 'LinkedIn Profile' }).should('exist');
  });

  it('navigates to the about page', () => {
    cy.findByRole('link', { name: 'About' }).click();
    cy.url().should('include', '/about');
  });

  it('navigates to the resume page', () => {
    cy.findByRole('link', { name: 'Resume' }).click();
    cy.url().should('include', '/resume');
  });

  it('navigates to the posts page', () => {
    cy.findByRole('link', { name: 'Posts' }).click();
    cy.url().should('include', '/posts');
  });

  it('navigates to the home page', () => {
    cy.findByRole('link', { name: 'Home' }).click();
    cy.url().should('include', '/');

    cy.findByRole('link', { name: 'Angus Perkerson' }).click();
    cy.url().should('include', '/');
  });
});
