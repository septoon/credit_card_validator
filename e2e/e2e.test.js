import puppeteer from 'puppeteer';

describe('card validator', () => {
  let browser = null;
  let page = null;
  const url = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('invalid card', async () => {
    await page.goto(url);
    const input = await page.$('#card_number');
    await input.type('2222');
    const btn = await page.$('#submitform');
    btn.click();

    await page.waitFor('.invalid');
  });

  test('valid card', async () => {
    await page.goto(url);
    const input = await page.$('#card_number');
    await input.type('2200021019042597');
    const btn = await page.$('#submitform');
    btn.click();

    await page.waitFor('.valid');
  });
});
