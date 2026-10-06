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

    async datepicker1(){
        await this.url.locator('//input[@id="datepicker"]').click();
        await this.url.getByRole('link',{name:'18'}).click();
    }

    async datepicker2(){
        await this.url.locator('//input[@id="txtDate"]').click();
        await this.url.getByRole('link',{name:'22'}).click();
    }

    async datepicker3(){
        await this.url.locator('//input[@id="start-date"]').dbclick()
        await this.url.getByRole('link',{name:'26'}).click();

        await this.url.locator('//input[@id="end-date"]').dbclick()
        await this.url.getByRole('link',{name:'28'}).click();
    }

    //Uploaded:C:\Users\Admin\Pictures\Saved Pictures\507.jpg
    async uploaded(){
        await this.url.locator('#singleFileInput').click();
        await this.url.locator('#singleFileInput').setInputFiles('507.jpg.webp');
        }

}