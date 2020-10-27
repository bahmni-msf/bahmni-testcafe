import { Selector, t } from 'testcafe'


class loginScreen {
    constructor() {
        this.enterUserName = Selector('#username')
        this.enterPassword = Selector('#password')
        this.selectLocation = Selector("#location")
        this.loginButton = Selector(".confirm").withText("Login")
    }
    async  applicationLogin(
                            username = "<input_username>",
                            password = "<input_password>",
                            loginLocation = "<input_login_location>"
        )
        {
        await t
            .maximizeWindow()
            .typeText(this.enterUserName, username, {paste: true, replace: true})
            .typeText(this.enterPassword, password, {paste: true, replace: true})
            .click(this.selectLocation)
            .click(this.selectLocation.find('option').withText(loginLocation))
            .click(this.loginButton)
            await t.expect(Selector(".dashboard").exists).ok()
            await t.click(".btn-user-info")
            await t.expect(Selector("span").withAttribute("ng-bind", "currentUser.username").innerText).eql(username)
    }
}

export default loginScreen
