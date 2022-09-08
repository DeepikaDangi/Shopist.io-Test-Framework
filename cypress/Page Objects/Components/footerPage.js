export default class FooterPage {

    static categoryChairs = '.caps:nth-child(1)'
    static categorySofas = '.caps:nth-child(2)'
    static categoryBedding = '.caps:nth-child(3)'
    static categoryLighting= '.caps:nth-child(4)'
    static categoryBlock ='.departments'

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

}