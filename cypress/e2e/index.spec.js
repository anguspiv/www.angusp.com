describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('has no detectable a11y violations on load', () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it('should have the site title', () => {
    cy.title().should('not.be.empty');

    cy.document().get('meta[property="og:title"]').invoke('attr', 'content').should('not.be.empty');

    cy.document()
      .get('meta[name="twitter:title"]')
      .invoke('attr', 'content')
      .should('not.be.empty');
  });

  it('should have the site description', () => {
    cy.document().get('meta[name="description"]').invoke('attr', 'content').should('not.be.empty');

    cy.document()
      .get('meta[property="og:description"]')
      .invoke('attr', 'content')
      .should('not.be.empty');

    cy.document()
      .get('meta[name="twitter:description"]')
      .invoke('attr', 'content')
      .should('not.be.empty');
  });

  it('should have the site image', () => {
    cy.document().get('meta[name="image"]').invoke('attr', 'content').should('not.be.empty');

    cy.document().get('meta[property="og:image"]').invoke('attr', 'content').should('not.be.empty');

    cy.document()
      .get('meta[name="twitter:image"]')
      .invoke('attr', 'content')
      .should('not.be.empty');
  });

  it('should have the site creator', () => {
    cy.document().get('meta[name="twitter:creator"]').should('have.attr', 'content', '@angusp');
  });

  it('should have the og:type', () => {
    cy.document().get('meta[property="og:type"]').should('have.attr', 'content', 'website');
  });

  it('should have the twitter:card', () => {
    cy.document().get('meta[name="twitter:card"]').should('have.attr', 'content', 'summary');
  });

  it('should set the meta url', () => {
    cy.document().get('meta[property="og:url"]').should('have.attr', 'content');
  });

  it('should have the twitter site', () => {
    cy.document().get('meta[name="twitter:site"]').should('have.attr', 'content', '@angusp');
  });
});
