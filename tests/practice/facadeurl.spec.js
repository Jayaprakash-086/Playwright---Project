import {test,expect} from '@playwright/test'
import { code } from './code';
test('test1',async({page})=>{

    await page.goto("https://accounts.google.com/")
    
    const username = new code(page)
    await username.email();
    await page.pause();
})
