
export default class ProductsDetailPage {

    // *** static properties of this page
    static addToCart = '.purchase-button'
    static price = '.price'
    static itemNameDesc = '.description'

    // *** static methods for this page
    static isLoaded (){
        cy.get('.description').should('be.visible');
    }
    static validatePrice (){
        cy.get(this.price)
    }

    static clickAddToCart(){
        cy.get(this.addToCart).click()
    }

}