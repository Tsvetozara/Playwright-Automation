const {test, expect} = require('@playwright/test');

test('Locators Test', async ({page}) => {

    await page.goto('https://demoblaze.com/');


    /*
    await expect(await page.locator('id=login2')).toBeVisible();
    await expect(await page.locator('id=login2')).toBeEmpty();
    await expect(await page.locator('id=login2')).toBeEditable();
    await expect(await page.locator('id=login2')).toBeEnabled();
    */

    //click on login button

    await page.click('id=login2');

    //provide user name

    await page.fill('#loginusername', 'pavanol');

    await page.waitForTimeout(5000); //pausing
 
    //provide password

    await page.fill("input[id='loginpassword']", 'test@123');

    //click onlogin button

    await page.click("//button[normalize-space()='Log in']");

    //verify log out link presence

    const logoutlink = await page.locator("//a[normalize-space()='Log in']");

    await expect(logoutlink).toBeVisible();

    await page.close()


})
