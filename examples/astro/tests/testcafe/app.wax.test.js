import { Selector } from 'testcafe';
import { runWax } from '@wally-ax/wax-dev';
import waxConfig from '../../waxConfig.cjs';

fixture('Astro App Accessibility Tests with TestCafe + Wax')
  .page('http://localhost:4321');

test('should detect accessibility violations for main app', async (t) => {
  // Get the page HTML
  const html = await t.eval(() => document.documentElement.outerHTML);
  
  // Run wax accessibility test
  const violations = await runWax(html, waxConfig);
  console.log('TestCafe wax violations from REAL app:', violations);
  
  await t.expect(violations).ok();
  await t.expect(Array.isArray(violations)).ok();
});

test('should detect accessibility violations for buttons', async (t) => {
  // Get the buttons section HTML
  const buttonsElement = Selector('.buttons');
  const buttonsHTML = await t.eval(() => {
    const element = document.querySelector('.buttons');
    return element ? element.innerHTML : '';
  });
  
  // Run wax accessibility test on buttons
  const violations = await runWax(buttonsHTML, waxConfig);
  await t.expect(violations).ok();
  await t.expect(Array.isArray(violations)).ok();
});

test('should detect accessibility violations for headings', async (t) => {
  // Get the container HTML
  const containerHTML = await t.eval(() => {
    const element = document.querySelector('.container');
    return element ? element.innerHTML : '';
  });
  
  // Run wax accessibility test on container
  const violations = await runWax(containerHTML, waxConfig);
  await t.expect(violations).ok();
  await t.expect(Array.isArray(violations)).ok();
});

test('should detect accessibility violations for links', async (t) => {
  // Get the links section HTML
  const linksHTML = await t.eval(() => {
    const element = document.querySelector('.links');
    return element ? element.innerHTML : '';
  });
  
  // Run wax accessibility test on links
  const violations = await runWax(linksHTML, waxConfig);
  await t.expect(violations).ok();
  await t.expect(Array.isArray(violations)).ok();
});

test('should test real Astro app HTML structure', async (t) => {
  // Verify we're testing the actual Astro app HTML
  await t.expect(Selector('title').innerText).eql('Astro Testing Demo');
  await t.expect(Selector('.container').visible).ok();
  await t.expect(Selector('.btn.primary').visible).ok();
  await t.expect(Selector('.link.external').visible).ok();
}); 