import { test, expect, Locator } from '@playwright/test'

test('Keyboard Events', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/TextBox.html"
    await page.goto(url)
    const firstName: Locator = page.locator("#fname")
    await firstName.focus()
    await page.keyboard.down("Ctrl+Shift")      
    await page.keyboard.type("Hello") 
    await page.keyboard.up("Ctrl+Shift")
    await page.pause()
})