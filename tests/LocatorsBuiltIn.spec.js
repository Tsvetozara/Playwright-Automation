/*
page.getByAltText() - to locate an element, ususlly image, by its text alternative
page.getPlaceholder() - to locate an input by placeholder
page.getByRole() - to locate by explicit and implicit accessibility attributes
page.getByText() - to locate by text content

page.getByLabel() - to locate a form control by associated label's text
page.getByTitle() - to locate an element by its title attribute
page.getByTestId() - to locate an element based on its data-testid attribute
*/

const {test, expect} = require('@playwright/test');

test('Built-In Locators', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltText() - to locate an element, ususlly image, by its text alternative

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //page.getPlaceholder() - to locate an input by placeholder

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {type: 'submit'}).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(await page.getByText(name)).toBeVisible();

    await page.close()


})
