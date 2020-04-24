import config from '../../gatsby-config';

describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('has no detectable a11y violations on load', () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it('should have the site title', () => {
    const { title } = config.siteMetadata;

    cy.title().should('eq', title);

    cy.document()
      .get('meta[property="og:title"]')
      .should('have.attr', 'content', title);

    cy.document()
      .get('meta[name="twitter:title"]')
      .should('have.attr', 'content', title);
  });

  it('should have the site description', () => {
    const { description } = config.siteMetadata;

    cy.document()
      .get('meta[name="description"]')
      .should('have.attr', 'content', description);

    cy.document()
      .get('meta[property="og:description"]')
      .should('have.attr', 'content', description);

    cy.document()
      .get('meta[name="twitter:description"]')
      .should('have.attr', 'content', description);
  });

  it('should have the site image', () => {
    const { image } = config.siteMetadata;

    cy.document()
      .get('meta[name="image"]')
      .should('have.attr', 'content', image);

    cy.document()
      .get('meta[property="og:image"]')
      .should('have.attr', 'content', image);

    cy.document()
      .get('meta[name="twitter:image"]')
      .should('have.attr', 'content', image);
  });

  it('should have the site author', () => {
    const { author } = config.siteMetadata;

    cy.document()
      .get('meta[name="twitter:creator"]')
      .should('have.attr', 'content', author);
  });

  it('should have the og:type', () => {
    cy.document()
      .get('meta[property="og:type"]')
      .should('have.attr', 'content', 'website');
  });

  it('should have the twitter:card', () => {
    cy.document()
      .get('meta[name="twitter:card"]')
      .should('have.attr', 'content', 'summary');
  });
});
