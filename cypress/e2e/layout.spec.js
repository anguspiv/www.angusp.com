import config from '../../gatsby-config';

describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should have have a profile picture', () => {
    cy.get('[data-test-id="profile-image"]').should('exist');
  });

  it('should have a site title', () => {
    cy.get('[data-test-id="site-title"]').should('have.text', 'Angus Perkerson');
  });

  it('should have a site description', () => {
    cy.get('[data-test-id="site-description"]').should('not.be.empty');
  });

  it('should have an email link', () => {
    cy.get(`a[href^="mailto:${config.siteMetadata.email}"]`).contains(config.siteMetadata.email);
  });

  it('should have an email subject line', () => {
    cy.get(`a[href^="mailto:${config.siteMetadata.email}"]`)
      .should('have.attr', 'href')
      .should('contain', 'subject=Hi, Angus!');
  });

  it('should have a link to github', () => {
    cy.get('a[href="https://github.com/anguspiv"]').should('exist');
  });

  it('should have a link to twitter', () => {
    cy.get('a[href="https://twitter.com/angusp"]').should('exist');
  });

  it('should have a link to linkedin', () => {
    cy.get('a[href="https://www.linkedin.com/in/aperkerson"]').should('exist');
  });

  it('should have a footer link to gatsby', () => {
    cy.get('a[href="https://www.gatsbyjs.org"]').should('exist').should('contain', 'Gatsby');
  });

  it('should have the copyright in the footer', () => {
    cy.get('footer').should('contain', `© ${new Date().getFullYear()}`);
  });
});
