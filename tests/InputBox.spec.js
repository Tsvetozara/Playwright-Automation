const {test, expect} =require('@playwright/test');

test('Handle InputBoxes', async ({page}) => {
   
   await page.goto('https://itera-qa.azurewebsites.net/home/automation');

   //InputBox first name

   await expect(await page.locator("//input[@id='name']")).toBeVisible();
   await expect(await page.locator("//input[@id='name']")).toBeEmpty
   await expect(await page.locator("//input[@id='name']")).toBeEditable();
   await expect(await page.locator("//input[@id='name']")).toBeEnabled();
   
  
  await page.locator("//input[@id='name']").fill("John");   

  await page.waitForTimeout(5000);   // pausing code  
  
  await page.close();

});
