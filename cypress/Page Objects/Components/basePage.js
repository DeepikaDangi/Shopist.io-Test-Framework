export default class BasePage {

    static visitSite (){
        cy.visit('https://www.shopist.io/')   
             
    }

    static goBack (){
        cy.go('go')
    }

}