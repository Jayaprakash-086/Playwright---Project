import{test,expect} from '@playwright/test';
test('Main Project',async({page})=>{
    await page.goto('https://www.pib.gov.in/allRel.aspx?reg=3&lang=1');
    await page.mouse.wheel(0,3000);
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0,-3000);
    await page.locator('//i[@class="fa-home_r"]').click();
    await page.getByText('Speeches').click();
    await page.getByText('English Translation of Prime Minister’s Press Statement during the Joint Press Statement with the Prime Minister of Norway ').click();
    
    
    await page.locator('//a[@aria-label="Home"]').nth(3).click();
    
    await page.locator('//a[@aria-label="About Us"]').hover();
    await page.getByText('About PIB').click();
    await page.locator('/html/body/pdf-viewer//viewer-toolbar//div/div[3]/viewer-download-controls//cr-icon-button').click();


    // page.locator('//li[@class="col-md-0"]').nth(16).click()
    // page.on('dialog box',async dialog=>{
    //      console.log(dialog.message());
    //      await page.accept();
    //      await page.pause();
   // })
   

//     const region = await page.locator('//select[@class="classic form-control"]');
//     await region.selectOption({value:'6'});

//     const language = await page.locator('//select[@aria-label="Language Selection"]');
//     language.selectOption({value:'1'});
   

//     //Text
//     await page.getByText('Prime Minister holds bilateral talks with Prime Minister of Norway ').click();
//  await page.pause();


})