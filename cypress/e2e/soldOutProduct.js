import BasePage from "../Page Objects/Components/basePage";
import FooterPage from "../Page Objects/Components/footerPage";
import NavBarPage from "../Page Objects/Components/navbarPage";
import checkOutPage from "../Page Objects/Pages/checkOutPage";
import ProductsDetailPage from "../Page Objects/Pages/productDetailsPage";
import ProductsPage from "../Page Objects/Pages/productsPage";
import HomePage from "../Page Objects/Pages/homePage";
import chairData from "../fixtures/chairData.json";

describe('validates flow for sold out item', function(){
    before(function(){
        HomePage.loadSite()
        cy.viewport(1366, 768)
    })

    it('it tries to buy a sold out item, validates sold out message and continues shopping', function(){
        NavBarPage.clickNavBarChairs()
        ProductsPage.visibleProductsList() //asserts if all products are visible

        cy.get(ProductsPage.product).each(($el, index, $list)=>{
            const prodStatus = $el.find('.status').text()
            if (prodStatus.includes('Sold')){
                cy.wrap($el.find('.product-card')).click()
                return false;
            }
        })

        ProductsPage.validateSoldOut() //validates sold out

        ProductsPage.continueShopping() //clicks on continue
    })
})

