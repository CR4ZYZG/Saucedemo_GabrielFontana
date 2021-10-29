import Base from './_base.page';
import Faker from 'faker';
import { DD_CHECK } from './components/sauce.elements';

export default class CheckoutSauce extends Base {
    static checkout(){
        super.clickOnElement(DD_CHECK.BTN_CHECKOUT)
        super.validarUrl('/checkout-step-one.html')
        super.typeValue(DD_CHECK.INP_FIRSTNAME, Faker.name.firstName())
        super.typeValue(DD_CHECK.INP_LASTNAME, Faker.name.lastName())
        super.typeValue(DD_CHECK.INP_ZIPCODE, Faker.address.zipCode())
        super.clickOnElement(DD_CHECK.BTN_CHECKOUT_CONTINUE)
        super.validarUrl('/checkout-step-two.html')
        super.clickOnElement(DD_CHECK.BTN_CHECKOUT_FINISH)
        super.validarUrl('/checkout-complete.html')
    }
}