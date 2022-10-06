import {test, expect} from '@playwright/test'

test('Upload a Single File', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/FileUpload.html"
    await page.goto(url)
    const btnChooseFile = page.locator("#myFile")
    await page.setInputFiles("#myFile", "./htmlresources/Alert.html")
    await page.pause()
})
test('Upload Multiple Files', async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/FileUpload.html"
    await page.goto(url)
    const btnChooseFile = page.locator("#myFile")
    await page.setInputFiles("#myFile", ["./htmlresources/Alert.html", "./htmlresources/Dropdown.html"])
    await page.pause()
})
test('Upload Multiple Files - Non-Input element', async({page}) => {
    const url = "https://postimages.org/"
    await page.goto(url)
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#uploadFile').click(),
      ])
      await fileChooser.setFiles(["./htmlresources/Alert.html", "./htmlresources/Dropdown.html"])
})
