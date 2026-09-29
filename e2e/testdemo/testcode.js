export class url{
    constructor(page){
        this.url=page
    }

    async name(){
        await this.url.getByPlaceholder('Enter Name').fill('Jaya Prakash')
    }

    async email(){
        await this.url.locator('#email').fill('jayaprakash36847@gmail.com')
    }

    async phone(){
        await this.url.locator('//input[@id="phone"]').fill('8667261246')
    }

    async address(){
        await this.url.locator('//textarea[@id="textarea"]').fill('Chennai')
    }

    async gender(){
        await this.url.locator('//input[@id="male"]').check()

    }

    async checkbox(){
        await this.url.locator('//input[@id="sunday"]').check();
        await this.url.locator('//input[@id="friday"]').check();
    }

}