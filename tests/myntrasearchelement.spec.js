import{test,expect} from '@playwright/test';
test('Myntra',async({page})=>{
    await page.goto('https://www.myntra.com/');
    await page.getByPlaceholder('Search for products, brands and more').fill('Rc Car');
    await page.locator('//a[@class="desktop-submit"]').click();
    await page.goBack();
    await page.goForward();
})