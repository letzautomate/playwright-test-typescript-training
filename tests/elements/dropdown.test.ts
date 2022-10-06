import { test, expect } from '@playwright/test';
test('Dropdown1', async ({ page }) => {
  const url = "file:///"+process.cwd()+"/htmlresources/Dropdown.html"
  await page.goto(url)
  await page.goto('http://autopract.com/selenium/dropdown1/');
  const dropdown = page.locator('#cars')
  await dropdown.selectOption({index: 3})   
});
test('Dropdown2', async ({ page }) => {
  const url = "file:///"+process.cwd()+"/htmlresources/Dropdown.html"
  await page.goto(url)
  const dropdown = page.locator('#cars')
  await dropdown.selectOption({label: "BMW"}) 
});
test('Dropdown3', async ({ page }) => {
  const url = "file:///"+process.cwd()+"/htmlresources/Dropdown.html"
  await page.goto(url)
  const dropdown = page.locator('#cars')
  await dropdown.selectOption("Beamer") 
});
test('Dropdown Select Multiple Values', async ({ page }) => {
  const url = "file:///"+process.cwd()+"/htmlresources/Dropdown-Multiple.html"
  await page.goto(url)
  const dropdown = page.locator('#cars')
    await page.selectOption('#cars', ['merc', 'Beamer']) 
    await page.pause()
});
test('Dropdown2 Validate the selection', async ({ page }) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Dropdown.html"
    await page.goto(url)
    const dropdown = page.locator('#cars')
    await dropdown.selectOption({label: "BMW"})  
    const selectedValue = await page.$eval<string, HTMLSelectElement>('#cars', ele => ele.value) 
    console.log(`Selected Value is ${selectedValue}`)
});