export class demourl{
constructor(page){
    this.demourl=page
} 

//Username
 async username(){
    await this.demourl.locator('#user-name').fill('standard_user')
}

//Password
async password(){
    await this.demourl.locator('//input[@type="password"]').fill('secret_sauce')
}

//Login
async login(){
    await this.demourl.locator('//input[@type="submit"]').click();
}

//Add to Cart
async addtocart(){
    await this.demourl.getByText('Add to cart').first();
}

//image
async image(){
    await this.demourl.locator('#shopping_cart_container').click()
}

//button 
async checkout(){
    await this.demourl.locator('//button[@name="checkout"]').click();
}

//
async details(){
    await this.demourl.locator('#first-name').fill('Jaya Prakash')
    await this.demourl.locator('#last-name').fill('R')
    await this.demourl.locator('#postal-code').fill('4465476')
    await this.demourl.locator('//input[@type="submit"]').click()
}

}