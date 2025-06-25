const {test, expect} =require('@playwright/test');

test.skip('Alert with OK', async ({page}) => {
   
   await page.goto('https://testautomationpractice.blogspot.com/');

   //Enabling alert handling //Dialog Window Handler

    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();
   })

   await page.click('//button[normalize-space()="Alert"]');
   await page.waitForTimeout(5000);

});

test('Confirmation Dialog - Alert with Ok and Cancel', async ({page}) => {
   
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enabling Dialog Window Handler

   page.on('dialog', async dialog=>{
   expect(dialog.type()).toContain('confirm')
   expect(dialog.message()).toContain('Press a button!')
   //await dialog.accept(); //close by using OK button
   await dialog.dismiss(); //close by using Cancel button
  })

  await page.click('//button[normalize-space()="Confirm Box"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')

  await page.waitForTimeout(5000);

});

test.skip('Prompt Dialog', async ({page}) => {
   
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enabling Dialog Window Handler

   page.on('dialog', async dialog=>{
   expect(dialog.type()).toContain('prompt')
   expect(dialog.message()).toContain('Please enter your name:')
   expect(dialog.defaultValue()).toContain('Harry Potter')
   await dialog.accept('John');

  })

  await page.click('//button[normalize-space()="Prompt"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?')

  await page.waitForTimeout(5000);

});

