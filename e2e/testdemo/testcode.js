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

    async
}