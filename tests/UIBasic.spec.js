const {test, expect} = require('@playwright/test');

test('First Playwight test with declare test context', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
});

test.only('First Playwight test with default test context', async ({page}) => {
    await page.goto("https://vnexpress.net/");
    await expect(page).toHaveTitle("VnExpress - Báo tiếng Việt nhiều người xem nhất");
    await page.locator("xpath=//a[@class='logo']").click();
});

test('@Web Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "cuonghv64@wru.vn";
    const pwd = "Minhhue1921";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(pwd);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
  
 })

 test('Test dropdown and radio button', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("a[routerlink='/auth/register']").click();
    await page.locator("select[formcontrolname='occupation']").selectOption("3: Engineer");
    await page.locator("input[value='Male']").click();  
    // await page.pause();
 })