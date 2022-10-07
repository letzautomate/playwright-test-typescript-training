import {test, expect} from '@playwright/test'

test('Execute DOM methods', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Checkbox.html"
    await page.goto(url)
    const actualURL = await page.evaluate(() => document.URL)
    console.log(`URL is ${actualURL}`)
})
