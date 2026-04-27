/**
 * Testes E2E — BioPage
 * Execute: npx cypress run  (ou cypress open para UI interativa)
 * Requer o app rodando em http://localhost:3000
 */

describe('BioPage — Estrutura da Página', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renderiza a página principal', () => {
    cy.get('[data-testid="bio-page"]').should('exist')
  })

  it('exibe o nome correto no hero', () => {
    cy.get('[data-testid="hero-name"]').should('contain.text', 'Isabela Smith')
  })

  it('exibe o título profissional', () => {
    cy.get('[data-testid="hero-title"]').should('be.visible')
  })

  it('exibe a seção "Sobre mim"', () => {
    cy.get('[data-testid="about-section"]').should('be.visible')
    cy.get('[data-testid="about-text"]').should('not.be.empty')
  })

  it('exibe a seção de serviços', () => {
    cy.get('[data-testid="services-section"]').should('be.visible')
  })

  it('renderiza 3 cards de serviços', () => {
    cy.get('[data-testid^="service-card-"]').should('have.length', 3)
  })

  it('cada card de serviço tem um link válido', () => {
    cy.get('[data-testid^="service-card-"]').each(($card) => {
      cy.wrap($card).should('have.attr', 'href')
    })
  })

  it('exibe a seção de links', () => {
    cy.get('[data-testid="links-section"]').should('be.visible')
    cy.get('[data-testid^="link-btn-"]').should('have.length.greaterThan', 0)
  })

  it('exibe a seção CTA', () => {
    cy.get('[data-testid="cta-section"]').should('be.visible')
  })

  it('exibe a foto inferior', () => {
    cy.get('[data-testid="bottom-photo"]').should('be.visible')
  })

  it('exibe o rodapé', () => {
    cy.get('[data-testid="bio-footer"]').should('be.visible')
  })
})

describe('BioPage — Contato', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('exibe o botão flutuante do WhatsApp', () => {
    cy.get('[data-testid="whatsapp-float"]')
      .should('be.visible')
      .and('contain.text', 'Fale Comigo')
  })

  it('botão WhatsApp aponta para wa.me', () => {
    cy.get('[data-testid="whatsapp-float"]')
      .should('have.attr', 'href')
      .and('include', 'wa.me')
  })

  it('exibe os ícones de contato', () => {
    cy.get('[data-testid="contact-row"]').should('be.visible')
    cy.get('[data-testid="contact-instagram"]').should('exist')
    cy.get('[data-testid="contact-email"]').should('exist')
    cy.get('[data-testid="contact-whatsapp"]').should('exist')
  })

  it('ícone de e-mail usa mailto:', () => {
    cy.get('[data-testid="contact-email"]')
      .should('have.attr', 'href')
      .and('include', 'mailto:')
  })
})

describe('BioPage — Responsividade', () => {
  it('é legível em viewport de 375px (iPhone SE)', () => {
    cy.viewport(375, 812)
    cy.visit('/')
    cy.get('[data-testid="bio-page"]').should('be.visible')
    cy.get('[data-testid="hero-name"]').should('be.visible')
    cy.get('[data-testid="whatsapp-float"]').should('be.visible')
  })

  it('é legível em viewport de 430px (iPhone 15 Pro Max)', () => {
    cy.viewport(430, 932)
    cy.visit('/')
    cy.get('[data-testid="bio-page"]').should('be.visible')
  })
})

describe('BioPage — Acessibilidade', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('links de contato externo têm rel=noopener noreferrer', () => {
    cy.get('[data-testid="contact-instagram"]')
      .should('have.attr', 'rel', 'noopener noreferrer')
  })

  it('links abrem em nova aba quando externos', () => {
    cy.get('[data-testid="contact-instagram"]')
      .should('have.attr', 'target', '_blank')
  })
})
