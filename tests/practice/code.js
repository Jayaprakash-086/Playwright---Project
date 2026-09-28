export class code{
    constructor(page){
        this.page1=page;
    }
    async email(){
        await this.page1.getByLabel('Email or phone').fill('jayaprakash36847@gmail.com');
        await this.page1.keyboard.press('Enter')
    }
}