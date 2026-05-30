import{test,expect} from '@playwright/test';

test('Dropdown',async({page})=>{
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.mouse.wheel(0,900);
    const drop = await page.locator('#testingDropdown');
    drop.selectOption({value:'Manual'});
    await page.waitForTimeout(5000);
});