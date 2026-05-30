import{test,expect} from '@playwright/test';
test('CheckBox',async({page})=>{
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.mouse.wheel(0,700);
    await page.locator('//input[@class="Automation"]').check();
    await page.pause();
})