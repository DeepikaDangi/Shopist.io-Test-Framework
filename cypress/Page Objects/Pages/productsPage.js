import BasePage from "../Components/basePage"

export default class ProductsPage extends BasePage {

    //*** static properties to identify product page elements ***
    static productsList = '.products'
    static product = '.product-card-container'
    static oneProduct = '.product-card'
    static status = '.status'
    static soldoutMessage = '.modal-sold-out'
    static continueShop = '.modal-sold-out--is-open > .modal-sold-out-content > .modal-button'

    //*** static methods on product page element ***
    static visibleProductsList(){
        cy.get(this.productsList).should('be.visible');
    }

    static validateSoldOut (){
        cy.get(this.soldoutMessage).should('be.visible');
    }

    static continueShopping (){
        cy.get(this.continueShop).should('be.visible').click()
    }

    static clickProduct (name){
        cy.get(this.product).each(($el, index,$list)=>{
            const prodName = $el.text()
            if (prodName.includes(name)){
                cy.wrap($el).click()
                return false;
            }
        })
    }

}