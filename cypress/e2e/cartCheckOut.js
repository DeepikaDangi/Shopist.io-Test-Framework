import BasePage from "../Page Objects/Components/basePage";
import FooterPage from "../Page Objects/Components/footerPage";
import NavBarPage from "../Page Objects/Components/navbarPage";
import checkOutPage from "../Page Objects/Pages/checkOutPage";
import ProductsDetailPage from "../Page Objects/Pages/productDetailsPage";
import ProductsPage from "../Page Objects/Pages/productsPage";
import HomePage from "../Page Objects/Pages/homePage";
import chairData from "../fixtures/chairData.json";

describe('To add a product to cart and checkout', function (){
    
    before(function (){
        HomePage.loadSite()
        cy.viewport(1366, 768)
        // cy.fixture('chairData').then(function(data){
        // this.data = data;
        // })
})

    it('checkout a Chair to the cart through NavBar', function(){
        NavBarPage.clickNavBarChairs()
        ProductsPage.visibleProductsList()

        
        ProductsPage.clickProduct(chairData.product01)
        ProductsDetailPage.isLoaded()

        ProductsDetailPage.clickAddToCart();

        NavBarPage.clickNavbarCart()
        checkOutPage.cartIsVisible()     
       
        checkOutPage.clickAddProductToCart()
               
        checkOutPage.clickcheckoutButton()
        checkOutPage.visibleThanksText()
        checkOutPage.validateCheckout()

    })

})