const runWax = require('@wally-ax/wax-dev');
const waxConfig = require('../../waxConfig');

describe('App Accessibility Tests with Wax', () => {
    beforeEach(async () => {
        await browser.url('/');
    });

    it('should have no accessibility violations for main app', async () => {
        const bodyHTML = await browser.execute(() => document.body.innerHTML);
        const violations = await runWax(bodyHTML, waxConfig);
        console.log('violations webdriverio',violations);
        expect(violations).toHaveLength(0);
    });

    it('should have no accessibility violations for buttons', async () => {
        const containerHTML = await browser.execute(() => {
            const container = document.querySelector('.container');
            return container ? container.innerHTML : '';
        });
        const violations = await runWax(containerHTML, waxConfig);
        expect(violations).toHaveLength(0);
    });

    it('should have no accessibility violations for headings', async () => {
        const headingsHTML = await browser.execute(() => {
            const headings = document.querySelectorAll('h1, h2, h3');
            const parent = headings[0]?.parentElement;
            return parent ? parent.innerHTML : '';
        });
        const violations = await runWax(headingsHTML, waxConfig);
        expect(violations).toHaveLength(0);
    });

    it('should have no accessibility violations for links', async () => {
        const linksHTML = await browser.execute(() => {
            const links = document.querySelectorAll('a');
            const parent = links[0]?.parentElement;
            return parent ? parent.innerHTML : '';
        });
        const violations = await runWax(linksHTML, waxConfig);
        expect(violations).toHaveLength(0);
    });

    it('write violations to file', async () => {
        const bodyHTML = await browser.execute(() => document.body.innerHTML);
        const violations = await runWax(bodyHTML, waxConfig);
        
        // Write violations to file
        const fs = require('fs');
        const path = require('path');
        const violationsPath = path.join(__dirname, 'wax_violations.json');
        fs.writeFileSync(violationsPath, JSON.stringify(violations, null, 2));
        
        expect(violations).toBeDefined();
    });
}); 