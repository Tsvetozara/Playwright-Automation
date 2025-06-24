const {test, expect} =require('@playwright/test');

test('RadioButtons', async ({page}) => {
   
   await page.goto('https://itera-qa.azurewebsites.net/home/automation');

   //Radio button
   await page.locator("//input[@value='option2']").check(); //male

   //Assertions for a button to see if it is checked

   await expect(await page.locator("//input[@value='option2']")).toBeChecked();
   await expect(await page.locator("//input[@value='option2']")).isChecked().toBeTruthy();

   await expect(await page.locator("//input[@value='option1']")).isChecked().toBeFalsy();  //female

   await page.close();

});
