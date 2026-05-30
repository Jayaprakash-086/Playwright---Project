import {test,expect,chromium} from '@playwright/test';

test('Basic lines',async({page})=>{

    await page.goto('https://vinothqaacademy.com/mouse-event/')
 //Mouse Double Click
    await page.locator('#doubleBtn').dblclick();
//Mouse Button
   await page.locator('#rightBtn').click({button:'right'})


    await page.waitForTimeout(6000);
//Mouse over
// expect(await page.locator('#tooltipStatus')).toHaveText('Tooltip Visible')


//     await page.waitForTimeout(6000);

// })



})