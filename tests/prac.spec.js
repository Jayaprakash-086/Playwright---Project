// import { test,expect } from '@playwright/test';
// test('radiobutton', async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('#male').check();
//     await page.pause()
// })



//Checkbox
// import { test,expect } from '@playwright/test';
// test('checkbox', async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('#sunday').check();
//     await page.pause()
// })



//Dropdown
// import { test,expect } from '@playwright/test';
// test('dropdown', async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.mouse.wheel(0,700)
//     const drop = await page.locator('#country');
//     drop.selectOption({value:'uk'})
//     await page.pause()
// })


//Practice
// import {test,expect}from '@playwright/test'
// test('login', async({page})=>{
//     await page.goto('https://demowebshop.tricentis.com/')
//     await page.locator('//a[@class="ico-register"]').click()
//     await page.locator('#gender-male').check();
//     await page.locator('//input[@id="FirstName"]').fill('Jaya')
//     await page.locator('//input[@id="LastName"]').fill('Prakash')
//     await page.locator('#Email').fill('jayaprakash07@gmail.com')
//     await page.locator('#Password').fill('Jai123')
//     await page.locator('#ConfirmPassword').fill('Jai123')
//     await page.locator('//input[@value="Register"]').click()
//     await page.locator('//input[@value="Continue"]').click()
//     await page.getByText('Log out').click();
//     const comp = await page.getByText('Computers')
//     comp.await.page.nth(6).click();
//     await page.getByText('Notebooks').click()
//     await page.pause();
// })































































// import {test,expect} from '@playwright/test'
// test('test',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.getByPlaceholder('Enter Name').fill('Jaya Prakash')
    // await page.locator('#email').fill('jayaprakash@gmail.com')
    // await page.locator('#phone').fill('8667261246')
    // await page.getByRole('textbox',{name:'Address:'}).fill('Chennai')
    // await page.locator('#male').check();
    // await page.locator('#sunday').check();
    // await page.locator('#monday').check();
    // await page.locator('#friday').check();

    // const drop = await page.locator('#country')    
    // drop.selectOption({value:'uk'})

    // const drop1 = await page.locator('#colors')
    // drop1.selectOption({label:'Red'})

    // const drop2 = await page.locator('#animals')
    // drop2.selectOption({label:'Dog'})

    // await page.locator('#datepicker').dblclick();
    // await page.getByRole('link',{name:'12'}).click();

    // await page.pause(); 
 //})

 import {test,expect} from '@playwright/test'
 test("file download",async({page})=>{
    
    await page.goto('https://the-internet.herokuapp.com/')
    await page.
 })