export default class BasePage {
    static categoryChairs = '.caps:nth-child(1)'
    static categorySofas = '.caps:nth-child(2)'
    static categoryBedding = '.caps:nth-child(3)'
    static categoryLighting= '.caps:nth-child(4)'
    static categoryBlock ='.departments'
    static navigationBar = '.navigation'
    static navigationChairs = '.chairs > .menu-item-large-container > .menu-item-large'
    static navigationSofas = '.sofas'
    static navigationBedding = '.bedding'
    static navigationLighting = '.lighting'
    static navigationProfile = '.profile'
    static navigationCart = '.cart'

    static visitSite (){
        cy.visit('https://www.shopist.io/')   
             
    }

    static goBack (){
        cy.go('go')
    }

    static categoryIsVisible (){
        cy.isVisible(this.categoryBlock);
    }
    static clickCategoryChairs(){
        cy.get(this.categoryChairs).click();
    }    

    static clickCategorySofas (){
        cy.get(this.categorySofas).click()
    }

    static clickCategoryBedding (){
        cy.get(this.categoryBedding).click()
    }

    static clickCategoryLighting (){
        cy.get(this.categoryLighting).click();
    }

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