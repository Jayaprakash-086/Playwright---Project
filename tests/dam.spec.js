import{test,expect} from '@playwright/test'
test('test1',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    await page.locator('#username').fill('Jaya Prakash')
    
    const name = await page.getByText('Submit Form').textContent();
    console.log(name);

    await page.locator("//input[@id='email']").fill('darkviper168@gmail.com')
    await page.locator("//input[@name='password']").fill('Dark@123')
    await page.locator("//input[@type='number']").fill('23')
    await page.locator("//input[@value='standard']").check()

    const source = await page.locator('#draggable')
    const destination = await page.locator('#droppable')

     await source.dragTo(destination)
    await page.pause();





})