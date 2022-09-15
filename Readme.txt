******** Framework Details *********
This repo contains E2E tests written for the website www.shopist.io.

I have created three flows:
1. A straighforward cart checkout.
2. To validate 'Sold Out' message when i try to add a sold out item.
3. To apply an invalid discount coupon and validate that the product price remains same.

»» Tools & Programming Language:
1.Cypress
2.Javascript
3.GIT
4.Mochawesome

»» Highlights
 - implemented Page Object Model to write spec files.
 - added hooks to keep the code DRY
 - included comments for better readability
 - have not added any assertions inside page classes as per best practice, instead they are added in spec files.
 - added Mochawesome HTML report
 - created separate page classes for every page on the website.

»» Test data
test data is stored in fixtures folder

