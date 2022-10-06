import {test, expect} from '@playwright/test'

test.only('Button Click', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Button.html"
    await page.goto(url)
    const button = page.locator("//button[text()='Click Me!']")
    await button.click();
})

test('Button - isDisabled', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Button.html"
    await page.goto(url)
    const button = page.locator("//button[text()='Click Me!']")
    const disabled = await button.isDisabled();
    expect(disabled).toBe(true)
})

test('Button - get Label', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Button.html"
    await page.goto(url)
    const button = page.locator("//button[text()='Click Me!']")
    const label = await button.innerText()
    expect(label).toBe("Click Me!")
})

