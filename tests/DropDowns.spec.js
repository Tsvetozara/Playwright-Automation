const {test, expect} =require('@playwright/test');
const { urlToHttpOptions } = require('url');

test('Handle Dropdowns', async ({page}) => {
   
   await page.goto('https://testautomationpractice.blogspot.com/');


   //Multiple ways to selct option from the dropdown

   //await page.locator("#country").selectOption({label: 'India'}); //label / visible text
  // await page.locator("#country").selectOption('India'); //visible text
  // await page.locator("#country").selectOption({vaue: 'uk'}); //by using value
  // await page.locator("#country").selectOption({index: 1}); //by using index
  // await page.selectOption("#country", 'India'); // by text


    //Assertions

    // 1) check number of options in dropdown 
    // const options=await page.locator('#country option')
    // await expect(options).toHaveCount(10);


    // 2) check number of options in dropdown 
    // const options=await page.$$('#country option')
    // console.log("Number of options:", options.length)
    // await expect(options.length).toBe(10);

    // 3) check presence of value in the dropdown
    //const content=await page.locator('#country').textContent()
    //await expect(content.includes('India')).toBeTruthy();

    //4) check presence of value in the dropdown - using looping
    /*const options=await page.$$('#country option')
    let status=false;

    for(const option of options)
    {
      console.log(await option.textContent())
      let value=await options.textContent();
      if (value.includes('France'))
      {
        status=true;
        break;
      }
    }
    expect(status).toBeTruthy();
  */

    //5) select option from dropdown using loop
    /*const options=await page.$$('#country option')

    for(const option of options)
    {
      let value=await option.textContent();
      if (value.includes('France'))
      {
        await page.selectOption("#country", value);
        break;
      }
    }
  */

  await page.waitForTimeout(5000);

  await page.close();

});
