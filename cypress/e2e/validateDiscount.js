import BasePage from "../Page Objects/Components/basePage";
import FooterPage from "../Page Objects/Components/footerPage";
import NavBarPage from "../Page Objects/Components/navbarPage";
import checkOutPage from "../Page Objects/Pages/checkOutPage";
import ProductsDetailPage from "../Page Objects/Pages/productDetailsPage";
import ProductsPage from "../Page Objects/Pages/productsPage";
import HomePage from "../Page Objects/Pages/homePage";
import chairData from "../fixtures/chairData.json";
import discountCode from "../fixtures/discountCode.json";
import CheckoutPage from "../Page Objects/Pages/checkOutPage";
import sofaData from "../fixtures/sofaData.json"

describe('to validate discount coupon', function(){
    beforeEach(function(){
        HomePage.loadSite()
        cy.viewport(1366, 768)
    })

    it('to add a product that matches a criteria through Navigation bar', function(){
        HomePage.homePageIsVisible()

        NavBarPage.clickNavBarSofas()
        ProductsPage.visibleProductsList()
       
        cy.get(ProductsPage.product).should('have.length', 9); //assert 9 products are visible

        cy.get(ProductsPage.product).each(($el, index, $list)=>{  //select the product that contains 'ivory'
            const productName = $el.find('.description').text()
            if (productName.includes('Ivory')){
                cy.wrap($el).click()
            }
        })

    })
    
    it('applies discount coupon and validates error message', function(){
        //**** adds a product to cart ****
        NavBarPage.clickNavBarSofas()
        ProductsPage.clickProduct(sofaData.sofa1)
        ProductsDetailPage.clickAddToCart()

        // *** goes to cart through navigation bar and applies discount coupon***

        NavBarPage.clickNavbarCart()

        cy.get(checkOutPage.enterDiscountCode).type(discountCode.discountcode1)
        checkOutPage.clickApplyDiscount();

        CheckoutPage.invalidCouponAlert()

    })

    it('verifies that price is unchanged after invalid disc coupon', function(){
        NavBarPage.clickNavBarSofas()
        ProductsPage.clickProduct(sofaData.sofa1)
        ProductsDetailPage.clickAddToCart()
        NavBarPage.clickNavbarCart()

        cy.get(checkOutPage.summaryPrice).invoke('text').as('priceBeforeCoupon')
        cy.get(checkOutPage.enterDiscountCode).type(discountCode.discountcode1)
        checkOutPage.clickApplyDiscount();
        cy.get(checkOutPage.summaryPrice).invoke('text').as('priceAfterCoupon')
        cy.then(()=>{
            expect(this.priceBeforeCoupon).to.equal(this.priceAfterCoupon)
        })

    })
        

    
})