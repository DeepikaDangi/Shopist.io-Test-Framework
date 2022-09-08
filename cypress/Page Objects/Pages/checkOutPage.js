export default class CheckoutPage {

    // *** static properties of this page
    static totalCart = '.line.line-total'
    static cartPage = '.cart'
    static addProductToCart = '.operator:nth-child(3)'
    static removeONEProductFromCart = '.operator:nth-child(1)'
    static removeProduct = '.remove-button'
    static enterDiscountCode = 'input'
    static applyDiscountCode = '.discount div'
    static invalidCoupon = '.discount-toast'
    static checkOutButton = '.checkout'
    static thankyouText = '.checkout-title'
    static continueShopping = '.continue-shopping'
    static checkoutMessageBox = '#main'
    static itemNameInCart = '.product-description>:nth-child(1)'
    static summaryPrice = '.lines :nth-child(1) :nth-child(2)'

    
    // *** static methods
    static clickAddProductToCart(){
       cy.get(this.addProductToCart).click()
    }

    static clickRemoveProductFromCart (){
        cy.get(this.removeONEProductFromCart).click()
    }

    static clickcheckoutButton (){
        cy.get(this.checkOutButton).click()
    }

    static visibleThanksText (){
        cy.get(this.thankyouText).should('be.visible')
    }
    static validateCheckout (){
        cy.get(this.checkoutMessageBox)
    }

    static cartIsVisible (){
        cy.get(this.cartPage).should('be.visible')
    }

    static clickApplyDiscount (){
        cy.get(this.applyDiscountCode).click()
    }

    static invalidCouponAlert (){
        cy.get(this.invalidCoupon).should('be.visible')
    }

}