import { test, expect } from '@playwright/test'

test('Handling Alert - Validate Alert Text and Click OK', async ({page}) => {
    await page.goto("file:///"+process.cwd()+"/htmlresources/Alert.html")
    await page.pause()
    await page.click("#alert-button")
    page.on('dialog', async(dialog) => {
       console.log(dialog.message())
       dialog.accept()
    })
})

