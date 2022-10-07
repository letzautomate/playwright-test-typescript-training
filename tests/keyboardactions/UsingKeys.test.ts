import { test, expect } from '@playwright/test'

test('Using keyboard to select entire test on a page', async({page}) => {
    await page.goto('https://playwright.dev/docs/api/class-keyboard')
    await page.keyboard.press("Control+A")
    await page.pause()
})

test.only('Enter Value into a TextBox using Keyboard', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/TextBox.html"
    await page.goto(url)
    //await page.locator('#lname').focus()
    await page.locator('#lname').fill("Playwright")
    await page.keyboard.down('Shift')
    for(let i=0; i< 6;i++){
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up('Shift')
    await page.keyboard.press('Backspace')
    await page.pause()
})