describe('React App WebdriverIO Tests', () => {
    beforeEach(async () => {
        await browser.url('/');
    });

    it('should display the main heading', async () => {
        const heading = await $('h1');
        await expect(heading).toHaveTextContaining('React Testing Demo');
    });

    it('should display welcome heading', async () => {
        const welcomeHeading = await $('h2');
        await expect(welcomeHeading).toHaveTextContaining('Welcome to our simple React app!');
    });

    it('should have interactive buttons', async () => {
        const clickButton = await $('button*=Click me!');
        const alertButton = await $('button=Show Alert');
        
        await expect(clickButton).toBeDisplayed();
        await expect(alertButton).toBeDisplayed();
    });

    it('should increment counter when button is clicked', async () => {
        const clickButton = await $('button*=Click me!');
        
        // Check initial state
        await expect(clickButton).toHaveTextContaining('Clicked 0 times');
        
        // Click the button
        await clickButton.click();
        
        // Check updated state
        await expect(clickButton).toHaveTextContaining('Clicked 1 times');
    });

    it('should have external links', async () => {
        const reactLink = await $('a=React Documentation');
        const testingLink = await $('a=Testing Library');
        const jestLink = await $('a=Jest Testing Framework');
        
        await expect(reactLink).toHaveAttribute('href', 'https://reactjs.org');
        await expect(testingLink).toHaveAttribute('href', 'https://testing-library.com');
        await expect(jestLink).toHaveAttribute('href', 'https://jestjs.io');
    });

    it('should show alert when Show Alert button is clicked', async () => {
        const alertButton = await $('button=Show Alert');
        
        // Set up alert handler
        await browser.execute(() => {
            window.alert = (message) => {
                window.alertMessage = message;
            };
        });
        
        await alertButton.click();
        
        // Check alert was called
        const alertMessage = await browser.execute(() => window.alertMessage);
        expect(alertMessage).toBe('Hello from React!');
    });
}); 