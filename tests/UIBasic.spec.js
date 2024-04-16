const {test} = require('@playwright/test');

test('First Playwight test with declare test context', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
});

test.only('First Playwight test with default test context', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client");
});