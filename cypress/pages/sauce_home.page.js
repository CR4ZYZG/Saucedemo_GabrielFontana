import Base from './_base.page'
import { HOME } from './components/sauce.elements'

export default class HomeSauce extends Base {
    static sair(){
        super.clickOnElement(HOME.BTN_BURGUER)
        super.verifyIfElementExists('#logout_sidebar_link')
        super.clickOnElement(HOME.BTN_LOGOUT)
        super.verifyIfElementExists('.login_logo')
    }
}