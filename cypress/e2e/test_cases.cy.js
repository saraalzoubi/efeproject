///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Aspire test cases', () => {
  it('randomly enter the website arabic or english', () => {
    let website=["https://www.almosafer.com/ar","https://www.almosafer.com/en"]
    let RandomIndex= Math.floor(Math.random()*website.length)
    cy.visit(website[RandomIndex])
  })
})