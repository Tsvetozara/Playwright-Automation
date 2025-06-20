const {test, expect} =require('@playwright/test');

test('Home Page Test', async ({page}) => {
   
   await page.goto('https://cryptoapis.io/');

   const pageTitle=page.title();
   console.log('Page Title is:', pageTitle);

   await expect(page).toHaveTitle('Crypto APIs blockchain infrastructure suite');

   const pageUrl=page.url();
   console.log('Page URL is:', pageUrl);

   await expect(page).toHaveURL('https://cryptoapis.io/');

   await page.close();

});
