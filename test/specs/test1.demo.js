const { browser } = require('@wdio/globals');
var assert = require('assert')

describe("Demo Test", function () {
    it("My first test cases ", async () => {
        await browser.url("https://www.google.co.in/")
        await browser.$("[name='q']").setValue("WebDriverIO")
        await browser.keys('Enter')
        // await browser.$("#APjFqb").addValue('\uE007')
        await browser.pause(3000)
        var title = await browser.getTitle()
        console.log("Current page title",title)
        assert.equal(title, "WebDriverIO - Google Search")
        await browser.pause(3000)
    })

})