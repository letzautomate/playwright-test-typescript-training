import { test, expect } from '@playwright/test'

test('Radio Group - Select Radio Button - Method 1', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/RadioGroup.html"
    await page.goto(url)
    const language = page.locator('#HTML')
    await language.click()    
})

test('Radio Group - Select Radio Button - Method 2', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/RadioGroup.html"
    await page.goto(url)
    const language = page.locator('#JavaScript')
    await language.check()    
})

test('Radio Group - Verify Radio Button is selected', async( {page} ) => {
    const url = "file:///"+process.cwd()+"/htmlresources/RadioGroup.html"
    await page.goto(url)
    const language = page.locator('#JavaScript')
    await language.check()
    expect(await language.isChecked()).toBeTruthy()
    
})