import homepage from '../support/pages/homepage/homepage'
import inventory_page from '../support/pages/inventory/inventory'
import cart_page from '../support/pages/cart/cart'
import checkout_page from '../support/pages/checkout/checkout'
import { faker } from '@faker-js/faker';

describe('Checkout Scenario', () => {
    
    beforeEach(() => {
        homepage.login(Cypress.env('username'), Cypress.env('password'))
    })

    it('Completes a Purchase', () => {
        inventory_page.addTShirtToCart()
        inventory_page.addBackpackToCart()
        inventory_page.clickBtnShoppingCart()
        cart_page.clickBtnCheckout()
        checkout_page.typeFirstName(faker.person.firstName())
        checkout_page.typeLastName(faker.person.lastName())
        checkout_page.typeZipcode(faker.location.zipCode())
        checkout_page.clickBtnContinue()
        checkout_page.clickBtnFinish()
        checkout_page.validateCheckoutIsCompleted()
    })
})