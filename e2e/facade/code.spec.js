export class code{
    constructor(page){
        this.page1=page
    }
    
    //Search
    async search(){
        await this.page1.getByPlaceholder('Search Amazon.in').fill('T shirt')
        await this.page1.keyboard.press('Enter')

    }
     
    //Click Product
    async clickproduct(){
        await this.page1.getByText('100% Cotton Oversized T-Shirt Unisex Drop Shoulder Dye Washed Street Look Black Pack of 1').first().click()


    }

    async handle(action){
        const [newpage] = await Promise.all([
            this.page1.waitForEvent('page'),
          action()
        ])
        await newpage.waitForLoadState();
        return newpage();  // Navigate the one page to another page
    }

    //Add To Cart
    async addtocart(){
        await this.page1.locator('//input[@name="submit.add-to-cart"]').click();
    }
    
}
