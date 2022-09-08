export default class HomePage {

    // *** static properties on home page ***
    static chairsCard = '.department:nth-child(1) .caps'
    static sofasCard = '.department:nth-child(2) .caps'
    static beddingCard = '.department:nth-child(3) .caps'
    static lightingCard = '.department:nth-child(4) .caps'
    static homePage = '.jumbotron-large'

    // *** static methods on home page elements

    static loadSite(){
        cy.visit('https://www.shopist.io/')
    }
    
    static clickChairsCard (){
        cy.get(this.chairsCard).click()
    }

    static sofasCard (){
        cy.get(this.sofasCard).click()
    }

    static beddingCard(){
        cy.get(this.beddingCard).click()
    }

    static lightingCard(){
        cy.get(this.lightingCard).click()
    }

    static homePageIsVisible(){
        cy.get(this.homePage).should('be.visible');
    }
}