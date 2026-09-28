import {test} from '@playwright/test'
import { code } from './code.spec'
test('Amazon Product',async({page})=>{
    await page.goto('https://www.amazon.in/')

    const amazon1 = new code(page)

    await amazon1.search();

    await amazon1.clickproduct();

    await amazon1.handle();
    
    await amazon1.addtocart();
    

    await page.pause();
})