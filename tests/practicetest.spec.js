//Handle......
// import { test, expect } from '@playwright/test';

// test('Handle Alerts', async ({ page }) => {

    
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//     page.on('dialog', async dialog => {
//         console.log('Alert Message:', dialog.message());
//         await dialog.accept(); // Click OK
//     });

//     await page.click('button[onclick="jsAlert()"]');
// });

//Confirmation Alert...

// import { test, expect } from '@playwright/test';

// test('Confirmation Alert ', async ({ page }) => {

//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//     page.on('dialog', async dialog => {
//         console.log(dialog.message());
//         await dialog.dismiss(); 
//     }); 

//     await page.click('button[onclick="jsConfirm()"]');
// });

//Prompt Alert...
// import { test, expect } from '@playwright/test';

// test('Prompt Alert', async ({page}) => {

//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//     page.on('dialog', async dialog => {
//         console.log(dialog.message());
//         await dialog.accept('Jai');
//     });

//     await page.click('button[onclick="jsPrompt()"]');
// }); 

//Radio Button.....
// import { test } from '@playwright/test';

// test('Radio Button', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     await page.check('#male');
//     const status = await page.locator('#male').isChecked();
//     console.log(status);
//     await page.waitForTimeout(5000);
// });

