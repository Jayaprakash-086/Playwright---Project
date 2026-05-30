import{test,expect} from '@playwright/test';
test('Automation Exercise',async({page})=>{

    await page.goto('https://automationexercise.com/');
    await page.getByText(' Signup / Login').click();
    await page.locator('//input[@placeholder="Name"]').fill('Viper');
    await page.locator('//input[@data-qa="signup-email"]').fill('mad7577@gmail.com');
    await page.locator('//button[@data-qa="signup-button"]').click();
    await page.locator('//input[@value="Mr"]').check();
    await page.locator('//input[@data-qa="password"]').fill('Viper@123');
    const days = await page.locator('//select[@data-qa="days"]');
    days.selectOption({value:'5'});
    const month = await page.locator('//select[@data-qa="months"]');
    month.selectOption({value:'1'});
    const years = await page.locator('//select[@data-qa="years"]')
    years.selectOption({value:'2000'});
    await page.mouse.wheel(0,400);
    await page.locator('#newsletter').check();
    await page.locator('#first_name').fill('Play');
    await page.locator('#last_name').fill('Wright');
    await page.locator('#address1').fill('Apple Street, Mango');
    const country = await page.locator('//select[@data-qa="country"]')
    country.selectOption({value:'India'})
    await page.locator('#state').fill('Tree');
    await page.locator('#city').fill('Apple');
    await page.locator('#zipcode').fill('630005');
    await page.locator('#mobile_number').fill('9874563210');
    await page.getByText('Create Account').click();
    await page.getByText('Continue').click();
    await page.mouse.wheel(0,100);
    await page.locator('//a[@href="/product_details/2"]').click();
    await page.locator('//button[@class="btn btn-default cart"]').click();
    await page.goBack();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0,-400);
    await page.getByText(' Cart').first().click();
    await page.locator('//a[@class="cart_quantity_delete"]').click();
    await page.getByText(' Logout').click();
    await page.waitForTimeout(5000);
    console.log('Project Completed Successfully');
})