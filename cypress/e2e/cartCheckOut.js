import BasePage from "../Page Objects/Components/basePage";
import checkOutPage from "../Page Objects/Pages/checkOutPage";
import ProductsDetailPage from "../Page Objects/Pages/productDetailsPage";
import ProductsPage from "../Page Objects/Pages/productsPage";
import HomePage from "../Page Objects/Pages/homePage";
import chairData from "../fixtures/chairData.json";
import CheckoutPage from "../Page Objects/Pages/checkOutPage";

describe('To add a product to cart and checkout', function (){
    
    before(function (){
        HomePage.loadSite()
        cy.viewport(1366, 768)
        // cy.fixture('chairData').then(function(data){
        // this.data = data;
        // })
})

    it('checkout a Chair to the cart through NavBar', function(){
        ProductsPage.clickNavBarChairs()
        ProductsPage.visibleProductsList()

        
        ProductsPage.clickProduct(chairData.product01)
        ProductsDetailPage.isLoaded()

        ProductsDetailPage.clickAddToCart();

        checkOutPage.clickNavbarCart()
        checkOutPage.cartIsVisible()     
       
        checkOutPage.clickAddProductToCart()
               
        checkOutPage.clickcheckoutButton()
        checkOutPage.visibleThanksText()
        checkOutPage.validateCheckout()

    })

})