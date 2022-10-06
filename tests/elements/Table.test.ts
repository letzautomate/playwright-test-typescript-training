import {test, expect} from '@playwright/test'

test("Table: Get Rows Count", async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Table.html"
    await page.goto(url)
    const table = page.locator("//table[@name='Customers']")
    const rows = table.locator("//tr")
    const rowsCount = await rows.count()
    console.log(`Number of Rows in the Table are ${rowsCount}`)
})

test("Table: Get Columns Count", async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Table.html"
    await page.goto(url)
    const table = page.locator("//table[@name='Customers']")
    const columns = table.locator("//tr[1]").locator("//th")
    const columnsCount = await columns.count()
    console.log(`Number of Columns in the Table are ${columnsCount}`)
})

test("Table: Get Given Column Index", async({page}) => {
    const url = "file:///"+process.cwd()+"/htmlresources/Table.html"
    await page.goto(url)
    const table = page.locator("//table[@name='Customers']")
    const columns = table.locator("//tr[1]").locator("//th")
    const columnsCount = await columns.count()
    let columnIndex
    for(let index = 0; index < columnsCount; index++){
        if (await columns.nth(index).textContent() === "Country") {
            columnIndex = index
            break
        }
    }
    console.log(`Country Column Index is  ${columnIndex + 1}`)
})

test("Table: Get Given Column Data", async({page}) => {
    let dataArray: Array<string> = []
    const url = "file:///"+process.cwd()+"/htmlresources/Table.html"
    await page.goto(url)
    const table = page.locator("//table[@name='Customers']")
    const rowsCount = await table.locator("//tr").count()
    const columns = table.locator("//tr[1]").locator("//th")
    const columnsCount = await columns.count()
    let columnIndex
    for(let index = 0; index < columnsCount; index++){
        if (await columns.nth(index).textContent() === "Country") {
            columnIndex = index
            break
        }
    }
    console.log(`Country Column Index is  ${columnIndex + 1}`)    
    for(let rowIndex = 2; rowIndex <= rowsCount; rowIndex++) {
        let columnData = await table.locator("//tr["+rowIndex+"]").locator("//td["+(columnIndex + 1)+"]").textContent()
        if (columnData != null ) {
            dataArray.push(columnData)
        }       
    }
    console.log(`Column Data is ${dataArray}`)
})



