import { Selector } from 'testcafe';

fixture('Vue App TestCafe Tests')
    .page('http://localhost:3001');

test('should display the main heading', async t => {
    const heading = Selector('h1');
    await t.expect(heading.textContent).eql('Vue Testing Demo');
});

test('should display welcome heading', async t => {
    const heading = Selector('h2');
    await t.expect(heading.textContent).eql('Welcome to our simple Vue app!');
});

test('should have interactive buttons', async t => {
    const clickButton = Selector('button').withText(/Click me!/);
    const alertButton = Selector('button').withText('Show Alert');
    
    await t.expect(clickButton.exists).ok();
    await t.expect(alertButton.exists).ok();
});

test('should increment counter when button is clicked', async t => {
    const clickButton = Selector('button').withText(/Click me!/);
    
    // Check initial state
    await t.expect(clickButton.textContent).contains('Clicked 0 times');
    
    // Click the button
    await t.click(clickButton);
    
    // Check updated state
    await t.expect(clickButton.textContent).contains('Clicked 1 times');
});

test('should have external links', async t => {
    const vueLink = Selector('a[href="https://vuejs.org"]');
    const testingLink = Selector('a[href="https://testing-library.com"]');
    const vitestLink = Selector('a[href="https://vitest.dev"]');
    
    await t.expect(vueLink.exists).ok();
    await t.expect(testingLink.exists).ok();
    await t.expect(vitestLink.exists).ok();
});

test('should show alert when Show Alert button is clicked', async t => {
    const alertButton = Selector('button').withText('Show Alert');
    
    // Mock alert
    await t.eval(() => {
        window.alert = (message) => {
            window.alertMessage = message;
        };
    });
    
    await t.click(alertButton);
    
    const alertMessage = await t.eval(() => window.alertMessage);
    await t.expect(alertMessage).eql('Hello from Vue!');
}); 