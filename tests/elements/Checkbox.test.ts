import {test, expect} from '@playwright/test'

test('Checkbox - Check and Uncheck Checkbox', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Checkbox.html"
    await page.goto(url)
    const vehicle1 = page.locator("#vehicle1")
    await vehicle1.check()
    await vehicle1.uncheck()
})

test('Checkbox - Uncheck if checked', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Checkbox.html"
    await page.goto(url)
    const vehicle1 = page.locator("#vehicle1")
    if(!await vehicle1.isChecked()){
        await vehicle1.check()
    }
    expect(await vehicle1.isChecked()).toBe(true)
})