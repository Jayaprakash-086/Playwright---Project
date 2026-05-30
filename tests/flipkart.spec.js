import{test,expect} from '@playwright/test';
test('Flipkart',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('//input[@title="Search for Products, Brands and More"]').nth(2).fill('Bat')
    await page.keyboard.press('Enter');
})