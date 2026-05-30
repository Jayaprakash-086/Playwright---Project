import{test,expect} from '@playwright/test';

test('value', async()=>{
    await expect(500).toBe(500);
});