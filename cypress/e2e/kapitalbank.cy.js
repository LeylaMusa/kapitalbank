describe('template spec', () => {
   beforeEach(()=>{
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });  
  }) 
  beforeEach(()=> {
    cy.fixture('example').then((exampleFixture) => {
     cy.login(exampleFixture.email,exampleFixture.password);
     cy.wait(3000);
    cy.goToProfile();
     cy.get('.align-items-center').invoke("text").then(text => text.trim()).should("equal", exampleFixture.expectedtest);
 })
     })
      it("personaldetails",()=>{
       cy.goToProfile()
      cy.viewport('macbook-11');
       cy.wait(3000);
       cy.get('.aside-informations__link').contains('Şəxsi məlumatlar').click();
       cy.get('input[name="CandidateModel.FileModel"]').selectFile('cypress/fixtures/test.png',{ force: true });
       cy.get('#profile-detail-photo').invoke('val').should('not.be.empty');
       cy.get('[class ="form-submit__button we-light btn-show-loader waves-effect waves-button waves-light"]').click()
})
it("seleclistofcountry",()=>{
 cy.goToProfile()
  cy.viewport('macbook-11');
  cy.wait(3000);
  cy.get('.aside-informations__link').contains('Şəxsi məlumatlar').click();
   cy.get('.step-name ').contains('Əlaqə məlumatları').click();
   cy.get('.select2-selection__arrow').click();
   cy.get('.select2-search__field').type('Baki');
   cy.get('.select2-results__option').contains('Bakı').click();

})
it("uploadcv",()=>{
  cy.goToProfile()
  cy.viewport('macbook-11');
  cy.wait(3000);
  cy.get('.aside-informations__link').contains('Şəxsi məlumatlar').click();
  cy.get('.step-name ').contains('Əlavə məlumatlar').click();
  cy.scrollTo('bottom');
  cy.get('#cvfile').selectFile('cypress/fixtures/cv.pdf',{ force: true });
  cy.get('button[class="form-submit__button we-light waves-effect waves-button waves-light btn-show-loader"]').click();

})

})