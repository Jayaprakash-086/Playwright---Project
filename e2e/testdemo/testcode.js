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

    async country(){
        const drop = await this.url.locator('#country')
        drop.selectOption({value:'brazil'})
    }

    async colour(){
        const color = await this.url.locator('#colors')
        color.selectOption({label:'White'})
    }

    async sortlist(){
        const sort = await this.url.locator('#animals')
        sort.selectOption({label:'Lion'})
    }


}