describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', ()=>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  })

  it('Volume input changes when slider changes', ()=>{
    cy.get('#volume-slider').invoke('val', '33').trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  })

  it('Audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then(($el) => {
      expect($el).to.have.prop('volume',0.33);
    });
  });

  it('Image and sound source change', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image change test', ()=>{
    cy.get('#volume-number').clear().type('100');
    cy.get('#volume-image').then(($el) =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    })

    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image').then(($el) =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    })

    cy.get('#volume-number').clear().type('20');
    cy.get('#volume-image').then(($el) =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    })

    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    })
  })

  it('Button disabled test', ()=>{
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn').then(($el)=>{
      expect($el).to.have.attr('disabled', 'disabled');
    })
  })

  it('Invalid input test', ()=>{
    cy.get('#volume-number').clear().type('200');
    cy.get('#volume-number:invalid').then(($el)=>{
      expect($el);
    })
  })
});
