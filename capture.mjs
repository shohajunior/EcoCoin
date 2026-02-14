import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });

        console.log('Navigating to localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

        // Capture Hero
        console.log('Capturing Hero...');
        await page.screenshot({ path: 'layout_hero_refined.png' });

        // Scroll to Footer
        console.log('Scrolling to Footer...');
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await new Promise(r => setTimeout(r, 1000)); // Wait for scroll/animations

        console.log('Capturing Footer...');
        await page.screenshot({ path: 'layout_footer_refined.png' });

        await browser.close();
        console.log('Screenshots saved.');
    } catch (e) {
        console.error('Error:', e);
        process.exit(1);
    }
})();
