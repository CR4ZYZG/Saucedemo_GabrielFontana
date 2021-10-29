import Base from './_base.page';
import { CART_ELE } from './components/sauce.elements';

export default class CartSauce extends Base {
    static adicionarNoCarrinho(){
        super.clickOnElement(CART_ELE.BTN_ADDTOCART)
        super.verifyIfElementExists('[data-test=remove-sauce-labs-backpack]')
    }

    static acessarCarrinho(){
        super.clickOnElement(CART_ELE.BTN_CART)
        super.validarUrl('/cart.html')
    }

    static removerCarrinho(){
        super.clickOnElement(CART_ELE.BTN_REMOVE)
        super.verifyIfElementExists('.removed_cart_item')

    }

}