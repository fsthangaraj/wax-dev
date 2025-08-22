import { Selector } from 'testcafe';
import runWax from '@wally-ax/wax-dev';
import waxConfig from '../../waxConfig';

fixture('App Accessibility Tests with Wax')
    .page('http://localhost:3000');

test('should have no accessibility violations for main app', async t => {
    const bodyHTML = await t.eval(() => document.body.innerHTML);
    console.log('bodyHTML testcafe',bodyHTML);
    const violations = await runWax(bodyHTML, waxConfig);
    console.log('violations testcafe',violations);
    await t.expect(violations.length).eql(0);
});

test('should have no accessibility violations for buttons', async t => {
    const containerHTML = await t.eval(() => {
        const container = document.querySelector('.container');
        return container ? container.innerHTML : '';
    });
    const violations = await runWax(containerHTML, waxConfig);
    await t.expect(violations.length).eql(0);
});

test('should have no accessibility violations for headings', async t => {
    const headingsHTML = await t.eval(() => {
        const headings = document.querySelectorAll('h1, h2, h3');
        const parent = headings[0]?.parentElement;
        return parent ? parent.innerHTML : '';
    });
    const violations = await runWax(headingsHTML, waxConfig);
    await t.expect(violations.length).eql(0);
});

test('should have no accessibility violations for links', async t => {
    const linksHTML = await t.eval(() => {
        const links = document.querySelectorAll('a');
        const parent = links[0]?.parentElement;
        return parent ? parent.innerHTML : '';
    });
    const violations = await runWax(linksHTML, waxConfig);
    await t.expect(violations.length).eql(0);
});

test('write violations to file', async t => {
    const bodyHTML = await t.eval(() => document.body.innerHTML);
    const violations = await runWax(bodyHTML, waxConfig);
    
    // Write violations to file
    const fs = require('fs');
    const path = require('path');
    const violationsPath = path.join(__dirname, 'wax_violations.json');
    fs.writeFileSync(violationsPath, JSON.stringify(violations, null, 2));
    
    await t.expect(violations).ok();
}); 