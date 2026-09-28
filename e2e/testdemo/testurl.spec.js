import{test} from '@playwright/test'
import { url } from "./testcode";

test ('testautomation', async({page})=>{
    await page.goto ('https://testautomationpractice.blogspot.com/')

    const now = new url(page)

    await now.name();

    

})