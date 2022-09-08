export default class NavBarPage {
    static navigationBar = '.navigation'
    static navigationChairs = '.chairs > .menu-item-large-container > .menu-item-large'
    static navigationSofas = '.sofas'
    static navigationBedding = '.bedding'
    static navigationLighting = '.lighting'
    static navigationProfile = '.profile'
    static navigationCart = '.cart'

    static navBarIsVisible (){
        cy.isVisible(this.navigationBar);
    }

    static clickNavBarChairs (){
        cy.get(this.navigationChairs).click()
    }

    static clickNavBarSofas (){
        cy.get(this.navigationSofas).click();
    }

    static clickNavBarBedding (){
        cy.get(this.navigationBedding).click()
    }

    static clickNavBarLighting (){
        cy.get(this.navigationLighting).click()
    }

    static clickNavbarProfile (){
        cy.get(this.navigationProfile).click()
    }

    static clickNavbarCart (){
        cy.get(this.navigationCart).click()
    }

    static verifyCartCount (){
        cy.get(this.navigationCart).should('have.value', number)
    }
}