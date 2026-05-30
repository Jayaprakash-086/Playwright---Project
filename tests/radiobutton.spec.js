import {test,expect} from '@playwright/test'
test ('Radio Button', async({page})=>{
    await page.goto('https://artoftesting.com/samplesiteforselenium')
    await page.mouse.wheel(0,800);
    await page.locator('//input[@value="female"]').check();
    await page.pause();
})