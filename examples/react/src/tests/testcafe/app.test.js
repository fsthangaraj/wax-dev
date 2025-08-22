import { Selector } from 'testcafe';

fixture('React App TestCafe Tests')
    .page('http://localhost:3000');

test('should display the main heading', async t => {
    const heading = Selector('h1');
    await t.expect(heading.textContent).contains('React Testing Demo');
});

test('should display welcome heading', async t => {
    const welcomeHeading = Selector('h2');
    await t.expect(welcomeHeading.textContent).contains('Welcome to our simple React app!');
});

test('should have interactive buttons', async t => {
    const clickButton = Selector('button').withText('Click me!');
    const alertButton = Selector('button').withText('Show Alert');
    
    await t.expect(clickButton.visible).ok();
    await t.expect(alertButton.visible).ok();
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
    const reactLink = Selector('a').withText('React Documentation');
    const testingLink = Selector('a').withText('Testing Library');
    const jestLink = Selector('a').withText('Jest Testing Framework');
    
    await t.expect(reactLink.getAttribute('href')).eql('https://reactjs.org');
    await t.expect(testingLink.getAttribute('href')).eql('https://testing-library.com');
    await t.expect(jestLink.getAttribute('href')).eql('https://jestjs.io');
});

test('should show alert when Show Alert button is clicked', async t => {
    const alertButton = Selector('button').withText('Show Alert');
    
    // Set up alert handler
    await t.eval(() => {
        window.alert = (message) => {
            window.alertMessage = message;
        };
    });
    
    await t.click(alertButton);
    
    // Check alert was called
    const alertMessage = await t.eval(() => window.alertMessage);
    await t.expect(alertMessage).eql('Hello from React!');
}); 