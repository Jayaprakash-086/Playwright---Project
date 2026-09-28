import {test} from '@playwright/test'
import { demourl } from './democode1.spec'

test('demo',async({page})=>{
    await page.goto('https://www.saucedemo.com/')

    const demo = new demourl(page)

    await demo.username();

    await demo.password();

    await demo.login();

    await demo.addtocart();

    await demo.image();

    await demo.checkout();

    await demo.details();


})