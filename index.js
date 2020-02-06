const puppeteer = require("puppeteer");
const url = "https://www.google.com/";

const run = async () => {

    let browser = await puppeteer.launch({
        // devtools: true,
        headless: false,
    });

    let page = await browser.newPage();

    page.setViewport({ width: 1280, height: 926 });

    await page.goto(url);
    await page.waitFor(5000);

    await page.click('a#gb_70');
    await page.waitFor(2000);

    await page.type('input[name="identifier"]', 'your@email.test');
    await page.waitFor(2000);

    await page.click('#identifierNext');
    await page.waitFor(5000);

    await browser.close();
}

run();