
Cypress.Commands.overwrite('type',(originalFn,subject,str,options)=>{
    if(str !==''){
        return originalFn(subject, str, options)
    }
        return subject
    }) //essa função permite enviar campos vazios


Cypress.Commands.add('checkoutWrongInfo', () => {
    const BTN_CHECKOUT = '[data-test=checkout]'
    const INP_FIRSTNAME = '[data-test=firstName]'
    const BTN_CHECKOUT_CONTINUE = '[data-test=continue]'
    //isso deve dar erro durante o checkout, por isso a falta de campos
    cy.get(BTN_CHECKOUT).click()
    cy.url().should('include', 'checkout-step-one.html')
    cy.get(INP_FIRSTNAME).type('')
    cy.get(BTN_CHECKOUT_CONTINUE).click()
    cy.url().should('include', 'checkout-step-one.html')
})



