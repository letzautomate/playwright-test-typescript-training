import { test, expect } from '@playwright/test'

test('TextBox @textbox', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/TextBox.html"
    await page.goto(url)
    const txtFirstName = page.locator("#fname")
    await txtFirstName.fill("Hello")
    const textBoxValue = await txtFirstName.inputValue()
    await expect(textBoxValue).toBe("Hello")
})

test('TextBox Method 2 @textbox', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/TextBox.html"
    await page.goto(url)
    await page.fill("#fname", "Hello")
    const textBoxValue = await page.inputValue("#fname")
    await expect(textBoxValue).toBe("Hello")
})

test('TextBox Method 3 @textbox', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/TextBox.html"
    await page.goto(url)
    const txtFirstName = page.locator("#fname")
    await txtFirstName.type("Hello")
    await txtFirstName.type("Hello")
    const textBoxValue = await txtFirstName.inputValue()
    await expect(textBoxValue).toBe("HelloHello")
})

test("TextBox - Verify Disabled", async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/TextBox.html"
    await page.goto(url)
    const textBox = page.locator("#lname")
    const enabled = await textBox.isEditable()
    console.log(enabled)
    expect(enabled).toBe(false)
})

test("TextBox - Verify Disabled isDisabled", async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/TextBox.html"
    await page.goto(url)
    const textBox = page.locator("#lname")
    const enabled = await textBox.isDisabled()
    expect(enabled).toBe(true)
})